import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../assets/Colors';
import Carousel from 'react-native-reanimated-carousel';
import Home from '../Home';
import Menu from '../Menu';
import Search from '../Search';
import HomeStack from '../HomeStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyAccount from '../MyAccount';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {image} from '../../../assets/images';
import {data} from '../../../constant';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import SearchResult from '../Search/SearchResult';
import FabFamily from '../MyAccount/FabFamily';
import CategorySection from '../CategorySection';
import HomeHeader from '../Home/HomeHeader';
import Fonts from '../../../assets/fonts';
import {BaseURL2, getComponentData, logout} from '../../Common/Helper';
import AccordianMenu from './AccordianMenu';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
// import WomenCategory from '../Home/WomenCategory';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
  // An function that increment 👆🏻 the previous state like here
  // is better than directly setting `value + 1`
}

const DrawerContent = () => {
  const forceUpdate = useForceUpdate();
  const dispatch = useDispatch();
  const focus = useIsFocused();
  const [listData, setListData] = useState();
  const [userProfileData, setUserProfileData] = useState();
  const navigation = useNavigation();
  const Profile = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    if (getToken.isCheck) {
      navigation.navigate('MyAccount', {
        screen: 'MyAccounts',
      });
    } else {
      navigation.navigate('MyAccount', {
        screen: 'Login_Register',
      });
    }
  };
  const checkOrder = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    if (getToken.isCheck) {
      navigation.navigate('MyOrder');
    } else {
      navigation.navigate('MyAccount', {
        screen: 'Login_Register',
      });
    }
  };
  const checkFabFamily = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    if (getToken.isCheck) {
      navigation.navigate('MyAccount', {screen: 'FabFamily'});
    } else {
      navigation.navigate('MyAccount', {screen: 'FabFamily'});
    }
  };
  const shownData = data => {
    let filtered = data.filter(item => {
      return (
        item.title == 'Shop By Collection' ||
        item.title == 'Shop By Brand' ||
        item.title == 'Sale' ||
        item.title == 'Services' ||
        item.title == 'Gift Cards' ||
        item.title == 'FAQs' ||
        item.title == 'Contact Us'
      );
    });
    setListData(filtered);
  };
  const categoryList = async () => {
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=FabHamBurgerComponent&lang=en&curr=INR`,
    );
    shownData(response.component[0].navigationNode.children);
  };
  const getProfiledata = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await fetch(
      `${BaseURL2}/users/current?lang=en&curr=INR`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${getToken?.token_type} ${getToken?.access_token}`,
          Accept: 'application/json',
        },
      },
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        setUserProfileData(res);
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  useEffect(() => {
    categoryList();
  }, []);
  useEffect(() => {
    getProfiledata();
  }, [focus]);
  return (
    <ScrollView style={{flex: 1}}>
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={() => Profile()}
        style={{
          backgroundColor: '#352535',
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingBottom: 10,
          paddingTop: 25,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            height: 55,
            width: 55,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            marginVertical: 10,
          }}>
          {userProfileData?.name ? (
            <Text style={{fontSize: 30, color: '#CDCDCD'}}>
              {userProfileData?.name?.match(/\b(\w)/g).join('')}
            </Text>
          ) : (
            <Ionicons name="person" size={30} />
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {userProfileData?.name ? (
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.Assistant700,
                fontSize: 16,
              }}>
              {userProfileData?.name}
            </Text>
          ) : (
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.Assistant700,
                fontSize: 16,
              }}>
              Log in . Sign Up
            </Text>
          )}
          <Ionicons name="md-chevron-forward-sharp" color="#fff" size={16} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => checkOrder()}
        style={{
          padding: 20,
          flexDirection: 'row',
          borderBottomColor: '#ebebeb',
          alignItems: 'center',
          borderBottomWidth: 1,
        }}>
        <Image
          source={image.document}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
        <Text style={{color: Colors.textcolor, fontSize: 16, marginLeft: 10}}>
          Orders
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => checkFabFamily()}
        style={{
          padding: 20,
          flexDirection: 'row',
          borderBottomColor: '#ebebeb',
          alignItems: 'center',
          borderBottomWidth: 1,
        }}>
        <Image
          source={image.ribbon}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
        <Text style={{color: Colors.textcolor, fontSize: 16, marginLeft: 10}}>
          FabFamily
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('CategorySection')}
        style={{
          padding: 20,
          flexDirection: 'row',
          borderBottomColor: '#ebebeb',
          borderBottomWidth: 1,
          alignItems: 'center',
        }}>
        <Ionicons
          name="ios-grid-outline"
          size={20}
          color={Colors.primarycolor}
        />
        <Text style={{color: Colors.textcolor, fontSize: 16, marginLeft: 10}}>
          Shop By Categories
        </Text>
      </TouchableOpacity>
      <FlatList
        data={listData}
        keyExtractor={item => <></>}
        renderItem={({item, index}) => <AccordianMenu data={item} />}
      />
      {/* <View>
        <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 35}}>
          <Text style={{color: Colors.textcolor, marginLeft: 15, fontSize: 11}}>
            FAQs
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 35}}>
          <Text style={{color: Colors.textcolor, marginLeft: 15, fontSize: 11}}>
            CONTACT US
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 35}}>
          <Text style={{color: Colors.textcolor, marginLeft: 15}}>LEGALS</Text>
        </TouchableOpacity>
      </View> */}
    </ScrollView>
  );
};
const DrawerComponent = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName={'HomeStack'}
        backBehavior={'history'}
        drawerContent={DrawerContent}
        defaultStatus={'closed'}
        screenOptions={{
          header: () => false,
          // drawerStyle: {
          //   width: 400,
          // },
          swipeEnabled: Platform.OS == 'android' ? false : true,
        }}>
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="CategorySection" component={CategorySection} />
      </Drawer.Navigator>
    </>
  );
};
const InitialSearch = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default function MainScreen(props) {
  // console.log(props);
  const [auth, setAuth] = useState();

  return (
    <Tab.Navigator
      initialRouteName="DrawerComponent"
      screenOptions={{
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          textAlign: 'center',
          // paddingBottom: 5,
        },

        // headerShown: false,
        tabBarHideOnKeyboard: true,

        // header: p => <Header />,
        // tabBarLabel: () => {
        //   return null;
        // },
      }}>
      <Tab.Screen
        name="DrawerComponent"
        component={DrawerComponent}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarActiveTintColor: Colors.primarycolor,
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              onPress={() => {
                console.log('home'), props.navigation.navigate('Home');
              }}>
              <Entypo
                name="home"
                size={20}
                color={focused ? Colors.primarycolor : Colors.inactiveicon}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="CategorySection"
        component={CategorySection}
        options={{
          tabBarLabel: 'Categories',
          tabBarActiveTintColor: Colors.primarycolor,
          header: props => (
            <HomeHeader
              {...props}
              homeheader={null}
              searchVisible={null}
              headertext="Categories"
            />
          ),
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="ios-grid-outline"
              color={focused ? Colors.primarycolor : Colors.inactiveicon}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="InitialSearch"
        {...props}
        component={InitialSearch}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarActiveTintColor: Colors.primarycolor,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="ios-search-outline"
              color={focused ? Colors.primarycolor : Colors.inactiveicon}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarActiveTintColor: Colors.primarycolor,
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('MyAccount', {
                  screen: 'MyAccounts',
                })
              }>
              <MaterialCommunityIcons
                name="account-outline"
                color={focused ? Colors.primarycolor : Colors.inactiveicon}
                size={20}
              />
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

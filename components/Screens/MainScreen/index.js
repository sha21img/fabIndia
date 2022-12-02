import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
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

import MyAccount from '../MyAccount';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {image} from '../../../assets/images';
import Accordian from '../../Common/Accordian';
import {data} from '../../../constant';
import LinearGradient from 'react-native-linear-gradient';

// import WomenCategory from '../Home/WomenCategory';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CategorySection = () => {
  return (
    <FlatList
      // columnWrapperStyle={{
      //   backgroundColor: 'red',
      //   // justifyContent: 'space-around',
      //   paddingHorizontal: 15,
      // }}
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({item, index}) => (
        <Accordian
          title={item.title}
          category={item.category}
          description={item.description}
        />
      )}
    />
    /* {[0, 0, 0, 0, 0, 0].map(item => {
        return (
          <>
            <ImageBackground
              resizeMode="cover"
              source={image.fabfamily}
              style={{
                height: 100,
                width: width / 3.5,
                overflow: 'hidden',
                backgroundColor: 'rgba(144, 50, 51, 0.5)',
                marginRight: 10,
                marginTop: 10,
              }}>
              <View style={{paddingHorizontal: 15}}>
                <Text>;lkj</Text>
              </View>
            </ImageBackground>
          </>
        );
      })} */
  );
};
const DrawerContent = () => {
  const navigation = useNavigation();
  let drawerContent = [
    {
      name: 'Orders',
      icon: <Ionicons name="ios-logo-dropbox" size={20} />,
      route: '',
    },
    {
      name: 'Fabfamily',
      icon: <Ionicons name="ios-logo-dropbox" size={20} />,
      route: '',
    },
    {
      name: 'Shop By Categories',
      icon: <Ionicons name="ios-grid-outline" size={20} />,
      route: '',
    },
    {
      name: 'Shop By Collection',
      icon: <Ionicons name="ios-logo-dropbox" size={20} />,
      route: '',
    },
    {
      name: 'Shop By Brands',
      icon: <Ionicons name="ios-logo-dropbox" size={20} />,
      route: '',
    },
    {
      name: 'New Arrivals',
      icon: <Ionicons name="ios-logo-dropbox" size={20} />,
      route: '',
    },
    {
      name: 'Sale Services',
      icon: <Ionicons name="ios-logo-dropbox" size={20} />,
      route: '',
    },
    {
      name: 'Gift Cards',
      icon: <Ionicons name="ios-logo-dropbox" size={20} />,
      route: '',
    },
  ];
  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground blurRadius={3} source={image.Banner2}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={{
            height: 150,
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              height: 55,
              width: 55,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 7,
            }}>
            <Ionicons name="person" size={30} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text style={{color: '#fff'}}>Shasank.</Text>
            <Ionicons name="md-chevron-forward-sharp" color="#fff" size={20} />
          </View>
        </LinearGradient>
      </ImageBackground>
      {drawerContent.map(item => {
        return (
          <TouchableOpacity
            style={{
              padding: 20,
              flexDirection: 'row',
              borderBottomColor: '#ebebeb',
              borderBottomWidth: 1,
            }}>
            {item.icon}
            <Text style={{color: Colors.textcolor, marginLeft: 10}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}

      {/* <TouchableOpacity style={{padding: 20, flexDirection:"row", borderBottomColor:'#ebebeb', borderBottomWidth:1}}>
        <Ionicons name="ios-logo-dropbox" size={20} />
        <Text style={{color:Colors.textcolor, marginLeft:10}}>Orders</Text>
      </TouchableOpacity> */}
      <View>
        <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 35}}>
          <Text style={{color: Colors.textcolor, marginLeft: 15}}>FAQs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 35}}>
          <Text style={{color: Colors.textcolor, marginLeft: 15}}>
            CONTACT US
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 35}}>
          <Text style={{color: Colors.textcolor, marginLeft: 15}}>LEGALS</Text>
        </TouchableOpacity>
      </View>
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
export default function MainScreen(props) {
  // console.log(props);
  return (
    <Tab.Navigator
      initialRouteName="DrawerComponent"
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          textAlign: 'center',
          paddingBottom: 10,
        },

        headerShown: false,
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
          tabBarActiveTintColor: Colors.primarycolor,
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              onPress={() => {
                console.log('home'), props.navigation.navigate('Home');
              }}>
              <Entypo
                name="home"
                size={25}
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
          tabBarLabel: 'Menu',
          headerShown: false,
          tabBarActiveTintColor: Colors.primarycolor,

          tabBarIcon: ({focused}) => (
            <SimpleLineIcons
              name="menu"
              color={focused ? Colors.primarycolor : Colors.inactiveicon}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarActiveTintColor: Colors.primarycolor,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="ios-search-outline"
              color={focused ? Colors.primarycolor : Colors.inactiveicon}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: 'Account',
          tabBarActiveTintColor: Colors.primarycolor,
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('MyAccounts', {screen: 'MyAccount'})
              }>
              <MaterialCommunityIcons
                name="account-outline"
                color={focused ? Colors.primarycolor : Colors.inactiveicon}
                size={25}
              />
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

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
import {getComponentData} from '../../Common/Helper';
import AccordianMenu from './AccordianMenu';

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
  const [listData, setListData] = useState();
  const navigation = useNavigation();
<<<<<<< HEAD
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
  const checkProfile = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    return getToken.isCheck;
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
  useEffect(() => {
    categoryList();
  }, []);
=======

  let drawerData1 = [
    {
      uid: 'FabHBShopByCollectionNavNode',
      uuid: 'eyJpdGVtSWQiOiJGYWJIQlNob3BCeUNvbGxlY3Rpb25OYXZOb2RlIiwiY2F0YWxvZ0lkIjoiZmFiaW5kaWEtYjJjQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      entries: [],
      children: [
        {
          uid: 'cmsitem_00018006',
          uuid: 'eyJpdGVtSWQiOiJjbXNpdGVtXzAwMDE4MDA2IiwiY2F0YWxvZ0lkIjoiZmFiaW5kaWEtYjJjQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
          entries: [
            {
              itemId: 'cmsitem_00018003',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'winter-wear',
          title: 'Winterwear',
        },
        {
          uid: 'cmsitem_00008006',
          uuid: 'eyJpdGVtSWQiOiJjbXNpdGVtXzAwMDA4MDA2IiwiY2F0YWxvZ0lkIjoiZmFiaW5kaWEtYjJjQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
          entries: [
            {
              itemId: 'cmsitem_00008004',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'gifting-ideas',
          title: 'Gifting',
        },
        // {
        //   "uid": "cmsitem_00005014",
        //   "uuid": "eyJpdGVtSWQiOiJjbXNpdGVtXzAwMDA1MDE0IiwiY2F0YWxvZ0lkIjoiZmFiaW5kaWEtYjJjQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
        //   "entries": [
        //     {
        //       "itemId": "cmsitem_00005012",
        //       "itemSuperType": "AbstractCMSComponent",
        //       "itemType": "CMSLinkComponent"
        //     }
        //   ],
        //   "children": [],
        //   "code": "festive",
        //   "title": "Festive"
        // },
        {
          uid: 'C_SummerNode',
          uuid: 'eyJpdGVtSWQiOiJDX1N1bW1lck5vZGUiLCJjYXRhbG9nSWQiOiJmYWJpbmRpYS1iMmNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
          entries: [
            {
              itemId: 'C_SummerLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'summer',
          title: 'Summer',
        },
        {
          uid: 'C_IndigoNode',
          uuid: 'eyJpdGVtSWQiOiJDX0luZGlnb05vZGUiLCJjYXRhbG9nSWQiOiJmYWJpbmRpYS1iMmNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
          entries: [
            {
              itemId: 'C_IndigoLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'indigo',
          title: 'Indigo',
        },
        {
          uid: 'C_IndianSpringNode',
          uuid: 'eyJpdGVtSWQiOiJDX0luZGlhblNwcmluZ05vZGUiLCJjYXRhbG9nSWQiOiJmYWJpbmRpYS1iMmNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
          entries: [
            {
              itemId: 'C_IndianSpringLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'indian-spring',
          title: 'Indian Spring',
        },
        {
          uid: 'C_EverydayLivingNode',
          uuid: 'eyJpdGVtSWQiOiJDX0V2ZXJ5ZGF5TGl2aW5nTm9kZSIsImNhdGFsb2dJZCI6ImZhYmluZGlhLWIyY0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
          entries: [
            {
              itemId: 'C_EverydayLivingLink',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'everyday-living',
          title: 'Everyday Living',
        },
      ],
      title: 'Shop By Collection',
      selected: false,
    },
    {
      uid: 'cmsitem_00011000',
      uuid: 'eyJpdGVtSWQiOiJjbXNpdGVtXzAwMDExMDAwIiwiY2F0YWxvZ0lkIjoiZmFiaW5kaWEtYjJjQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      entries: [],
      children: [
        {
          uid: 'cmsitem_00003005',
          uuid: 'eyJpdGVtSWQiOiJjbXNpdGVtXzAwMDAzMDA1IiwiY2F0YWxvZ0lkIjoiZmFiaW5kaWEtYjJjQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
          entries: [
            {
              itemId: 'cmsitem_00003003',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'nuindian',
          title: 'NUIndian',
        },
        // {
        //   "uid": "cmsitem_00003002",
        //   "uuid": "eyJpdGVtSWQiOiJjbXNpdGVtXzAwMDAzMDAyIiwiY2F0YWxvZ0lkIjoiZmFiaW5kaWEtYjJjQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9",
        //   "entries": [
        //     {
        //       "itemId": "cmsitem_00003000",
        //       "itemSuperType": "AbstractCMSComponent",
        //       "itemType": "CMSLinkComponent"
        //     }
        //   ],
        //   "children": [],
        //   "code": "fabnu",
        //   "title": "FabNu"
        // },
        {
          uid: 'cmsitem_00012002',
          uuid: 'eyJpdGVtSWQiOiJjbXNpdGVtXzAwMDEyMDAyIiwiY2F0YWxvZ0lkIjoiZmFiaW5kaWEtYjJjQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
          entries: [
            {
              itemId: 'cmsitem_00012000',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'fabessentials',
          title: 'Fabessentials',
        },
      ],
      title: 'Shop By Brand',
      selected: false,
    },
    {
      uid: 'FabHBSaleNode',
      uuid: 'eyJpdGVtSWQiOiJGYWJIQlNhbGVOb2RlIiwiY2F0YWxvZ0lkIjoiZmFiaW5kaWEtYjJjQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
      entries: [],
      children: [
        {
          uid: 'cmsitem_00016005',
          uuid: 'eyJpdGVtSWQiOiJjbXNpdGVtXzAwMDE2MDA1IiwiY2F0YWxvZ0lkIjoiZmFiaW5kaWEtYjJjQ29udGVudENhdGFsb2ciLCJjYXRhbG9nVmVyc2lvbiI6Ik9ubGluZSJ9',
          entries: [
            {
              itemId: 'cmsitem_00016003',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'sale',
          title: 'All in Sale',
        },
        {
          uid: 'H_S_WomensNode',
          uuid: 'eyJpdGVtSWQiOiJIX1NfV29tZW5zTm9kZSIsImNhdGFsb2dJZCI6ImZhYmluZGlhLWIyY0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
          entries: [
            {
              itemId: 'H_S9Link',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'sale-women-products',
          title: 'Women',
        },
        {
          uid: 'H_S_MensNode',
          uuid: 'eyJpdGVtSWQiOiJIX1NfTWVuc05vZGUiLCJjYXRhbG9nSWQiOiJmYWJpbmRpYS1iMmNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
          entries: [
            {
              itemId: 'H_S10Link',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'sale-men-products',
          title: 'Men',
        },
        {
          uid: 'H_S_kidsNode',
          uuid: 'eyJpdGVtSWQiOiJIX1Nfa2lkc05vZGUiLCJjYXRhbG9nSWQiOiJmYWJpbmRpYS1iMmNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
          entries: [
            {
              itemId: 'H_S13Link',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'sale-kids-products',
          title: 'Kids',
        },
        {
          uid: 'H_S_HomeLivingNode',
          uuid: 'eyJpdGVtSWQiOiJIX1NfSG9tZUxpdmluZ05vZGUiLCJjYXRhbG9nSWQiOiJmYWJpbmRpYS1iMmNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
          entries: [
            {
              itemId: 'H_S11Link',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'sale-home-living',
          title: 'Home & Living',
        },
        {
          uid: 'H_S_BeautyNode',
          uuid: 'eyJpdGVtSWQiOiJIX1NfQmVhdXR5Tm9kZSIsImNhdGFsb2dJZCI6ImZhYmluZGlhLWIyY0NvbnRlbnRDYXRhbG9nIiwiY2F0YWxvZ1ZlcnNpb24iOiJPbmxpbmUifQ==',
          entries: [
            {
              itemId: 'H_S15Link',
              itemSuperType: 'AbstractCMSComponent',
              itemType: 'CMSLinkComponent',
            },
          ],
          children: [],
          code: 'sale-personal-care',
          title: 'Personal Care',
        },
      ],
      title: 'Sale',
      selected: false,
    },
  ];

  let drawerContent = [
    {
      name: 'Orders',
      icon: (
        <Image
          source={image.document}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
      ),
      route: 'MyOrder',
    },
    {
      name: 'Fabfamily',
      icon: (
        <Image
          source={image.ribbon}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
      ),
      route: 'FabFamily',
    },
    {
      name: 'Shop By Categories',
      icon: (
        <Ionicons
          name="ios-grid-outline"
          size={20}
          color={Colors.primarycolor}
        />
      ),
      route: 'CategorySection',
    },
    {
      name: 'Collection',
      icon: (
        <Ionicons
          name="ios-logo-dropbox"
          size={20}
          color={Colors.primarycolor}
        />
      ),
      route: '',
    },
    // {
    //   name: 'Shop By Brands',
    //   icon: <Ionicons name="ios-logo-dropbox" size={20} color={Colors.primarycolor} />,
    //   route: '',
    // },
    // {
    //   name: 'New Arrivals',
    //   icon: <Ionicons name="ios-logo-dropbox" size={20} />,
    //   route: '',
    // },
    // {
    //   name: 'Sale',
    //   icon: <Ionicons name="ios-logo-dropbox" size={20} color={Colors.primarycolor} />,
    //   route: '',
    // },
    {
      name: 'Gift Cards',
      icon: (
        <Image
          source={image.GiftCard}
          style={{width: 20, height: 20, resizeMode: 'contain'}}
        />
      ),
      route: 'GiftCard',
    },
  ];
>>>>>>> 504ae3d182070a513c71b722fe93b1119270a6ee
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
          <Ionicons name="person" size={30} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {checkProfile() ? (
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.Assistant700,
                fontSize: 16,
              }}>
              User name
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
<<<<<<< HEAD
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
        <Text style={{color: Colors.textcolor, marginLeft: 10}}>Orders</Text>
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
        <Text style={{color: Colors.textcolor, marginLeft: 10}}>FabFamily</Text>
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
        <Text style={{color: Colors.textcolor, marginLeft: 10}}>
          Shop By Categories
        </Text>
      </TouchableOpacity>

      <FlatList
        data={listData}
        keyExtractor={item => <></>}
        renderItem={({item, index}) => <AccordianMenu data={item} />}
      />
      {/* <View>
=======
      </LinearGradient>
      {/* </ImageBackground> */}
      {drawerContent.map(item => {
        return (
          <View>
            {item.name != 'Collection' ? (
              <TouchableOpacity
                onPress={() => {
                  item.route == 'MyOrder' && navigation.navigate('MyOrder');
                  item.route == 'FabFamily' && navigation.navigate('FabFamily');
                  item.route == 'CategorySection' &&
                    navigation.navigate('CategorySection');
                  item.route == 'GiftCard' && navigation.navigate('GiftCard');
                }}
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
            ) : (
              drawerData.map(obj => {
                return (
                  <>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        let data = drawerData;
                        for (let i = 0; i < data.length; i++) {
                          const element = data[i];
                          if (element.title == obj.title) {
                            element.selected = !element.selected;
                          } else {
                            element.selected = false;
                          }
                        }
                        setDrawerData(data);
                        forceUpdate();
                      }}
                      style={{
                        paddingVertical: 20,
                        flexDirection: 'row',
                        borderBottomColor: '#ebebeb',
                        borderBottomWidth: 1,
                        width: '100%',
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                        }}>
                        {item.icon}
                        <Text style={{color: Colors.textcolor, marginLeft: 10}}>
                          {obj.title}
                        </Text>
                      </View>
                      <View>
                        {obj.selected ? (
                          <Ionicons
                            name="chevron-up"
                            size={20}
                            color={Colors.primarycolor}
                          />
                        ) : (
                          <Ionicons
                            name="chevron-down"
                            size={20}
                            color={Colors.primarycolor}
                          />
                        )}
                      </View>
                    </TouchableOpacity>

                    {obj.children.map(item => {
                      return obj.selected ? (
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => {
                            navigation.navigate('LandingPageSaris_Blouses', {
                              code: item.code,
                              title: item.title,
                            });
                          }}
                          style={{
                            marginLeft: 60,
                            paddingLeft: 0,
                            padding: 15,
                            borderBottomColor: '#ebebeb',
                            borderBottomWidth: 1,
                          }}>
                          <Text style={{fontSize: 14, color: Colors.textcolor}}>
                            {item.title}
                          </Text>
                        </TouchableOpacity>
                      ) : null;
                    })}
                  </>
                );
              })
            )}
          </View>
        );
      })}

      {/* <TouchableOpacity style={{padding: 20, flexDirection:"row", borderBottomColor:'#ebebeb', borderBottomWidth:1}}>
        <Ionicons name="ios-logo-dropbox" size={20} />
        <Text style={{color:Colors.textcolor, marginLeft:10}}>Orders</Text>
      </TouchableOpacity> */}
      <View>
>>>>>>> 504ae3d182070a513c71b722fe93b1119270a6ee
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
<<<<<<< HEAD
=======
          headerShown: false,
>>>>>>> 504ae3d182070a513c71b722fe93b1119270a6ee
          tabBarActiveTintColor: Colors.primarycolor,
          header: props => (
            <></>
            // <HomeHeader
            //   {...props}
            //   homeheader={null}
            //   searchVisible={null}
            //   headertext="Categories"
            // />
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

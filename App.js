import SplashScreen from 'react-native-splash-screen';
import {View, Text, TouchableOpacity, LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import FabulousCardDetails from './components/Screens/FabulousCardDetails';
import MainScreen from './components/Screens/MainScreen';
import NetInfo from '@react-native-community/netinfo';
import Header from './components/Common/Header';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import {useNavigation} from '@react-navigation/native';
import Filter from './components/Common/Filter';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fonts from './assets/fonts';
import {Colors} from './assets/Colors';
import MyAddresses from './components/Screens/MyAccount/MyAddresses';
import EditAddress from './components/Screens/MyAccount/MyAddresses/EditAddress';
import CartPage from './components/Screens/Checkout/CartPage';
import ErrorScreen from './components/Screens/ErrorScreen';
import YourWishlist from './components/Screens/YourWishlist';
import StoreLocator from './components/Screens/StoreLocator';
import SearchLocator from './components/Screens/StoreLocator/SearchLocator';
import StoreMainDetails from './components/Screens/StoreLocator/StoreMainDetails';
import AboutUsMenu from './components/Screens/AboutUsMenu';
import EmptyCart from './components/Screens/Checkout/EmptyCart';
import PDP_Compare from './components/Screens/PDP_Compare';
import ProductDetailed from './components/Screens/ProductDetailed';
import Header1 from './components/Common/Header1';
import OrderConfirmation from './components/Screens/OrderConfirmation';
import HomeHeader from './components/Screens/Home/HomeHeader';
import CheckAddress from './components/Screens/MyAccount/MyAddresses/CheckAddress';
import axios from 'axios';
import {Provider, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartList from './components/Screens/Checkout/CartList';
import configureStore from './components/Common/Helper/Redux/store';

const Stack = createNativeStackNavigator();

export default function App(props) {
  const [netInfo, setNetInfo] = useState(true);
  const store = configureStore();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(state.isConnected);
    });
    SplashScreen.hide();
    return () => {
      unsubscribe();
    };
  }, []);
  const getNetInfo = () => {
    // To get the network state once
    NetInfo.fetch().then(state => {
      setNetInfo(state.isConnected);

      // alert(
      //   `Connection type: ${state.type}
      //   Is connected?: ${state.isConnected}
      //   IP Address: ${state.details.ipAddress}`,
      // );
    });
  };
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);
  const leftIcon = props => {
    return (
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <SimpleLineIcons
          name="arrow-left"
          color={Colors.primarycolor}
          size={20}
        />
      </TouchableOpacity>
    );
  };
  const rightIcon = (
    <TouchableOpacity>
      <AntDesign name="shoppingcart" color={Colors.primarycolor} size={25} />
    </TouchableOpacity>
  );
  const generatTokenWithout = async () => {
    await axios
      .post(
        `https://apisap.fabindia.com/authorizationserver/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
      )
      .then(
        response => {
          console.log('response-=-=-=-=-=-generatTokenWithout', response.data);
          AsyncStorage.setItem('generatToken', JSON.stringify(response.data));
        },
        error => {
          console.log('response-=-=-=-=-=-error', error);
        },
      );
  };
  const checkToken = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    console.log('asdfasdfasdfasdf', JSON.parse(get));
    if (getToken == null) {
      generatTokenWithout();
    }
    // }
  };
  const getCartDetails = async () => {
    const value = await AsyncStorage.getItem('cartID');
    console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
    const get = await AsyncStorage.getItem('generatToken');
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart id', getCartID);
    const getToken = JSON.parse(get);
    const response = await axios
      .get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        console.log(
          'get initial cart detail ..................................',
          response.data,
        );
      });
    // console.log(
    //   'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetails',
    //   response.data,
    // );
    let finalvalue = response?.data?.orderEntries?.reduce(
      (n, {quantity}) => n + quantity,
      0,
    );
    // console.log('quantityquantity', response.data);
    // setCartDetails(response.data);
    // setTotalquantity(finalvalue);
    // setWishlistQuantity(response.data.entries.length);
    // if (response.data.name.includes('wishlist')) {
    //   const filterProduct = response.data.entries.map(item => {
    //     return {
    //       code: item.product.baseOptions[0].selected.code,
    //       item: item,
    //     };
    //   });
    //   // console.log('filterProduct', filterProduct);
    //   setWishlistproduct(filterProduct);
    // }
  };
  useEffect(() => {
    getCartDetails();
  }, []);

  // const generatTokenWith = async () => {
  //   const response = await axios.get(
  //     'https://apisap.fabindiahome.com/authorizationserver/oauth/token',
  //     {
  //       // client_id: 'mobile_android',
  //       // client_secret: 'secret',
  //       // grant_type: 'client_credentials',
  //     },
  //   );
  //   console.log('response-=-=-=-=-=-response', response);
  // };
  useEffect(() => {
    checkToken();
  }, []);
  const rightText = (
    <TouchableOpacity>
      <Text
        style={{
          fontFamily: Fonts.Assistant400,
          fontSize: 16,
          color: '#979797',
        }}>
        Clear all
      </Text>
    </TouchableOpacity>
  );

  if (netInfo) {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MainScreen">
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="FabulousCardDetails"
              component={FabulousCardDetails}
              options={{
                header: props => {
                  return (
                    <Header
                      leftIcon={leftIcon(props)}
                      title="FabulousCardDetails"
                      rightIcon={rightIcon}
                      customStyle={{
                        backgroundColor: '#F8F6F5',
                      }}
                    />
                  );
                },
              }}
            />
            <Stack.Screen
              name="PDP_Compare"
              component={PDP_Compare}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon(props)}
                    title="PDP_Compare"
                    rightIcon={rightIcon}
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                    }}
                  />
                ),
              }}
            />

            <Stack.Screen
              name="ProductDetailed"
              component={ProductDetailed}
              options={{
                header: props => (
                  <HomeHeader
                    {...props}
                    searchVisible={false}
                    customViewStyle={{backgroundColor: '#FFFFFF'}}
                    // leftIcon={leftIcon(props)}
                    // title="Cotton Viscose Printed Short..."
                    // rightIcon={rightIcon}
                    // customStyle={{
                    //   backgroundColor: '#F8F6F5',
                    // }}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Filter"
              component={Filter}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon(props)}
                    title="Filter By"
                    rightIcon={rightText}
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                    }}
                  />
                ),
              }}
            />

            <Stack.Screen
              name="MyAddresses"
              component={MyAddresses}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon(props)}
                    title="Address"
                    rightIcon={rightIcon}
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                    }}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="CheckAddress"
              component={CheckAddress}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon(props)}
                    title="Address"
                    rightIcon={rightIcon}
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                    }}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="OrderConfirmation"
              component={OrderConfirmation}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon(props)}
                    title="Order Confirmation"
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                    }}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="EmptyCart"
              component={EmptyCart}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon(props)}
                    title="Your Shopping cart"
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                    }}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="CartList"
              component={CartList}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon(props)}
                    title="Your Shopping cart"
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                    }}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="CartPage"
              component={CartPage}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon(props)}
                    title="Your Shopping cart"
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                    }}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Address"
              component={EditAddress}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon(props)}
                    title="Address"
                    rightIcon={rightIcon}
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                      marginBottom: 4,
                    }}
                  />
                ),
              }}
            />

            <Stack.Screen
              name="StoreLocator"
              component={StoreLocator}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon(props)}
                    title="Store Locator"
                    rightIcon={rightIcon}
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                      marginBottom: 4,
                    }}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="SearchLocator"
              component={SearchLocator}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon(props)}
                    title="Search results"
                    rightIcon={rightIcon}
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                      marginBottom: 4,
                    }}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="StoreMainDetails"
              component={StoreMainDetails}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon(props)}
                    title="Store details"
                    rightIcon={rightIcon}
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                      marginBottom: 4,
                    }}
                  />
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  } else {
    return (
      <>
        <Text>No Coneected Network</Text>
        <TouchableOpacity onPress={() => getNetInfo()}>
          <Text>Try to connect</Text>
        </TouchableOpacity>
      </>
    );
  }
}

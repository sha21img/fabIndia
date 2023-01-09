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
import {AuthBaseUrl2, getCartID} from './components/Common/Helper';
import CategorySection from './components/Screens/CategorySection';
import ViewPolicy from './components/Screens/ViewPolicy/ViewPolicy';
import LandingPageSaris_Blouses from './components/Screens/LandingPageL2/LandingPageSaris_Blouses';
import Tracking from './components/Screens/MyAccount/MyOrder/OrderInProgress/Tracking';
import TrackingUrl from './components/Screens/MyAccount/MyOrder/OrderInProgress/Tracking';
import AlreadyMember from './components/Screens/MyAccount/FabFamily/AlreadyMember';
import WomenCategory from './components/Screens/Home/Catagory/WomenCategory';
import MenCatagory from './components/Screens/Home/Catagory/MenCatagory';
import KidsCatagory from './components/Screens/Home/Catagory/KidsCatagory';
import HomeCatagory from './components/Screens/Home/Catagory/HomeCatagory';
import FurnitureCategory from './components/Screens/Home/Catagory/FurnitureCategory';
import GiftingCatagory from './components/Screens/Home/Catagory/GiftingCatagory';
import BeautyCategory from './components/Screens/Home/Catagory/BeautyCategory';
import FoodCatagory from './components/Screens/Home/Catagory/FoodCatagory';
import Login_Register from './components/Screens/Login_Register';
import Login from './components/Screens/Login_Register/Login';
import LoginMobile from './components/Screens/Login_Register/LoginMobile';
import Otp from './components/Screens/Login_Register/Otp';
import MyAccounts from './components/Screens/MyAccount/MyAccounts';
import AllAddresses from './components/Screens/MyAccount/AllAddresses';
import MyOrder from './components/Screens/MyAccount/MyOrder';
import OrderStatus from './components/Screens/MyAccount/MyOrder/OrderStatus';
import ReturnItem from './components/Screens/MyAccount/MyOrder/ReturnItem';
import FabIndiaSchools from './components/Screens/MyAccount/AboutFabindia/FabIndiaSchools';
import Years60 from './components/Screens/MyAccount/AboutFabindia/Years60';
import Certification from './components/Screens/MyAccount/AboutFabindia/Certification';
import Philosophy from './components/Screens/MyAccount/AboutFabindia/Philosophy';
import AboutUs from './components/Screens/MyAccount/AboutFabindia/AboutUs';
import AboutFabindia from './components/Screens/MyAccount/AboutFabindia';
import DeleteMyAccount from './components/Screens/MyAccount/DeleteMyAccount';
import Unsubscribe from './components/Screens/MyAccount/Unsubscribe';
import CustomerCare from './components/Screens/MyAccount/CustomerCare';
import TrackRequest from './components/Screens/MyAccount/CustomerCare/TrackRequest';
import CustomerCareStatus from './components/Screens/MyAccount/CustomerCare/CustomerCareStatus';
import ReturnStatus from './components/Screens/MyAccount/MyOrder/ReturnStatus';
import ContactUs from './components/Screens/MyAccount/ContactUs';
import ChangePasswordSuccesfully from './components/Screens/MyAccount/MyProfile/ChangePasswordSuccesfully';
import MyProfile from './components/Screens/MyAccount/MyProfile';
import OrderSuccess from './components/Screens/MyAccount/MyOrder/OrderSuccess';
import ChangeMobileNumber from './components/Screens/MyAccount/MyProfile/ChangeMobileNumber';
import ChangePassword from './components/Screens/MyAccount/MyProfile/ChangePassword';
import AddCard from './components/Screens/MyAccount/SavedCard/AddCard';
import AllCards from './components/Screens/MyAccount/SavedCard/AllCards';
import PendingProductList from './components/Screens/MyAccount/PendingPayments/PendingProductList';
import PendingProductDetails from './components/Screens/MyAccount/PendingPayments/PendingProductDetails';
import FabFamily from './components/Screens/MyAccount/FabFamily';
import FAQ from './components/Screens/MyAccount/FAQ';
import ResetPassword from './components/Screens/Login_Register/ResetPassword';
import Register from './components/Screens/Login_Register/Register';
import RegisterSuccess from './components/Screens/Login_Register/RegisterSuccess';

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
        `${AuthBaseUrl2}/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
      )
      .then(
        response => {
          const tokenGenerate = {...response.data, isCheck: false};
          console.log('response-=-=-=-=-=-generatTokenWithout', response.data);
          AsyncStorage.setItem('generatToken', JSON.stringify(tokenGenerate));
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
      await generatTokenWithout();
      // await getCartDetails();
    }
    // }
  };
  // const getCartDetails = async () => {
  //   const value = await AsyncStorage.getItem('cartID');
  //   console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
  //   const get = await AsyncStorage.getItem('generatToken');
  //   const getCartID = await AsyncStorage.getItem('cartID');
  //   console.log('this us cart id', getCartID);
  //   const getToken = JSON.parse(get);
  //   const response = await axios
  //     .get(
  //       `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
  //       {
  //         headers: {
  //           Authorization: `${getToken.token_type} ${getToken.access_token}`,
  //         },
  //       },
  //     )
  //     .then(response => {
  //       console.log(
  //         'get initial cart detail ..................................',
  //         response.data,
  //       );
  //     });
  //   // console.log(
  //   //   'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetails',
  //   //   response.data,
  //   // );
  //   let finalvalue = response?.data?.orderEntries?.reduce(
  //     (n, {quantity}) => n + quantity,
  //     0,
  //   );
  //   // console.log('quantityquantity', response.data);
  //   // setCartDetails(response.data);
  //   // setTotalquantity(finalvalue);
  //   // setWishlistQuantity(response.data.entries.length);
  //   // if (response.data.name.includes('wishlist')) {
  //   //   const filterProduct = response.data.entries.map(item => {
  //   //     return {
  //   //       code: item.product.baseOptions[0].selected.code,
  //   //       item: item,
  //   //     };
  //   //   });
  //   //   // console.log('filterProduct', filterProduct);
  //   //   setWishlistproduct(filterProduct);
  //   // }
  // };
  // useEffect(() => {
  //   getCartID();
  // }, []);

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
  const getInitialCartId = async () => {
    const cartId = await AsyncStorage.getItem('cartID');
    console.log(
      'cartIdcartIdcartIdcartIdcartIdcartIdcartIdcartIdcartIdcartIdcartIdcartIdcartId',
      cartId,
    );
    !cartId && getCartID();
  };
  // useEffect(() => {
  //   checkToken();
  //   // getInitialCartId();
  // }, []);
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
              name="Tracking"
              component={TrackingUrl}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="ViewPolicy"
              component={ViewPolicy}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="LandingPageSaris_Blouses"
              component={LandingPageSaris_Blouses}
              options={{
                headerShown: false,
              }}
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
                headerShown: false,
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
              options={{headerShown: false}}
              // options={{
              //   header: props => (
              //     <HomeHeader {...props} headertext="Wishlist" />
              //   ),
              // }}
              name="YourWishlist"
              component={YourWishlist}
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
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="My Order"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="CartList"
              component={CartList}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="My Order"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="CartPage"
              component={CartPage}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showCart = {false}
                    middleHeader="Shopping Cart"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Address"
              component={EditAddress}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="Address"
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

            <Stack.Screen
              name="Women"
              component={WomenCategory}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="Men"
              component={MenCatagory}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Kids"
              component={KidsCatagory}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home & Living"
              component={HomeCatagory}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Gifting"
              component={GiftingCatagory}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Furniture"
              component={FurnitureCategory}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Personal Care"
              component={BeautyCategory}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Food"
              component={FoodCatagory}
              options={{
                headerShown: false,
              }}
            />
            {/* <Stack.Screen
              name="Login_Register"
              component={Login_Register}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="Saved Cards"
                  />
                ),
              }}
            /> */}
            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{
                header: props => (
                  <Header
                    title="Forgot password"
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                      marginBottom: 4,
                    }}
                    right={false}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Otp"
              component={Otp}
              options={{
                header: props => (
                  <Header
                    title="Log in"
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                      marginBottom: 4,
                    }}
                    right={false}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                header: props => (
                  <Header
                    title="Log in"
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                      marginBottom: 4,
                    }}
                    right={false}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="LoginMobile"
              component={LoginMobile}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="Log in"
                    rightIcon={rightIcon}
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                      marginBottom: 4,
                    }}
                  />
                ),
              }}
            />

            {/*  */}
            <Stack.Screen
              name="MyAccounts"
              component={MyAccounts}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="My Account"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                header: props => (
                  <Header
                    title="Register"
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                      marginBottom: 4,
                    }}
                    right={false}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="RegisterSuccess"
              component={RegisterSuccess}
              options={{
                header: props => (
                  <Header
                    title="Register"
                    customStyle={{
                      backgroundColor: '#F8F6F5',
                      marginBottom: 4,
                    }}
                    right={false}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Login_Register"
              component={Login_Register}
              options={{
                header: props => (
                  <HomeHeader
                    showCart={false}
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="Log in"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="AllAddresses"
              component={AllAddresses}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="My Addresses"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="MyOrder"
              component={MyOrder}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="My Order"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="OrderStatus"
              component={OrderStatus}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="My Orders"
                  />
                ),
              }}
            />

            <Stack.Screen
              name="ErrorScreen"
              component={ErrorScreen}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="The FabIndia Schools"
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
              name="ReturnItem"
              component={ReturnItem}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="My Orders"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="FabIndiaSchools"
              component={FabIndiaSchools}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="60 Years of FabIndia"
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
              name="Years60"
              component={Years60}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="60 Years of FabIndia"
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
              name="Certification"
              component={Certification}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="Organic Certification"
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
              name="Philosophy"
              component={Philosophy}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="Our philosophy"
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
              name="AboutUs"
              component={AboutUs}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="About us"
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
              name="AboutFabindia"
              component={AboutFabindia}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="About Fabindia"
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
              name="FabFamily"
              component={FabFamily}
              options={{headerShown: false}}

              // options={{
              //   header: props => (
              //     <Header
              //       leftIcon={leftIcon}
              //       title="FabFamily"
              //       rightIcon={rightIcon}
              //       customStyle={{
              //         backgroundColor: '#F8F6F5',
              //         marginBottom: 4,
              //       }}
              //     />
              //     // <HomeHeader
              //     //   searchVisible={null}
              //     //   {...props}
              //     //   showWishlist={false}
              //     //   middleHeader="FabFamily"
              //     // />
              //   ),
              // }}
            />
            <Stack.Screen
              name="FAQ"
              component={FAQ}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="FAQs"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="DeleteMyAccount"
              component={DeleteMyAccount}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="Delete my account"
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
              name="GiftCard"
              component={() => GiftCard(props)}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="Gift Cards"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Unsubscribe"
              component={Unsubscribe}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="Unsubscribe"
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
              name="CustomerCare"
              component={CustomerCare}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="Customer Care"
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
              name="TrackRequest"
              component={TrackRequest}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="Track Requests"
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
              name="CustomerCareStatus"
              component={CustomerCareStatus}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="Customer Care"
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
              name="ReturnStatus"
              component={ReturnStatus}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="My Orders"
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
              name="ContactUs"
              component={ContactUs}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="Gift Cards"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="AlreadyMember"
              component={AlreadyMember}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="FabFamily"
                    showCart={false}
                  />
                ),
              }}
            />

            <Stack.Screen
              name="ChangePasswordSuccesfully"
              component={ChangePasswordSuccesfully}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="Change password"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="MyProfile"
              component={MyProfile}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="My Profile"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="OrderSuccess"
              component={OrderSuccess}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="My Orders"
                  />
                ),
              }}
            />

            <Stack.Screen
              name="ChangeMobileNumber"
              component={ChangeMobileNumber}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="Change mobile number"
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
              name="ChangePassword"
              component={ChangePassword}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="Change Password"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="AddCard"
              component={AddCard}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="Saved Cards"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="AllCards"
              component={AllCards}
              options={{
                header: props => (
                  <HomeHeader
                    searchVisible={null}
                    {...props}
                    showWishlist={false}
                    middleHeader="Saved Cards"
                  />
                ),
              }}
            />
            <Stack.Screen
              name="PendingProductList"
              component={PendingProductList}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="Pending Payments"
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
              name="PendingProductDetails"
              component={PendingProductDetails}
              options={{
                header: props => (
                  <Header
                    leftIcon={leftIcon}
                    title="Pending Payments"
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
      <View
        style={{
          marginTop: 250,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 16, color: '#000'}}>No Coneected Network</Text>
        <TouchableOpacity activeOpacity={0.9} onPress={() => getNetInfo()}>
          <Text
            style={{
              fontSize: 16,
              color: Colors.primarycolor,
              fontWeight: '600',
            }}>
            Try to connect
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

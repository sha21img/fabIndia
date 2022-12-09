import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {image} from '../../../assets/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './style';
import {Colors} from '../../../assets/Colors';
import Header from '../../Common/Header';
import Fonts from '../../../assets/fonts';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MyOrder from './MyOrder';
import OrderInProgress from './MyOrder/OrderInProgress';
import MyProfile from './MyProfile';
import ReturnItem from './MyOrder/ReturnItem';
import OrderSuccess from './MyOrder/OrderSuccess';
import Login_Register from '../Login_Register';
import Register from '../Login_Register/Register';
import Otp from '../Login_Register/Otp';
import AddCard from './SavedCard/AddCard';
import AllCards from './SavedCard/AllCards';
import PendingProductList from './PendingPayments/PendingProductList';
import PendingProductDetails from './PendingPayments/PendingProductDetails';
import Login from '../Login_Register/Login';
import LoginMobile from '../Login_Register/LoginMobile';
import RegisterSuccess from '../Login_Register/RegisterSuccess';
import ChangePassword from './MyProfile/ChangePassword';
import ChangeMobileNumber from './MyProfile/ChangeMobileNumber';
import ChangePasswordSuccesfully from './MyProfile/ChangePasswordSuccesfully';
import ContactUs from './ContactUs';
import CustomerCare from './CustomerCare';
import CustomerCareStatus from './CustomerCare/CustomerCareStatus';
import TrackRequest from './CustomerCare/TrackRequest';

import ResetPassword from '../Login_Register/ResetPassword';
import DeleteMyAccount from './DeleteMyAccount';
import Unsubscribe from './Unsubscribe';
import GiftCard from './GiftCard';
import FabFamily from './FabFamily';
import OrderDelivered from './MyOrder/OrderDelivered';
import AboutFabindia from './AboutFabindia';
import AboutUs from './AboutFabindia/AboutUs';
import Philosophy from './AboutFabindia/Philosophy';
import Certification from './AboutFabindia/Certification';
import FabIndiaSchools from './AboutFabindia/FabIndiaSchools';
import Years60 from './AboutFabindia/Years60';
import OrderCancelled from './MyOrder/OrderCancelled';
import OrderStatus from './MyOrder/OrderStatus';
import ReturnStatus from './MyOrder/ReturnStatus';
import ErrorScreen from '../ErrorScreen';
const Stack = createNativeStackNavigator();
const pages = [
  {
    icon: image.document,
    name: 'My Orders',
    routes: 'MyOrder',
  },
  {
    icon: image.location,
    name: 'My Addresses',
    routes: 'MyAddresses',
  },
  {
    icon: image.headphone,
    name: 'Customer Care',
    routes: 'CustomerCare',
  },
  {
    icon: image.ribbon,
    name: 'FabFamily',
    routes: 'FabFamily',
  },
  {
    icon: image.savedCard,
    name: 'Saved Cards',
    routes: '',
  },
  {
    icon: image.pendingPayment,
    name: 'Pending Payments',
    routes: '',
  },
  {
    icon: image.GiftCard,
    name: 'Gift Cards',
    routes: '',
  },
  {
    icon: image.ContactUs,
    name: 'Contact us',
    routes: 'ContactUs',
  },
  {
    icon: image.UnSubscribe,
    name: 'Unsubscribe',
    routes: '',
  },
  {
    icon: image.DelAccount,
    name: 'Delete my Account',
    routes: '',
  },
];
const MyAccounts = props => {
  return (
    <>
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            style={{alignItems: 'flex-end'}}
            onPress={() => props.navigation.navigate('MyProfile')}>
            <MaterialCommunityIcons name="border-color" size={15} />
          </TouchableOpacity>
          <View
            style={{
              paddingVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 90,
                width: 90,
                borderRadius: 50,
                marginRight: 20,
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={image.defaultProfile} />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Fonts.Assistant600,
                  lineHeight: 20,
                  color: Colors.textcolor,
                }}>
                Tanya Singh
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.Assistant400,
                  lineHeight: 18,
                  color: Colors.inactiveicon,
                }}>
                23456789456
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.Assistant400,
                  lineHeight: 18,
                  color: Colors.inactiveicon,
                }}>
                tanyasingh@gmail.com
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.Assistant400,
                  lineHeight: 14,
                  color: Colors.primarycolor,
                  marginTop: 12,
                }}>
                Change password
              </Text>
            </View>
          </View>
        </View>
        {pages.map(item => {
          return (
            <TouchableOpacity
              onPress={() => props.navigation.navigate(item.routes)}
              key={Math.random() * 10000}
              style={{
                padding: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 2,
                borderBottomColor: '#EDEDED',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={item.icon} />
                <Text
                  style={{
                    marginLeft: 23,
                    fontFamily: Fonts.Assistant400,
                    fontSize: 14,
                    color: Colors.textcolor,
                  }}>
                  {item.name}
                </Text>
              </View>
              <Image source={image.rightArrow} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};
const MyAccount = props => {
  const leftIcon = (
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <SimpleLineIcons
        name="arrow-left"
        color={Colors.primarycolor}
        size={20}
      />
    </TouchableOpacity>
  );
  const rightIcon = (
    <AntDesign name="shoppingcart" color={Colors.primarycolor} size={25} />
  );
  return (
    <>
      <Stack.Navigator initialRouteName="Login_Register">
        <Stack.Screen
          name="MyAccounts"
          component={MyAccounts}
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="My Profile"
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
          name="Login_Register"
          component={Login_Register}
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="My Account"
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
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="FabFamily"
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
          component={GiftCard}
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="Gift Cards"
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
          name="Unsubscribe"
          component={Unsubscribe}
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

        {/* <Stack.Screen
          name="ReturnItem"
          component={ReturnItem}
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
        /> */}
        <Stack.Screen
          name="OrderStatus"
          component={OrderStatus}
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
          name="MyOrder"
          component={MyOrder}
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
          name="ChangePasswordSuccesfully"
          component={ChangePasswordSuccesfully}
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="Change password"
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
          name="MyProfile"
          component={MyProfile}
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="My Profile"
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
          name="OrderSuccess"
          component={OrderSuccess}
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="My Profile"
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
          name="RegisterSuccess"
          component={RegisterSuccess}
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="Register"
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
          name="Register"
          component={Register}
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="Register"
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
          name="ResetPassword"
          component={ResetPassword}
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="Forgot password"
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
          name="Otp"
          component={Otp}
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
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="Change Password"
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
          name="AddCard"
          component={AddCard}
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="Saved Cards"
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
          name="AllCards"
          component={AllCards}
          options={{
            header: props => (
              <Header
                leftIcon={leftIcon}
                title="Saved Cards"
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
        <Stack.Screen
          name="Login"
          component={Login}
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
      </Stack.Navigator>
    </>
  );
};
export default MyAccount;

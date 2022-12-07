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

const Stack = createNativeStackNavigator();

export default function App(props) {
  const [netInfo, setNetInfo] = useState('');
  useEffect(() => {
    SplashScreen.hide();
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(state.isConnected);
    });
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
                <Header1
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

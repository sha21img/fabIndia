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
import EmptyCart from './components/Screens/Checkout/EmptyCart';
import ErrorScreen from './components/Screens/ErrorScreen';
import YourWishlist from './components/Screens/YourWishlist';
import StoreLocator from './components/Screens/StoreLocator';

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
            name="ErrorScreen"
            component={ErrorScreen}
            options={{
              header: props => (
                <Header
                  leftIcon={leftIcon(props)}
                  title="404Error"
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
            name="YourWishlist"
            component={YourWishlist}
            options={{
              header: props => (
                <Header
                  leftIcon={leftIcon(props)}
                  title="Your Wishlist"
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
                  title="Your Wishlist"
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

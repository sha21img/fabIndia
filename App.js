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
import PDP_Compare from './components/Screens/PDP_Compare';
import ProductDetailed from './components/Screens/ProductDetailed';
import MyAddresses from './components/Screens/MyAccount/MyAddresses';
import EditAddress from './components/Screens/MyAccount/MyAddresses/EditAddress';

const Stack = createNativeStackNavigator();

export default function App(props) {
  const [netInfo, setNetInfo] = useState('');
  useEffect(() => {
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
        <Stack.Navigator initialRouteName="MyAddresses">
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
            name="ProductDetailed"
            component={ProductDetailed}
            options={{
              header: props => (
                <Header
                  leftIcon={leftIcon(props)}
                  title="Cotton Viscose Printed Short..."
                  rightIcon={rightIcon}
                  customStyle={{
                    backgroundColor: '#F8F6F5',
                  }}
                />
              ),
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
            name="EditAddress"
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

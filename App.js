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
        <Stack.Navigator initialRouteName="Filter">
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

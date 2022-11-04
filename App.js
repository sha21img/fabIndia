import {View, Text, TouchableOpacity, LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './components/Screens/MainScreen';
import NetInfo from '@react-native-community/netinfo';
const Stack = createNativeStackNavigator();

export default function App() {
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

  if (netInfo) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{headerShown: false}}
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

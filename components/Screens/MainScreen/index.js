import {View, Text} from 'react-native';
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
import MyAccount from '../MyAccount';
const Tab = createBottomTabNavigator();

const Search = () => {
  return <Text>jiukyjh</Text>;
};


export default function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Menu"
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

        // headerShow: true,
        // header: p => <Header />,
        // tabBarLabel: () => {
        //   return null;
        // },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: Colors.primarycolor,
          tabBarIcon: ({focused}) => (
            // <TouchableOpacity onPress={() => navigation.navigate('MainHome')}>
            <Entypo
              name="home"
              size={25}
              color={focused ? Colors.primarycolor : Colors.inactiveicon}
            />
            // </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
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
        name="Account"
        component={MyAccount}
        options={{
          tabBarLabel: 'Account',
          tabBarActiveTintColor: Colors.primarycolor,
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={focused ? Colors.primarycolor : Colors.inactiveicon}
              size={25}
            />
          ),
          headerShown:false
        }}
      />
    </Tab.Navigator>
  );
}

import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from './assets/Colors';
import Carousel from 'react-native-reanimated-carousel';

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Text style={{fontFamily: 'Assistant-SemiBold', color: 'black'}}>
      HHHHHHHHHHHHHHHHHHomomome
    </Text>
  );
};
const Menu = () => {
  return <Text>km.jhjghfg</Text>;
};
const Search = () => {
  return <Text>jiukyjh</Text>;
};
const Account = () => {
  return <Text>jiukyjh</Text>;
};

export default function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
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
          tabBarActiveTintColor: colors.primarycolor,
          tabBarIcon: ({focused}) => (
            // <TouchableOpacity onPress={() => navigation.navigate('MainHome')}>
            <Entypo
              name="home"
              size={25}
              color={focused ? colors.primarycolor : colors.inactiveicon}
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
          tabBarActiveTintColor: colors.primarycolor,

          tabBarIcon: ({focused}) => (
            <SimpleLineIcons
              name="menu"
              color={focused ? colors.primarycolor : colors.inactiveicon}
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
          tabBarActiveTintColor: colors.primarycolor,

          tabBarIcon: ({focused}) => (
            <Ionicons
              name="ios-search-outline"
              color={focused ? colors.primarycolor : colors.inactiveicon}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarActiveTintColor: colors.primarycolor,

          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={focused ? colors.primarycolor : colors.inactiveicon}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

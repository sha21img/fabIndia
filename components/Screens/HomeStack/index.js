import {View, Text, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import SearchResult from '../Search/SearchResult';
import Header from '../../Common/Header/header';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {image} from '../../../assets/images';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="SearchResult">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          header: props => (
            <Header
              leftIcon={
                <SimpleLineIcons
                  name="arrow-left"
                  color={Colors.primarycolor}
                  size={20}
                />
              }
              title="Search results for ‘Cotton...’"
              rightIcon={
                <AntDesign
                  name="shoppingcart"
                  color={Colors.primarycolor}
                  size={20}
                />
              }
              customStyle={{
                backgroundColor: '#F8F6F5',
                marginBottom: 4,
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

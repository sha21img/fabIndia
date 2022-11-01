import {View, Text, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import SearchResult from '../Search/SearchResult';
import Header from '../../Common/Header';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {image} from '../../../assets/images';
import WomenCategory from '../Home/Catagory/WomenCategory';
import MenCatagory from '../Home/Catagory/MenCatagory';
import KidsCatagory from '../Home/Catagory/KidsCatagory';

const Stack = createNativeStackNavigator();
const leftIcon = (
  <SimpleLineIcons name="arrow-left" color={Colors.primarycolor} size={20} />
);
const rightIcon = (
  <AntDesign name="shoppingcart" color={Colors.primarycolor} size={25} />
);

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WomenCategory"
        component={WomenCategory}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Women"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
                // marginBottom: 4,
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Search results for ‘Cotton...’"
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
        name="MenCatagory"
        component={MenCatagory}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Men"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
                // marginBottom: 4,
              }}
            />
          ),
        }}
      />
      {/* <Stack.Screen
        name="KidsCatagory"
        component={KidsCatagory}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Kids"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
                // marginBottom: 4,
              }}
            />
          ),
        }}
      /> */}
    </Stack.Navigator>
  );
}

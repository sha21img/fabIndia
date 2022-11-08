import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import SearchResult from '../Search/SearchResult';
import Header from '../../Common/Header';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import WomenCategory from '../Home/Catagory/WomenCategory';
import MenCatagory from '../Home/Catagory/MenCatagory';
import KidsCatagory from '../Home/Catagory/KidsCatagory';
import HomeCatagory from '../Home/Catagory/HomeCatagory';
import HomeDecorCatagory from '../Home/Catagory/HomeDecorCatagory';
import FurnitureCategory from '../Home/Catagory/FurnitureCategory';
import FoodCatagory from '../Home/Catagory/FoodCatagory';
import CustomizeCatagory from '../Home/Catagory/CustomizeCatagory';
import MonogramCatagory from '../Home/Catagory/MonogramCatagory';
import BeautyCategory from '../Home/Catagory/BeautyCategory';
import {useNavigation} from '@react-navigation/native';
import LandingPageSaris from '../LandingPageL2/LandingPage-saris';
const Stack = createNativeStackNavigator();

export default function HomeStack() {
  const navigation = useNavigation();

  const leftIcon = (
    <TouchableOpacity onPress={() => navigation.goBack()}>
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
        name="FurnitureCategory"
        component={FurnitureCategory}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Furniture"
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
      <Stack.Screen
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
      />
      <Stack.Screen
        name="HomeCatagory"
        component={HomeCatagory}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Home Linen"
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
        name="HomeDecorCatagory"
        component={HomeDecorCatagory}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Home Decor"
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
        name="FoodCatagory"
        component={FoodCatagory}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Customize"
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
        name="CustomizeCatagory"
        component={CustomizeCatagory}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Customize"
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
        name="MonogramCatagory"
        component={MonogramCatagory}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Add a Monogram"
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
        name="BeautyCategory"
        component={BeautyCategory}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Beauty"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="LandingPageSaris"
        component={LandingPageSaris}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Saris & Blouses"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

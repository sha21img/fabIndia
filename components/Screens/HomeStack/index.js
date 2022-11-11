import {TouchableOpacity} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import SearchResult from '../Search/SearchResult';
import Header from '../../Common/Header';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import WomenCategory from '../Home/Catagory/WomenCategory';
import MenCatagory from '../Home/Catagory/MenCatagory';
import KidsCatagory from '../Home/Catagory/KidsCatagory';
import HomeCatagory from '../Home/Catagory/HomeCatagory';
import HomeDecorCatagory from '../Home/Catagory/HomeDecorCatagory';
import FurnitureCategory from '../Home/Catagory/FurnitureCategory';
import FoodCatagory from '../Home/Catagory/FoodCatagory';
import Collections from '../Collections';
import CustomizeCatagory from '../Home/Catagory/CustomizeCatagory';
import MonogramCatagory from '../Home/Catagory/MonogramCatagory';
import BeautyCategory from '../Home/Catagory/BeautyCategory';
import Offers from '../Offers';
import Fabulous from '../Fabulous';
import NewArrivals from '../NewArrivals';
import {useNavigation} from '@react-navigation/native';
import LandingPageSaris from '../LandingPageL2/LandingPage-saris';
import LandingPageJewellery from '../LandingPageL2/LandingPageJewellery';
import LandingPageMenKurtas from '../LandingPageL2/LandingPage-menKurtas';
import LandingPageSaris_Blouses from '../LandingPageL2/LandingPageSaris_Blouses';
import LandingPageBedsheets from '../LandingPageL2/LandingPageBedsheets';
import LandingPageDiningTable from '../LandingPageL2/LandingPageDiningTable';
import LandingPage360WFH from '../LandingPageL2/LandingPage360WFH';
import LandingPagebedroom from '../LandingPageL2/LandingPage-bedroom';
import Diwali from '../EventLanding/Diwali';
import {Colors} from '../../../assets/Colors';
import Dussehra from '../EventLanding/Dussehra';

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
        name="NewArrivals"
        component={NewArrivals}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="What's new"
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
              title="Food"
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
        name="Collections"
        component={Collections}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Collections"
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

      <Stack.Screen
        name="Offers"
        component={Offers}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Offers"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Fabulous"
        component={Fabulous}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Fabulous"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="LandingPageJewellery"
        component={LandingPageJewellery}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Jewellery"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="LandingPageMenKurtas"
        component={LandingPageMenKurtas}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Men’s Kurtas"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="LandingPageSaris_Blouses"
        component={LandingPageSaris_Blouses}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Block Print Saris & Blouses"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="LandingPageBedsheets"
        component={LandingPageBedsheets}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Bedsheets"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="LandingPagebedroom"
        component={LandingPagebedroom}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Bedroom"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="LandingPageDiningTable"
        component={LandingPageDiningTable}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Dining Tables"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="LandingPage360WFH"
        component={LandingPage360WFH}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Lifestyle 360 / WFH"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Diwali"
        component={Diwali}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Happy Diwali!"
              rightIcon={rightIcon}
              customStyle={{
                backgroundColor: '#F8F6F5',
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Dussehra"
        component={Dussehra}
        options={{
          header: props => (
            <Header
              leftIcon={leftIcon}
              title="Happy Dussehra!"
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

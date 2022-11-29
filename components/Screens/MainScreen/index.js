import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Dimensions,
  FlatList,
} from 'react-native';
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
import Search from '../Search';
import HomeStack from '../HomeStack';

import MyAccount from '../MyAccount';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {image} from '../../../assets/images';
import Accordian from '../../Common/Accordian';

// import WomenCategory from '../Home/WomenCategory';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const data = [
  {
    id: 0,
    title: 'Women',
    description: 'Jacket,Sweater,Sweatshirt',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
    ],
  },
  {
    id: 1,
    title: 'Men',
    description: 'Jacket,Sweater,Sweatshirt',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
    ],
  },
  {
    id: 2,
    title: 'Kids',
    description: 'Jacket,Sweater,Sweatshirt',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
    ],
  },
  {
    id: 3,
    description: 'Jacket,Sweater,Sweatshirt',
    title: 'Home Linen',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
    ],
  },
  {
    id: 4,
    description: 'Jacket,Sweater,Sweatshirt',
    title: 'Furniture',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
    ],
  },
  {
    id: 5,
    description: 'Jacket,Sweater,Sweatshirt',
    title: 'Home Decor',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
    ],
  },
  {
    id: 6,
    description: 'Jacket,Sweater,Sweatshirt',
    title: 'Home Decor',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
    ],
  },
  {
    id: 7,
    description: 'Jacket,Sweater,Sweatshirt',
    title: 'Beauty',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
    ],
  },
  {
    id: 8,
    description: 'Jacket,Sweater,Sweatshirt',
    title: 'Food',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Fusion Wear',
        // subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Maternity Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Sleepwear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Footwear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Accessories',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
    ],
  },
  {
    id: 9,
    description: 'Jacket,Sweater,Sweatshirt',
    title: 'Collections',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
    ],
  },
];
const CategorySection = () => {
  return (
    <FlatList
      // columnWrapperStyle={{
      //   backgroundColor: 'red',
      //   // justifyContent: 'space-around',
      //   paddingHorizontal: 15,
      // }}
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={({item, index}) => (
        <Accordian
          title={item.title}
          category={item.category}
          description={item.description}
        />
      )}
    />
    /* {[0, 0, 0, 0, 0, 0].map(item => {
        return (
          <>
            <ImageBackground
              resizeMode="cover"
              source={image.fabfamily}
              style={{
                height: 100,
                width: width / 3.5,
                overflow: 'hidden',
                backgroundColor: 'rgba(144, 50, 51, 0.5)',
                marginRight: 10,
                marginTop: 10,
              }}>
              <View style={{paddingHorizontal: 15}}>
                <Text>;lkj</Text>
              </View>
            </ImageBackground>
          </>
        );
      })} */
  );
};
const DrawerContent = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CategorySection')}>
      <Text>Shop By Categories</Text>
    </TouchableOpacity>
  );
};
const DrawerComponent = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName={'HomeStack'}
        backBehavior={'history'}
        drawerContent={DrawerContent}
        defaultStatus={'closed'}
        screenOptions={{
          header: () => false,
          // drawerStyle: {
          //   width: 400,
          // },
          swipeEnabled: Platform.OS == 'android' ? false : true,
        }}>
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="CategorySection" component={CategorySection} />
      </Drawer.Navigator>
    </>
  );
};
export default function MainScreen(props) {
  console.log(props);
  return (
    <Tab.Navigator
      initialRouteName="DrawerComponent"
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

        headerShown: false,
        tabBarHideOnKeyboard: true,

        // header: p => <Header />,
        // tabBarLabel: () => {
        //   return null;
        // },
      }}>
      <Tab.Screen
        name="DrawerComponent"
        component={DrawerComponent}
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
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarLabel: 'Account',
          tabBarActiveTintColor: Colors.primarycolor,
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate('MyAccount')}>
              <MaterialCommunityIcons
                name="account-outline"
                color={focused ? Colors.primarycolor : Colors.inactiveicon}
                size={25}
              />
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

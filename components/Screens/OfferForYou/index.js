import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { numberOfLines } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import { ScrollView } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function OfferForYou({
  dataWomen,
  dataMen,
  dataKids,
  dataHome,
  isAdmin2,
}) {
  const navigation = useNavigation();
  const [selectTab, setSelectedTab] = useState();
  const [active, setActive] = useState('');
  const Card = obj => {
    return (
      <ScrollView
        horizontal
        style={{ backgroundColor: 'white' }}
        showsHorizontalScrollIndicator={false}>
        {Array.isArray(obj) &&
          obj.map(item => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  const newCode = item.landingPage;
                  navigation.navigate('LandingPageSaris_Blouses', {
                    code: newCode,
                    title: item.title,
                    isAdmin2: 'isAdmin2',
                  });
                }}
                style={{
                  marginRight: 10,
                }}>
                <Image
                  style={{ height: 128, width: 192, resizeMode: 'contain' }}
                  source={{
                    uri: item?.image?.split('?')[0],
                  }}
                />
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    );
  };

  const data = [{
    title: Array.isArray(dataWomen) && dataWomen[0]?.categoryName,
    data: dataWomen,
    selected: true,
    Card,
  }, {
    title: Array.isArray(dataMen) && dataMen[0]?.categoryName,
    data: dataMen,
    selected: false,
    Card,
  }, {
    title: Array.isArray(dataKids) && dataKids[0]?.categoryName,
    data: dataKids,
    selected: false,
    Card,
  }, {
    title: Array.isArray(dataHome) && dataHome[0]?.categoryName,
    data: dataHome,
    selected: false,
    Card,
  }];

  return (
    <>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 20,
          paddingTop: 20,
          color: Colors.textcolor,
          marginLeft: 15,
        }}>
        Offers for you
      </Text>

      {/* <View style={{ flexDirection: 'row', paddingLeft: 16 }}>
        {offerTabs.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                let tabs = offerTabs
                for (let i = 0; i < tabs.length; i++) {
                  const element = tabs[i];
                  // if(element.selected == item.selected)
                  if (i === index) {
                    element.selected = true
                  }
                  else {
                    element.selected = false
                  }
                  tabs[i] = element

                }
              }}
              style={{ paddingVertical: 5, marginRight: 16, borderBottomWidth: 2, borderBottomColor: item.selected ? Colors.primarycolor : 'transparent' }}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )
        })}
      </View> */}

      <NavigationContainer independent={true}>
        {Object.entries(data).length && data[0]?.title && (
          <Tab.Navigator
            //   initialRouteName={data[0]?.title}
            swipeEnabled={false}
            screenOptions={{
              tabBarIndicatorStyle: {
                backgroundColor: 'transparent',
                height: 2,
              },
              tabBarScrollEnabled: true,
              tabBarStyle: {
                // height: 40,
                shadowColor: 'white',
                paddingLeft: 15,
                justifyContent: 'flex-start',
              },
            }}>
            {Object.entries(data).length &&
              data[0]?.title &&
              data.map((item, index) => {
                return (
                  item?.title && (
                    <Tab.Screen
                      key={Math.random() * 3456}
                      name={item?.title}
                      listeners={{
                        tabPress: e => {
                          // Prevent default action
                          setActive(Math.random());
                        },
                      }}
                      options={({ route, navigation }) => ({
                        tabBarItemStyle: {
                          width: data.length > 1 ? 'auto' : null,
                        },
                        unmountOnBlur: true,
                        tabBarLabel: ({ focused }) => {
                          return (
                            <TouchableOpacity
                              style={{
                                borderBottomWidth: 2,
                                borderBottomColor: focused
                                  ? Colors.primarycolor
                                  : 'transparent',
                                width: '100%',
                                paddingVertical: 3,
                              }}>
                              <Text
                                style={{
                                  fontSize: 16,
                                  fontFamily: Fonts.Assistant300,
                                  color: focused
                                    ? Colors.primarycolor
                                    : Colors.textcolor,
                                }}>
                                {item?.title}
                              </Text>
                            </TouchableOpacity>
                          );
                        },
                      })}
                      component={() => {
                        return item?.Card && item?.data
                          ? item?.Card(item?.data)
                          : null;
                      }}></Tab.Screen>
                  )
                );
              })}
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}

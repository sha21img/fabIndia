import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

const Tab = createMaterialTopTabNavigator();

export default function CommonTopTab({data = []}) {
  function* myFun() {
    while (true) {
      yield 'auto';
    }
  }
  const myFunGen = myFun();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: Colors.primarycolor,
            height: 2,
          },
          tabBarScrollEnabled: true,
          tabBarStyle: {
            height: 40,
            backgroundColor: Colors.backgroundColor,
            shadowColor: 'white',
          },
        }}>
        {data?.map(item => {
          return (
            <Tab.Screen
              key={Math.random() * 3456}
              name={item.name}
              options={{
                tabBarItemStyle: {
                  width: 'auto',
                  padding: 0,
                },
                tabBarLabel: ({focused}) => (
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: focused
                        ? Fonts.Assistant700
                        : Fonts.Assistant300,
                      color: focused ? Colors.primarycolor : Colors.textcolor,
                      padding: 0,
                    }}>
                    {item.name + '       '}
                  </Text>
                ),
              }}
              component={item.screen}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

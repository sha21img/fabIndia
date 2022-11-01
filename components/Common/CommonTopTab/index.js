import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

const Tab = createMaterialTopTabNavigator();
export default function CommonTopTab({data = []}) {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: Colors.primarycolor,
            height: 2,
          },
          tabBarScrollEnabled: true,
          tabBarLabelStyle: {
            fontSize: 18,
            fontFamily: Fonts.Assistant700,
            textTransform: 'none',
          },
          tabBarStyle: {
            height: 40,
            backgroundColor: Colors.backgroundColor,
            shadowColor: 'white',
          },
          tabBarLabelStyle: {width: 400},
        }}>
        {data?.map(item => {
          return (
            <Tab.Screen
              key={Math.random() * 3456}
              name={item.name}
              options={{
                tabBarItemStyle: {
                  width: 'auto',
                },
                // tabBarLabel: ({focused}) => (
                //   <Text
                //     style={{
                //       fontSize: 18,
                //       fontFamily: focused
                //         ? Fonts.Assistant700
                //         : Fonts.Assistant300,
                //       color: focused ? Colors.primarycolor : Colors.textcolor,
                //     }}>
                //     {item.name}
                //   </Text>
                // ),
              }}
              component={item.screen}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

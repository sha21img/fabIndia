import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
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
            backgroundColor: 'transparent',
            height: 2,
          },
          tabBarScrollEnabled: true,
          tabBarStyle: {
            height: 40,
            backgroundColor: Colors.backgroundColor,
            shadowColor: 'white',
          },
        }}>
        {data.map((item, index) => {
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
                  <View
                    style={{
                      marginLeft: 15,
                      borderBottomWidth: 2,
                      borderBottomColor: focused
                        ? Colors.primarycolor
                        : 'transparent',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        fontFamily: focused
                          ? Fonts.Assistant700
                          : Fonts.Assistant300,
                        color: focused ? Colors.primarycolor : Colors.textcolor,
                        padding: 0,
                      }}>
                      {item.name + '      '}
                      {/* {item.title + '       '} */}
                    </Text>
                  </View>
                ),
              }}
              component={item.screen}
              // component={() => <ShowData item={item} />}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

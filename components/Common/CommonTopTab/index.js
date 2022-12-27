import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

const Tab = createMaterialTopTabNavigator();

export default function CommonTopTab(props) {
  const {data = [], Card} = props;
  console.log('this sis a to tab data reult', data[0]?.title);
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={data[0]?.title}
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
        {data.map((item, index) => {
          return (
            !!item?.title && (
              <Tab.Screen
                key={Math.random() * 3456}
                name={item?.title ? item?.title : 'po'}
                options={{
                  tabBarItemStyle: {
                    width: data.length > 1 ? 'auto' : null,
                  },
                  unmountOnBlur: true,
                  tabBarLabel: ({focused}) => (
                    <View
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
                    </View>
                  ),
                }}
                component={() =>
                  item?.card ? item?.card(props, item) : null
                }></Tab.Screen>
            )
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

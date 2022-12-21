import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import ShowData from './ShowData';

const Tab = createMaterialTopTabNavigator();

export default function CommonTopTab(props) {
  // console.log('props.....', props);
  const {data = [], Card} = props;
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        swipeEnabled={false}
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
            height: 2,
          },
          tabBarScrollEnabled: true,
          tabBarStyle: {
            // height: 40,
            backgroundColor: Colors.backgroundColor,
            shadowColor: 'white',
            marginLeft: 15,
          },
        }}>
        {data.map((item, index) => {
          console.log(
            'item.detail=============================================================================',
            item.title,
          );
          return (
            !!item?.title && (
              <Tab.Screen
                key={Math.random() * 3456}
                name={item?.title ? item?.title : 'po'}
                options={{
                  tabBarItemStyle: {
                    width: 'auto',
                  },
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
                // component={item.screen}
                // component={Common}
                component={() =>
                  item?.card ? (
                    item?.card(props, item, item.detail)
                  ) : (
                    <Text>hello</Text>
                  )
                }
              />
              /* {() => (item?.card ? item?.card(item) : <Text>hello</Text>)} */
            )
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

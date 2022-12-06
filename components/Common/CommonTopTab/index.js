import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import ShowData from './ShowData';

const Tab = createMaterialTopTabNavigator();

export default function CommonTopTab(props) {
  console.log('props.....', props);
  const {data = [], Card} = props;
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
          console.log(item);
          return (
            !!item?.title && (
              <Tab.Screen
                key={Math.random() * 3456}
                name={item?.title ? item?.title : 'po'}
                options={{
                  tabBarItemStyle: {
                    width: 'auto',
                    padding: 0,
                    marginRight: 10,
                  },
                  tabBarLabel: ({focused}) => (
                    <View
                      style={{
                        marginLeft: 15,
                        borderBottomWidth: 2,
                        borderBottomColor: focused
                          ? Colors.primarycolor
                          : 'transparent',
                        flexWrap: 'nowrap',
                        width: '100%',
                      }}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontFamily: focused
                            ? Fonts.Assistant600
                            : Fonts.Assistant300,
                          color: focused
                            ? Colors.primarycolor
                            : Colors.textcolor,
                          // padding: 0,
                        }}>
                        {/* {item.name + '      '} */}
                        {item?.title}
                      </Text>
                    </View>
                  ),
                }}
                // component={item.screen}
                // component={Common}
                component={() =>
                  item?.card ? item?.card(props, item) : <Text>hello</Text>
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

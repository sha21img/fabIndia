import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Accordian from '../../Common/Accordian';
import SimpleAccordian from '../../Common/SimpleAccordian';
import {Styles} from './style';

const AboutUsMenu = props => {
  console.log('navigation', props);
  const menuItem = [
    {
      id: 1,
      name: 'About Fabindia',
      subItem: [
        {
          id: 1,
          name: 'Our story',
          routes: 'AboutFabindia',
        },
        {
          id: 2,
          name: 'Philosophy',
          routes: 'Philosophy',
        },
        {
          id: 3,
          name: 'Organic Certification',
          routes: 'Certification',
        },
        {
          id: 4,
          name: 'The Fabindia Schools',
          routes: 'FabIndiaSchools',
        },
        {
          id: 5,
          name: '60 years of Fabindia',
          routes: 'Years60',
        },
      ],
    },
    {
      id: 2,
      name: 'Franchise Enquiry Form',
      subItem: [],
    },
    {
      id: 3,
      name: 'Privacy Policy',
      subItem: [],
    },
    {
      id: 4,
      name: 'Terms of use',
      subItem: [],
    },
    {
      id: 5,
      name: 'Log out',
      subItem: [],
    },
  ];
  return (
    <>
      <ScrollView style={{backgroundColor: Colors.backgroundColor}}>
        {menuItem.map(item => {
          return (
            <>
              {item.name == 'About Fabindia' ? (
                <View>
                  <SimpleAccordian
                    {...props}
                    category={item.subItem}
                    title={item.name}
                  />
                </View>
              ) : (
                <View key={Math.random() * 1929999} style={Styles.MenuItem}>
                  <Text style={Styles.MenuItemText}>{item.name}</Text>
                </View>
              )}
            </>
          );
        })}
      </ScrollView>
    </>
  );
};
export default AboutUsMenu;

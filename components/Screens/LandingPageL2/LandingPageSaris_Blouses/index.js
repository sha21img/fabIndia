import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import TopBanner from './TopBanner';
import {Colors} from '../../../../assets/Colors';

export default function LandingPageSaris_Blouses() {
  return (
    <>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          flexGrow: 1,
          paddingBottom: 20,
        }}>
        <TopBanner />
      </ScrollView>
    </>
  );
}

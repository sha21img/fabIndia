import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import TopBanner from './TopBanner';
import {Colors} from '../../../../assets/Colors';
import ResultCards from './ResultCards';
import SortBox from './SortBox';

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
        <SortBox />
        <ResultCards data={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} />
      </ScrollView>
    </>
  );
}

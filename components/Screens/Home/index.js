import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from './Header';
import Catagory from './Catagory';
// import SkeletonContent from 'react-native-skeleton-content';

export default function Dashbord() {
  return (
    <>
      {/* <SkeletonContent
        containerStyle={{flex: 1, width: 300}}
        isLoading={true}
        layout={[
          {key: 'someId', width: 220, height: 20, marginBottom: 6},
          {key: 'someOtherId', width: 180, height: 20, marginBottom: 6},
        ]}>
        <Text>Your content</Text>
        <Text>Other content</Text>
      </SkeletonContent> */}
    <ScrollView>
        <Header />
        <Catagory />
      </ScrollView>
    </>
  );
}

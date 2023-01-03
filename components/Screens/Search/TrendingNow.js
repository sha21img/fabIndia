import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Card from '../../Common/Card';
import {Styles} from './styles';

const TrendingNow = () => {
  return (
    <>
      <Text style={Styles.trendingnowtxt}>Trending now</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}>
        {[0, 1, 3].map(item => (
          <Card
            item={item}
            customViewStyle={{marginRight: 10}}
            key={Math.random() * 1000}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default TrendingNow;

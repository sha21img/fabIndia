import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import ReceipsCard from './ReceipCard';

export default function FoodReceips({heading, data = [], customStyle}) {
  return (
    <View style={[Styles.container, customStyle]}>
      <View style={Styles.headingBox}>{heading()}</View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(item => {
          return <ReceipsCard item={item} />;
        })}
      </ScrollView>
    </View>
  );
}

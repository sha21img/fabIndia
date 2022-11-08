import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {Colors} from '../../../../assets/Colors';
import {useNavigation} from '@react-navigation/native';

export default function Catagory({data = []}) {
  const navigation = useNavigation();
  const catagory = data.map(item => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.route)}
        style={[Styles.catagory, {backgroundColor: item.bgColor}]}>
        <Text style={[Styles.catagoryText, {color: item.textColor}]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  });
  return (
    <View style={Styles.mainContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.container}>
        {catagory}
      </ScrollView>
    </View>
  );
}

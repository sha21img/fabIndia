import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {dataDetectorTypes} from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import FabulousCard from '../../Common/FabulousCard';
import {color} from 'react-native-reanimated';
import {Colors} from '../../../assets/Colors';

export default function PopularCards({
  data = [],
  customViewStyle,
  title,
  description,
}) {
  return (
    <>
      <View style={[customViewStyle]}>
        <View style={{paddingHorizontal: 15}}>
          <Text
            style={{
              fontFamily: Fonts.PlayfairDisplay700Italic,
              fontSize: 18,
              lineHeight: 22,
              paddingVertical: 5,
              color: Colors.textcolor,
            }}>
            {title}
          </Text>
          {description && (
            <Text
              style={{
                fontFamily: Fonts.Assistant400,
                fontSize: 16,
                color: Colors.textcolor,
                paddingVertical: 5,
                lineHeight: 22,
              }}>
              {description}
            </Text>
          )}
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 5}}
          showsHorizontalScrollIndicator={false}>
          {data.map(item => {
            return (
              <FabulousCard item={item} customViewStyle={{marginRight: 10}} />
            );
          })}
        </ScrollView>
      </View>
    </>
  );
}

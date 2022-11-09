import {View, Text} from 'react-native';
import React from 'react';
import LifeStyle from '../../../../../Common/LifeStyle';
import {image} from '../../../../../../assets/images';
import Fonts from '../../../../../../assets/fonts';
const LifeStyleData = [
  {image: image.womenPhoto1, name: 'Beauty Bundle'},
  {image: image.womenPhoto2, name: 'Summer afternoons'},
];
const GetLifeStyleTitle = () => {
  return (
    <View
      style={{
        paddingTop: 20,
        paddingHorizontal: 15,
      }}>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600,
          color: '#4A4A4A',
          fontSize: 30,
        }}>
        Lifestyle 360
      </Text>
      <View>
        <Text
          style={{
            fontSize: 18,
            color: '#4A4A4A',
            lineHeight: 23,
            fontFamily: Fonts.Assistant400,
          }}>
          Combos that’ll keep you feeling fab!
        </Text>
      </View>
    </View>
  );
};

const LifeStyleCard = () => {
  return (
    <LifeStyle
      data={LifeStyleData}
      title={GetLifeStyleTitle}
      customViewStyle={{marginTop: 20}}
      backgroundColor="#EFE5E0"
    />
  );
};

export default LifeStyleCard;

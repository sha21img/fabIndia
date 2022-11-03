import {View, Text} from 'react-native';
import React from 'react';
import LifeStyle from '../../../../../Common/LifeStyle';
import {image} from '../../../../../../assets/images';
import Fonts from '../../../../../../assets/fonts';
const LifeStyleData = [
  {image: image.womenPhoto1, name: 'Classic Breakfast'},
  {image: image.womenPhoto2, name: 'Diet Conscious Habits'},
];
const GetLifeStyleTitle = () => {
  return (
    <>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600,
          color: '#4A4A4A',
          fontSize: 30,
          marginHorizontal: 20,
          marginBottom: 5,
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
            marginHorizontal: 20,
          }}>
          Combos that’ll keep you feeling fab!
        </Text>
      </View>
    </>
  );
};

const LifeStyleCard = () => {
  return (
    <LifeStyle
      data={LifeStyleData}
      title={GetLifeStyleTitle}
      customViewStyle={{marginTop: 20}}
    />
  );
};

export default LifeStyleCard;

import {View, Image} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import Feather from 'react-native-vector-icons/Feather';
import {Styles} from './styles';

export default function TopSwiper({data = [], customStyle}) {
  return (
    <Swiper
      loop={true}
      autoplay={true}
      autoplayTimeout={5}
      showsPagination={false}
      style={[Styles.wrapper, customStyle]}
      nextButton={
        <View style={Styles.button}>
          <Feather name="chevron-right" style={Styles.btnIcon} />
        </View>
      }
      prevButton={
        <View style={Styles.button}>
          <Feather name="chevron-left" style={Styles.btnIcon} />
        </View>
      }
      showsButtons={true}>
      {data.map((item, i) => {
        return <Image key={Math.random() * 1099900} style={Styles.image} source={item.banner} />;
      })}
    </Swiper>
  );
}

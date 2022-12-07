import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';

export default function Card1(props) {
  const {customViewStyle = {}, item} = props;
  console.log('poirewsdfghj', props);
  const defaultViewCustomStyles = {
    width: '48%',
    elevation: 1,
    backgroundColor: '#FFFFFF',
  };

  return (
    <>
      <TouchableOpacity
        style={[defaultViewCustomStyles, customViewStyle]}
        onPress={() => props.navigation.navigate('ProductDetailed')}>
        <Image
          source={image.card}
          style={Styles.imagedimension}
          resizeMode="cover"
        />
        <View style={Styles.headingbox}>
          <Text numberOfLines={1} style={Styles.headingtxt}>
            Cotton Silk Block Printed Sari Product Name
          </Text>
          <View style={Styles.pricebox}>
            <Text style={Styles.mrptxt}>M.R.P.</Text>
            <Text style={Styles.amounttxt}>₹ 800</Text>
            <Text style={Styles.priceofftxt}>₹ 1,000</Text>
            <Text style={Styles.offertxt}>20% off</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

import {View, Text, Image} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';

export default function Card3({customViewStyle = {}, item}) {
  const defaultViewCustomStyles = {
    width: '48%',
    // elevation: 1,
    backgroundColor: '#FFFFFF',
  };

  return (
    <>
      <View style={[defaultViewCustomStyles, customViewStyle]}>
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
          <View style={Styles.actions}>
            <Text style={Styles.actionstxt}>Remove</Text>
            <View style={Styles.dash}></View>
            <Text style={Styles.actionstxt}>Add to cart</Text>

          </View>
        </View>
      </View>
    </>
  );
}

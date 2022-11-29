import {View, Text, Image} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';

export default function Card({
  customViewStyle = {},
  item,
  originalprice = null,
  offer = null,
}) {
  const defaultViewCustomStyles = {
    width: 200,
    elevation: 1,
    backgroundColor: '#FFFFFF',
  };

  return (
    <>
      <View style={[defaultViewCustomStyles, customViewStyle]}>
        <Image
          source={image.card}
          style={{height: 208, width: 'auto'}}
          resizeMode="cover"
        />
        <View style={Styles.headingbox}>
          <Text style={Styles.headingtxt}>
            Cotton Silk Block Printed Sari Product Name
          </Text>
          <View style={Styles.amountbox}>
            <Text style={Styles.amounttxt}>₹ 800</Text>
            <Text style={Styles.amountoff}>
              {originalprice ? `₹${originalprice}` : null}
            </Text>
            <Text style={Styles.offertxt}>
              {offer ? `${offer}% off` : null}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}

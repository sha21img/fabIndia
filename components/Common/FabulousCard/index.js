import {View, Text, Image} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';
import {Colors} from '../../../assets/Colors';

export default function FabulousCard({
  customViewStyle = {},
  item,
  originalprice = null,
  offer = null,
}) {
  const defaultViewCustomStyles = {
    width: 250,
    elevation: 1,
    backgroundColor: '#FFFFFF',
  };

  return (
    <>
      <View style={[defaultViewCustomStyles, customViewStyle]}>
        <Image
          source={image.card}
          style={{height: 308, width: 250}}
          resizeMode="cover"
        />
        <View style={Styles.headingbox}>
          <Image source={image.FabulousBannerFlower} style={Styles.flower} />
          <Text style={Styles.headingtxt}>
            Cotton Silk Block Printed Sari Product Name Name Name NameName Name
            NameName
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
          <Text
            style={{
              color: '#DA5959',
              fontSize: 14,
              fontFamily: Fonts.Assistant700,
            }}>
            Out of stock
          </Text>
          <Text
            numberOfLines={2}
            style={{
              fontFamily: Fonts.PlayfairDisplay400Italic,
              fontSize: 14,
              color: Colors.textcolor,
            }}>
            A must-have, this Jamdani combines artistry with a modern pop of...
          </Text>
        </View>
      </View>
    </>
  );
}

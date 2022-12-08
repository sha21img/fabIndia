import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Card(props) {
  const {
    customViewStyle = {},
    item,
    originalprice = null,
    offer = null,
  } = props;

  const defaultViewCustomStyles = {
    width: 192,
    elevation: 1,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    marginBottom: 1,
  };

  return (
    <>
      <TouchableOpacity
        style={[defaultViewCustomStyles, customViewStyle]}
        onPress={() => props.navigation.navigate('ProductDetailed')}>
        <Image
          source={image.card}
          style={{height: 243, width: 192}}
          resizeMode="contain"
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
      </TouchableOpacity>
    </>
  );
}

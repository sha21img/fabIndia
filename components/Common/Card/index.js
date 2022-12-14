import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Card(props) {
  const {
    customViewStyle = {},
    items,
    originalprice = null,
    offer = null,
  } = props;

  // console.log(
  //   'items wwwwwwwwwwwwwwwwwwwwwwwoooooooooooooooooooooommmmmmmmmmmmmmmmeeeeeeeeeeeeeeeeennnnnnnnnnnnn',
  //   items.code,
  // );
  // console.log('items    atattatatata dataadatadatra', items);

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
        onPress={() =>
          props.navigation.navigate('ProductDetailed', {
            productId: items.code,
          })
        }
        activeOpacity={0.8}>
        <Image
          source={{
            uri: `https://apisap.fabindia.com${items?.images[0]?.url}`,
          }}
          // source={{uri: item.images[0].url}}
          style={{height: 243, width: 192}}
          resizeMode="contain"
        />
        <View style={Styles.headingbox}>
          <Text numberOfLines={1} style={Styles.headingtxt}>
            {items.name}
          </Text>
          <View style={Styles.amountbox}>
            <Text style={Styles.amounttxt}>
              M.R.P. {items?.price?.formattedValue}
            </Text>
            {/* <Text style={Styles.amountoff}>
              {originalprice ? `₹${originalprice}` : null}
            </Text>
            <Text style={Styles.offertxt}>
              {offer ? `${offer}% off` : null}
            </Text> */}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}

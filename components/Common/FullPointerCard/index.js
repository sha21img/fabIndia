import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';
import {Styles} from './styles';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';

const FullPointerCard = ({
  customViewStyle = {},
  item,
  Noti = false,
  BTNS = false,
  TREND = false,
}) => {
  return (
    <View style={[Styles.productcontainer, customViewStyle]}>
      {TREND ? <Text style={Styles.trendingTag}>Trending</Text> : null}
      <Image
        source={image.singleproduct}
        style={{height: 424, width: 'auto'}}
      />
      <View style={Styles.detailsContainer}>
        <Text style={Styles.heading}>Beach Day</Text>
        <View style={{paddingVertical: 5}}>
          <Text style={Styles.productName}>Block Print Cotton Kaftan</Text>
          <Text style={Styles.productName}>+</Text>
          <Text style={Styles.productName}>Silver Earrings</Text>
        </View>
        <View style={{paddingVertical: 5, flexDirection: 'row'}}>
          <Text style={Styles.mrp}>M.R.P.</Text>
          <Text style={Styles.price}>₹ 800</Text>
          <Text style={Styles.discount}>1,000</Text>
        </View>
        <Text style={Styles.save}>You save ₹200!</Text>
      </View>
    </View>
  );
};

export default FullPointerCard;

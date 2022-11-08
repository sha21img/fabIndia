import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';
import {Styles} from './styles';

const FullCard = ({customViewStyle = {}, item}) => {
  return (
    <TouchableOpacity style={[Styles.productcontainer, customViewStyle]}>
      <Image source={item.banner} style={{height: 415, width: '100%'}} />
      <View style={Styles.cardDetailContainer}>
        <Image source={image.FabulousBannerFlower} style={Styles.flower} />
        <View style={Styles.flower} />
        <Text style={Styles.singleproducttitle}>{item.title}</Text>
        <View style={Styles.txtbox}>
          <Text style={Styles.singleproductamountSign}>₹</Text>
          <Text style={Styles.singleproductamount}>17,000</Text>
        </View>
        <Text style={Styles.outofstocktxt}>Out of stock</Text>
        <View style={Styles.description}>
          <Text style={Styles.descriptionText}>
            Perfect for a simple summer wedding, this gorgeous silk sari is a
            classy choice!
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FullCard;

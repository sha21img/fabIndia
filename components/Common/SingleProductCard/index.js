import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import {Styles} from './styles';

const SingleProductCard = ({customViewStyle = {}, item}) => {
  return (
    <View style={[Styles.productcontainer, customViewStyle]}>
      <Image
        source={image.singleproduct}
        style={{height: 424, width: 'auto'}}
      />
      <View style={{paddingHorizontal: 10, paddingVertical: 10, width: 'auto'}}>
        <Text style={Styles.singleproducttitle}>Saaya Cotton Bedsheet Set</Text>
        <View style={Styles.txtbox}>
          <Text style={Styles.singleproducttitle}>M.R.P.</Text>
          <Text style={Styles.singleproductamount}>₹800</Text>
          <Text style={Styles.singleproductoff}>1,000</Text>
          <Text style={Styles.singleproductdiscount}>20% off</Text>
        </View>
        <Text style={Styles.outofstocktxt}>Out of stock</Text>
        <TouchableOpacity style={Styles.notifybtn}>
          <Text style={Styles.notifytxt}>Notify me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleProductCard;

import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';
import {Styles} from './styles';

const SingleProductCard = ({
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
      <View style={{paddingHorizontal: 10, paddingVertical: 15, width: 'auto'}}>
        <Text style={Styles.singleproducttitle}>Saaya Cotton Bedsheet Set</Text>
        <View style={Styles.txtbox}>
          <Text style={Styles.singleproducttitle}>M.R.P.</Text>
          <Text style={Styles.singleproductamount}>₹800</Text>
          <Text style={Styles.singleproductoff}>1,000</Text>
          <Text style={Styles.singleproductdiscount}>20% off</Text>
        </View>
        <Text style={Styles.outofstocktxt}>Out of stock</Text>
        {Noti ? (
          <TouchableOpacity style={Styles.notifybtn}>
            <Text style={Styles.notifytxt}>Notify me</Text>
          </TouchableOpacity>
        ) : null}
        {BTNS ? (
          <View style={Styles.btnBox}>
            <TouchableOpacity style={Styles.vr}>
              <Text style={Styles.btnText}>View in VR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.emi}>
              <Text style={Styles.btnText}>EMI available</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default SingleProductCard;

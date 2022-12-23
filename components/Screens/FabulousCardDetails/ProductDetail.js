import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';

export default function ProductDetail() {
  return (
    <View style={Styles.cardDetailContainer}>
      <Image source={image.FabulousBannerFlower} style={Styles.flower} />
      <Text style={Styles.singleproducttitle}>Silk Banarasi Sari</Text>
      <View style={Styles.txtbox}>
        <Text style={Styles.singleproductamountSign}>₹</Text>
        <Text style={Styles.singleproductamount}>17,000</Text>
      </View>
      <View style={Styles.description}>
        <Text style={Styles.descriptionText}>
          Perfect for a simple summer wedding, this gorgeous silk sari is a
          classy choice!
        </Text>
      </View>
      <View style={Styles.btnBox}>
        <TouchableOpacity style={Styles.btn}>
          <Text style={Styles.btnText}>Compare</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  flower: {
    width: 120,
    height: 130,
    position: 'absolute',
    top: -20,
    right: 0,
    transform: [{rotateY: '180deg'}],
  },
  cardDetailContainer: {
    padding: 15,
    backgroundColor: 'white',
  },
  singleproducttitle: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    paddingRight: 5,
  },
  txtbox: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  singleproductamountSign: {
    fontSize: 18,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
    marginRight: 3,
  },
  singleproductamount: {
    fontSize: 18,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
  },
  description: {
    paddingVertical: 5,
  },
  descriptionText: {
    fontFamily: Fonts.PlayfairDisplay400Italic,
    fontSize: 14,
    lineHeight: 19,
    color: Colors.textcolor,
  },
  btnBox: {
    flexDirection: 'row',
  },
  btn: {
    borderRadius: 50,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderColor: Colors.primarycolor,
    borderWidth: 1,
    marginVertical: 10,
    marginRight: 10,
  },
  btnText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.primarycolor,
  },
});

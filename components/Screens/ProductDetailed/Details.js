import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';

export default function Details({customStyle}) {
  return (
    <View style={[Styles.cardDetailContainer, customStyle]}>
      <Text style={Styles.singleproducttitle}>
        Cotton Viscose Blue Hand Block Print Short Kurta
      </Text>
      <View style={Styles.titleContainer}>
        <View style={Styles.titleHeader}>
          <View style={Styles.titleIcon}></View>
          <Text style={Styles.titleText}>Sustainable</Text>
        </View>
        <View style={Styles.titleHeader}>
          <View style={Styles.titleIcon}></View>
          <Text style={Styles.titleText}>Sustainable</Text>
        </View>
      </View>
      <View style={Styles.txtbox}>
        <Text style={Styles.singleproductamountSign}>₹</Text>
        <Text style={Styles.singleproductamount}>800</Text>
        <Text style={Styles.priceofftxt}>₹ 1,000</Text>
        <Text style={Styles.offertxt}>20% off</Text>
      </View>
      <Text style={Styles.oos}>Out of stock</Text>
      <View style={Styles.btnBox}>
        <TouchableOpacity style={Styles.btn}>
          <Text style={Styles.btnText}>Compare</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  cardDetailContainer: {
    padding: 15,
    backgroundColor: '#F6F6F6',
  },
  singleproducttitle: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    paddingRight: 5,
  },
  txtbox: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  singleproductamountSign: {
    fontSize: 18,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
    marginRight: 2,
  },
  singleproductamount: {
    fontSize: 18,
    fontFamily: Fonts.Assistant700,
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
    marginVertical: 5,
    marginRight: 10,
  },
  btnText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.primarycolor,
  },
  priceofftxt: {
    paddingRight: 5,
    textDecorationLine: 'line-through',
    color: '#979797',
    fontSize: 16,
    paddingHorizontal: 10,
    fontFamily: Fonts.Assistant700,
  },
  offertxt: {
    paddingHorizontal: 10,
    fontFamily: Fonts.Assistant700,
    color: '#96AD66',
    fontSize: 16,
  },
  oos: {
    fontFamily: Fonts.Assistant700,
    color: '#DA5959',
    fontSize: 16,
    lineHeight: 22,
    paddingVertical: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  titleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
  titleIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#ADA866',
    fontFamily: Fonts.Assistant600,
    fontSize: 14,
    lineHeight: 14,
  },
  titleText: {
    paddingHorizontal: 5,
    color: '#ADA866',
  },
});

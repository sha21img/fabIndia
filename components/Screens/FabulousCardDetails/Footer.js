import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export default function Footer() {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.heartBox}>
        <MaterialCommunityIcons
          name="cards-heart-outline"
          color={Colors.primarycolor}
          size={26}
        />
      </TouchableOpacity>
      <TouchableOpacity style={Styles.cartBox}>
        <Text style={Styles.cartText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  heartBox: {
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: Colors.primarycolor,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBox: {
    backgroundColor: Colors.primarycolor,
    padding: 12,
    width: '85%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    color: 'white',
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
  },
});

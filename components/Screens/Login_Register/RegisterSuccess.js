import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import CommonButton from '../../Common/CommonButton';
import {Colors} from '../../../assets/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';

export default function RegisterSuccess(props) {
  const From = props?.route?.params?.From || '';
  const productCode = props?.route?.params?.productCode || '';
  const code = props?.route?.params?.code || '';
  return (
    <>
      <View style={Styles.mainContainer}>
        <Image
          source={image.RegLeft}
          style={Styles.RegLeft}
          resizeMode="cover"
        />
        <Image
          source={image.RegRight}
          style={Styles.RegRight}
          resizeMode="cover"
        />
        <View style={Styles.statusContainer}>
          <View style={Styles.checkBox}>
            <AntDesign name="check" color={'white'} size={45} />
          </View>
          <Text style={Styles.title}>Thank you for registering with us!</Text>
        </View>
        <CommonButton
          txt="Start shopping now!"
          customViewStyle={Styles.btn}
          handleClick={() => {
            props.navigation.navigate('Login_Register', {
              From: From,
              productCode: productCode,
              code: code,
            });
          }}
        />
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F3ECE8',
    flex: 1,
  },
  statusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 25,
    marginTop: '15%',
  },
  btn: {
    backgroundColor: Colors.primarycolor,
    alignSelf: 'center',
    width: '90%',
    marginTop: 'auto',
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    paddingVertical: 10,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
    flexWrap: 'wrap',
  },
  checkBox: {
    borderRadius: 100,
    width: 70,
    height: 70,
    backgroundColor: '#96AD66',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  RegRight: {
    width: 140,
    height: 300,
    position: 'absolute',
    right: 0,
  },
  RegLeft: {
    width: 230,
    height: 520,
    position: 'absolute',
    bottom: 0,
  },
});

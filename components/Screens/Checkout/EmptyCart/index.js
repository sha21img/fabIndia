import {View, Text, Image} from 'react-native';
import React from 'react';
import {image} from '../../../../assets/images';
import Styles from './styles';
import CommonButton from '../../../Common/CommonButton';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
import {CommonActions} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EmptyCart(props) {
  console.log('props..............', props);
  const isLogedIn = async () => {
    console.log('props..............');

    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    if (getToken.isCheck) {
      props.navigation.navigate('YourWishlist');
    } else {
      props.navigation.navigate('Login_Register');
    }
    // if (getToken.isCheck) {
    //   props.navigation.navigate('');
    // } else {
    //   props.navigation.dispatch(
    //     CommonActions.reset({
    //       index: 0,
    //       routes: [{name: 'MyAccounts'}],
    //     }),
    //   );
    // }
  };
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.ImageView}>
        <Image
          source={image.transCart}
          style={Styles.imagedimension}
          resizeMode="cover"
        />
        <View style={Styles.textView}>
          <Text style={Styles.carttxt}>Your cart is empty !</Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontFamily: Fonts.Assistant400,
            }}>
            Looks like you haven't added anything to your cart yet
          </Text>
        </View>
      </View>
      <View style={Styles.btnContainer}>
        <CommonButton
          handleClick={() => {
            isLogedIn();
          }}
          txt="Check wishlist"
          btntxtColor={Colors.primarycolor}
          customViewStyle={{
            borderColor: Colors.primarycolor,
            borderWidth: 1,
            marginVertical: 8,
          }}
        />
        <CommonButton
          handleClick={() => {
            props.navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'MainScreen'}],
              }),
            );
          }}
          txt="Start shopping"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
            marginVertical: 8,
          }}
        />
      </View>
    </View>
  );
}

import {View, Text, Image} from 'react-native';
import React from 'react';
import {image} from '../../../../assets/images';
import Styles from './styles';
import CommonButton from '../../../Common/CommonButton';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';

export default function EmptyCart(props) {
  console.log('props..............', props);
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
            props.navigation.navigate('Home');
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

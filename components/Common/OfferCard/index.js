import React from 'react';
import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './style';

const OfferCard = ({
  backgroundColor = '#EF9D8C',
  offerContainerBackground = '#903233',
  data,
  UptoText = '',
  customViewStyle = {},
}) => {
  const {offerValue, heading, description} = data;
  const width = Dimensions.get('window').width;
  return (
    <View style={customViewStyle}>
      <ImageBackground
        source={image.offerPic}
        style={{height: 325, width: width}}>
        <LinearGradient
          colors={['transparent', backgroundColor]}
          style={Styles.cardGradient}>
          <View
            style={[
              Styles.OfferContainer,
              {backgroundColor: offerContainerBackground},
            ]}>
            {!!UptoText ? <Text style={Styles.UptoText}>{UptoText}</Text> : ''}
            <Text style={Styles.OfferValue}>{offerValue}%</Text>
            <Text style={Styles.OfferValueText}>OFF</Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 20}}>
            {heading()}
          </View>
        </LinearGradient>
      </ImageBackground>
      <View
        style={[
          Styles.ShopTablet,
          {backgroundColor: backgroundColor, width: width},
        ]}>
        {description()}
        {/* <Text style={Styles.CardDescription}>{description}</Text> */}
        <View style={Styles.ShopNowContainer}>
          <View style={Styles.ShopNowContainerText}>
            <Text style={Styles.btntext}>Shop Now</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default OfferCard;

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
}) => {
  const {offerValue, heading, subHeading, description} = data;
  const width = Dimensions.get('window').width;
  return (
    <View>
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
            {subHeading()}
          </View>
        </LinearGradient>
      </ImageBackground>
      <View
        style={[Styles.ShopTablet,{backgroundColor: backgroundColor, width:width}]}>
        <Text style={Styles.CardDescription}>{description}</Text>
        <View
          style={Styles.ShopNowContainer}>
          <View
            style={Styles.ShopNowContainerText}>
            <Text style={{color: '#903233', fontFamily:Fonts.AssistantRegular,fontWeight:"400"}}>Shop Now</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default OfferCard;

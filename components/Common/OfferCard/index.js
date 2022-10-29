import React from 'react';
import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {image} from '../../../assets/images';

const OfferCard = ({
  backgroundColor = '#EF9D8C',
  offerContainerBackground = '#903233',
  data,
  fontFamily = '',
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
          style={{
            position: 'absolute',
            bottom: 0,
            height: 130,
            width: '100%',
          }}>
          <View
            style={{
              height: 97,
              width: 97,
              backgroundColor: offerContainerBackground,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.8,
              marginHorizontal: 20,
            }}>
            {/* <Text style={{color:"#ffffff", fontSize:20,}}>Upto</Text> */}
            <Text style={{color: '#ffffff', fontSize: 30, fontWeight: '700'}}>
              {offerValue}%
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 20,
                fontFamily: 'PlayfairDisplay-Italic',
                lineHeight: 20,
              }}>
              OFF
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 20}}>
            <Text
              style={{
                fontSize: 24,
                fontFamily: !!fontFamily
                  ? fontFamily
                  : 'PlayfairDisplay-ExtraBold',
                color: '#ffffff',
              }}>
              {heading}
            </Text>
            <Text
              style={{
                fontSize: 26,
                fontFamily: !!fontFamily
                  ? fontFamily
                  : 'PlayfairDisplay-Italic',
                color: '#ffffff',
                marginLeft: 5,
              }}>
              {subHeading}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View
        style={{
          height: 123,
          width: width,
          backgroundColor: backgroundColor,
          paddingHorizontal: 20,
        }}>
        <Text style={{fontSize: 16, color: '#ffffff'}}>{description}</Text>
        <View
          style={{
            alignItems: 'flex-start',
            bottom: '10%',
            position: 'absolute',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 50,
              //   marginTop:20
            }}>
            <Text style={{color: '#903233'}}>Shop Now</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default OfferCard;

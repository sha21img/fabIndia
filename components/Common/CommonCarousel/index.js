import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';

export default function CommonCarousel({data = []}) {
  const width = Dimensions.get('window').width;
  return (
    <Carousel
      loop
      width={width}
      height={width}
      autoPlay={true}
      data={data}
      scrollAnimationDuration={1000}
      renderItem={item => {
        return (
          <>
            <ImageBackground
              resizeMode="cover"
              style={{
                width: width / 1.07,
                height: width / 1.07,
                alignSelf: 'center',
                marginVertical: 10,
              }}
              source={item.item.banner}>
              <LinearGradient
                colors={['rgba(0,0,0,0.4)', 'rgba(255,255,255,0)']}
                style={Styles.container}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}>
                {item.item.heading()}
                <TouchableOpacity style={Styles.ButtonBox}>
                  <Text style={Styles.ButtonText}>{item.item.buttonText}</Text>
                </TouchableOpacity>
              </LinearGradient>
            </ImageBackground>
          </>
        );
      }}
    />
  );
}

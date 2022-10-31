import {ImageBackground, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function CommonCarousel({data = [], width, height}) {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Carousel
        loop
        width={width}
        height={height}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        renderItem={item => {
          return (
            <>
              <ImageBackground
                resizeMode="cover"
                key={Math.random() * 1099900}
                style={{
                  width: width,
                  height: height,
                  alignSelf: 'center',
                  marginVertical: 10,
                }}
                source={item.item.banner}>
                <LinearGradient
                  colors={['rgba(0,0,0,0.4)', 'rgba(255,255,255,0)']}
                  style={{
                    padding: 20,
                    width: width,
                    height: height,
                  }}
                  start={{x: 0, y: 0}}
                  end={{x: 0, y: 1}}>
                  {item.item.heading()}
                  <TouchableOpacity style={Styles.ButtonBox}>
                    <Text style={Styles.ButtonText}>
                      {item.item.buttonText}
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </ImageBackground>
            </>
          );
        }}
      />
    </GestureHandlerRootView>
  );
}

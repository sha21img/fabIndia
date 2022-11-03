import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export default function CommonCarousel({
  data = [],
  width,
  height,
  customStyle = {},
}) {
  const [imgActive1, setImgActive1] = React.useState(0);
  return (
    <>
      {/* <GestureHandlerRootView style={{flex: 1, alignSelf: 'center'}}> */}
      <View style={[{alignItems: 'center'}, customStyle]}>
        <Carousel
          loop={true}
          pagingEnabled
          onScrollEnd={index => setImgActive1(index)}
          width={width}
          height={height}
          autoPlay={true}
          data={data}
          scrollAnimationDuration={1000}
          autoPlayInterval={3000}
          // onSnapToItem={index => console.log(index)}
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
                    {item.item.heading_btn()}
                  </LinearGradient>
                </ImageBackground>
              </>
            );
          }}
        />
        {/* </GestureHandlerRootView> */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          {data.map((item, index) => (
            <Text
              style={
                imgActive1 == index
                  ? {color: Colors.primarycolor}
                  : {color: '#E5E5E5'}
              }>
              ●
            </Text>
          ))}
        </View>
      </View>
    </>
  );
}

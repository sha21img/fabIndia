import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Colors} from '../../../assets/Colors';

export default function CommonCarousel({data = [], width, height}) {
  const [imgActive1, setImgActive1] = React.useState(0);
  return (
    <>
      {/* <GestureHandlerRootView style={{flex: 1, alignSelf: 'center'}}> */}
      <View style={{alignItems: 'center'}}>
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
                      width: width,
                      height: height,
                      alignSelf: 'center',
                      marginVertical: 10,
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
      </View>
      {/* </GestureHandlerRootView> */}
      <View style={Styles.dotBox}>
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
    </>
  );
}

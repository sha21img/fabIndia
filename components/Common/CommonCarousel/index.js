import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../assets/Colors';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function CommonCarousel({data = []}) {
  const [imgActive1, setImgActive1] = React.useState(0);
  const width = Dimensions.get('window').width;

  return (
    <>
      {/* <GestureHandlerRootView> */}
      <Carousel
        pagingEnabled
        onScrollEnd={index => setImgActive1(index)}
        loop={true}
        width={width}
        height={width}
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
      {/* </GestureHandlerRootView> */}
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
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
    </>
  );
}

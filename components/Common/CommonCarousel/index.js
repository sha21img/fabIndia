import {
  Dimensions,
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {Styles} from './styles';

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
      // onSnapToItem={index => console.log('current index:', index)}
      renderItem={item => (
        <ImageBackground
          resizeMode="cover"
          style={Styles.container}
          source={item.item.image}>
          <View style={Styles.headingContainer}>
            <Text style={Styles.heading}>{item.item.heading}</Text>
            <Text style={Styles.text}>{item.item.text}</Text>
          </View>
          <TouchableOpacity style={Styles.exploreNowBox}>
            <Text style={Styles.exploreNowText}>Explore now</Text>
          </TouchableOpacity>
        </ImageBackground>
      )}
    />
  );
}

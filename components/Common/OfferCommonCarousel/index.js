import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Colors} from '../../../assets/Colors';
import OfferCard from '../OfferCard';

export default function OfferCommonCarousel({
  data = [],
  width,
  height,
  backgroundColor,
  UptoText,
  customStyle = {},
}) {
  const [imgActive1, setImgActive1] = React.useState(0);
  const renderItem = ({item}) => {
    return (
      <>
        <OfferCard
          key={Math.random() * 99}
          UptoText={UptoText}
          backgroundColor={backgroundColor}
          data={item}
        />
      </>
    );
  };
  return (
    <>
      <View style={[{alignItems: 'center'}, customStyle]}>
        <Carousel
          autoplay
          loop
          data={data}
          renderItem={renderItem}
          autoPlayInterval={3000}
          sliderWidth={width}
          itemWidth={width}
          itemHeight={height}
          sliderHeight={height}
          onSnapToItem={index => setImgActive1(index)}
        />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          {data.map((item, index) => (
            <Text
            key={Math.random() * 1099900}
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

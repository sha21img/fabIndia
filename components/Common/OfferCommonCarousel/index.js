import {ImageBackground, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
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
                <OfferCard
                  key={Math.random() * 99}
                  UptoText={UptoText}
                  backgroundColor={backgroundColor}
                  data={item.item}
                />
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

import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
// import Carousel from 'react-native-reanimated-carousel';
import Carousel from 'react-native-snap-carousel';
import {Styles} from './styles';
import {getComponentData, imageURL} from '../Helper';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../assets/Colors';
export default function CommonCarousel(props) {
  const {data, width, height, customStyle = {}} = props;
  const newWidth = Dimensions.get('window').width;
  const [imgActive1, setImgActive1] = React.useState(0);
  const renderItem = ({item}) => {
    const newCode = item.landingPage;
    return (
      <TouchableOpacity
        onPress={() => {
          if (newCode.includes('giftcard')) {
          } else {
            props.navigation.navigate('LandingPageSaris_Blouses', {
              code: newCode,
              title: item.title || 'Gift Sets',
              isAdmin2: 'isAdmin2',
            });
          }
        }}
        activeOpacity={0.8}>
        <ImageBackground
          resizeMode="stretch"
          key={Math.random() * 1099900}
          style={{
            flex: 1,
            height: height,
            width: !!item.image ? width : newWidth,
            resizeMode: 'contain',
          }}
          source={{uri: item.image}}></ImageBackground>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View
        style={[
          {alignItems: 'center', backgroundColor: '#FFFFFF'},
          customStyle,
        ]}>
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
            marginTop: 5,
          }}>
          {Array.isArray(data) &&
            data?.map((item, index) => (
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

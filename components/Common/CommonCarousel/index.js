import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
// import Carousel from 'react-native-reanimated-carousel';
import Carousel from 'react-native-snap-carousel';
import {Styles} from './styles';
import {getComponentData, imageURL} from '../Helper';
import LinearGradient from 'react-native-linear-gradient';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';

export default function CommonCarousel({
  data = [],
  width,
  height,
  customStyle = {},
  position,
}) {
  const [imgActive1, setImgActive1] = React.useState(0);
  const [newHighlights, setNewHighlights] = React.useState([]);
  const [compData, setCompData] = React.useState([]);

  const getNewHighlightIds = async () => {
    const filterArray = data.filter(item => {
      return item.position == position;
    });
    const filterSlotId = filterArray[0].components.component[0].uid;
    console.log('slotId-=-=-=', filterSlotId);
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${filterSlotId}&lang=en&curr=INR`,
    );
    setCompData(response.component[0]);
    const bannerId = response.component[0].banners;
    getNewHighlightData(bannerId);
  };
  const getNewHighlightData = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    setNewHighlights(response?.component);
    // console.log("this is a new", response.component)
  };
  // const imageCard = newHighlights.map(item => {
  //   return (
  //     <View key={Math.random() * 987} style={Styles.imageBox}>
  //       <Image
  //         style={Styles.image}
  //         source={{uri: `${imageURL}${item.media.url}`}}
  //       />
  //       <Text style={Styles.imageText}>{item.title}</Text>
  //     </View>
  //   );
  // });
  useEffect(() => {
    getNewHighlightIds();
  }, []);

  const renderItem = ({item}) => {
    return (
      <ImageBackground
        resizeMode="cover"
        key={Math.random() * 1099900}
        style={{
          width: width,
          height: height,
          alignSelf: 'center',
        }}
        // source={{uri: `${imageURL}${item.media.url}`}}
        source={image.ArtistImg1}>
        <LinearGradient
          colors={['rgba(0,0,0,0.4)', 'rgba(255,255,255,0)']}
          style={{
            padding: 20,
            width: width,
            height: height,
          }}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          {/* {item.heading_btn()} */}
        </LinearGradient>
      </ImageBackground>
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

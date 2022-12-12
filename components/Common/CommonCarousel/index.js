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
  const [newHighlights, setNewHighlights] = React.useState([]);

  const getNewHighlightIds = async () => {
    const bannerId = data.banners;
    getNewHighlightData(bannerId);
  };
  const getNewHighlightData = async bannerId => {
    const splitBannerId = bannerId?.split(' ').join(',');
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    setNewHighlights(response?.component);
  };
  // const imageCard = newHighlights.map(item => {
  //   return (
  //     <View key={Math.random() * 987} style={Styles.imageBox}>
  //       <Image
  //         style={Styles.image}
  //          source={{uri:`${imageURL}${item.media.url}`}}
  //       />
  //       <Text style={Styles.imageText}>{item.title}</Text>
  //     </View>
  //   );
  // });
  useEffect(() => {
    getNewHighlightIds();
  }, []);

  const renderItem = ({item}) => {
    const mediaurl1 = item.media.url || item.media.mobile.url;
    const newCode = item.urlLink;
    // console.log('item for product', newCode);
    let splitURL = newCode.split('/');
    splitURL = splitURL[splitURL.length - 1];
    // console.log('splitURL', splitURL);
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('LandingPageSaris_Blouses', {
            code: splitURL,
            title: item.title,
          })
        }>
        <ImageBackground
          resizeMode="stretch"
          key={Math.random() * 1099900}
          style={{
            flex: 1,
            height: height,
            width: !!item.media.url ? width : newWidth,
            resizeMode: 'contain',
          }}
          source={{uri: `${imageURL}${mediaurl1}`}}>
          <LinearGradient
            colors={['rgba(0,0,0,0.4)', 'rgba(255,255,255,0)']}
            style={{
              padding: 20,
              width: width,
              height: height,
            }}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}></LinearGradient>
        </ImageBackground>
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
          data={newHighlights}
          renderItem={renderItem}
          autoPlayInterval={3000}
          sliderWidth={!!newHighlights[0]?.media?.url ? width : newWidth}
          itemWidth={!!newHighlights[0]?.media?.url ? width : newWidth}
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
          {newHighlights.map((item, index) => (
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

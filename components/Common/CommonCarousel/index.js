import {View} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../../../assets/Colors';
import {SliderBox} from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image';

export default function CommonCarousel(props) {
  const {data, width, height, customStyle = {}, isSap = false} = props;
  const [carouselData, setCarouselData] = React.useState([]);

  const getCarauselImages = async () => {
    let images = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      images.push(isSap ? item.image : item?.image?.split('?')[0]);
    }
    setCarouselData(images);
  };

  useEffect(() => {
    if (props?.data?.length) {
      getCarauselImages();
    }
  }, [props.data]);

  const onImagePressed = curr => {
    const filteredObj = data.find((item, index) => {
      return curr == index;
    });

    const newCode = filteredObj.landingPage;
    const title = filteredObj.title;
    if (title == 'Gift Cards') {
      console.log('adsfasdfsdafasdf');
      // props.navigation.navigate('GiftCard');
      props.navigation.navigate('MyAccount', {
        screen: 'GiftCard',
      });
    } else if (title == 'IDS') {
      props.navigation.navigate('InteriorCatagory');
    } else {
      props.navigation.navigate('LandingPageSaris_Blouses', {
        code: newCode,
        title: filteredObj.title,
        isAdmin2: 'isAdmin2',
      });
    }
  };
  return (
    <View style={{marginBottom: 30, marginTop: 10}}>
      <SliderBox
        // circleLoop={true}
        sliderBoxHeight={height}
        images={carouselData}
        ImageComponent={FastImage}
        inactiveDotColor="#90A4AE"
        dotColor={Colors.primarycolor}
        // resizeMode={"contain"}
        ImageComponentStyle={{width: width, height: height}}
        pagingEnabled={Platform.select({android: true})}
        dotStyle={{
          top: 25,
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: -10,
        }}
        activeOpacity={0.95}
        onCurrentImagePressed={curr => onImagePressed(curr)}
      />
    </View>
  );
}

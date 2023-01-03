import {View} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../../../assets/Colors';
import {useNavigation} from '@react-navigation/native';
import {SliderBox} from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image';

export default function TopSwiper(props) {
  const navigation = useNavigation();
  const {customStyle = {}, data = {}, isAdmin2 = ''} = props;
  const [carouselData, setCarouselData] = React.useState([]);

  const getCarauselIds = async () => {
    let images = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      images.push(item?.image?.split('?')[0]);
    }
    setCarouselData(images);
  };

  useEffect(() => {
    if (props?.data?.length) {
      getCarauselIds();
    }
  }, [props.data]);

  const onCurrentImagePressed = curr => {
    const filteredObj = data.find((item, index) => {
      return curr == index;
    });
    if (isAdmin2 == 'isAdmin2') {
      const urlCode = filteredObj.landingPage;
      const title = filteredObj.title;
      navigation.navigate('LandingPageSaris_Blouses', {
        code: urlCode,
        title: title,
        isAdmin2: 'isAdmin2',
      });
    } else {
      const newCode = filteredObj.urlLink;
      let splitURL = newCode.split('/');
      splitURL = splitURL[splitURL.length - 1];
      let a = splitURL.split('?');
      const newId = {
        code: a[a.length - 1].includes('query') ? a[1] : a[0],
        status: a[a.length - 1].includes('query'),
        title: filteredObj.title || filteredObj.media.mobile.altText,
      };
      navigation.navigate('LandingPageSaris_Blouses', newId);
    }
  };

  return (
    <View style={{marginBottom: 20, height: 250}}>
      <SliderBox
        onCurrentImagePressed={curr => onCurrentImagePressed(curr)}
        // circleLoop={true}
        sliderBoxHeight={250}
        images={carouselData}
        ImageComponent={FastImage}
        inactiveDotColor="#90A4AE"
        dotColor={Colors.primarycolor}
        // resizeMode={"contain"}
        ImageComponentStyle={{width: '100%', height: '100%'}}
        pagingEnabled={Platform.select({android: true})}
        dotStyle={{
          top: 25,
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: -10,
        }}
      />
    </View>
  );
}

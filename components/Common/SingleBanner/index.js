import {
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getComponentData} from '../Helper';
import {image} from '../../../assets/images';
import {Colors} from '../../../assets/Colors';

const width = Dimensions.get('window').width;
export default function SingleBanner(props) {
  const {data = {}, customStyle = {}, isAdmin2 = ''} = props;
  const [bannerData, setBannerData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const newCode = data.urlLink;
  console.log(
    'women category data////////////////////////////////////////////////',
    data,
  );
  // let splitURL = newCode.split('/');
  // splitURL = splitURL[splitURL.length - 1];
  // useEffect(() => {
  //   getBannerIds();
  // }, []);
  // const getBannerIds = async () => {
  //   const bannerId = data.banners;
  //   getBannerData(bannerId);
  // };
  // const getBannerData = async bannerId => {
  //   const splitBannerId = bannerId.split(' ').join(',');

  //   const response = await getComponentData(
  //     `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
  //   );

  //   setBannerData(response.component[0]);
  //   setIsLoading(true);

  //   //   setCarouselData(response.component);
  // };
  const defaultStyle = {
    marginVertical: 20,
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[defaultStyle, customStyle]}
        onPress={() => {
          // const newCode = bannerData.urlLink;
          // let splitURL = newCode.split('/');
          // splitURL = splitURL[splitURL.length - 1];
          // console.log(
          //   'singl eanner splitURL//////////////////////====?????????????????????????????????????????????????????????',
          //   splitURL,
          // );
          // if (data.landingPage == 'interior-design') {
          //   console.log('ijih');
          // } else {
          props.navigation.navigate('LandingPageSaris_Blouses', {
            code: data.landingPage,
            title: data.title,
            isAdmin2: isAdmin2,
          });
          // }
        }}>
        <Image
          resizeMode="stretch"
          //   source={image.ArtistImg1}
          source={{
            uri: data.image,
          }}
          style={{height: 213, width: width}}
        />
      </TouchableOpacity>
    </>
  );
}

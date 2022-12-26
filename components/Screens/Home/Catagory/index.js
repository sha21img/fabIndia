import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {getComponentData, imageURL} from '../../../Common/Helper';
import {image} from '../../../../assets/images';
import {hasSpaces} from '../../../../constant';

export default function Catagory({data}) {
  console.log('thisthishtishtishs TopSwiper', data);
  const [categoryData, setCategoryData] = useState([]);
  const [categoryDataArray, setCategoryDataArray] = useState([]);
  const [page, setPage] = useState(0);
  const width = Dimensions.get('window').width;

  // const getBannerIds = () => {
  //   const bannerId = data.cmsLinks;
  //   const splitBannerId = bannerId.split(' ').join(',');
  //   getCategoryData(splitBannerId);
  // };
  // const getCategoryData = async bannerId => {
  //   const response = await getComponentData(
  //     `cms/components?fields=DEFAULT&currentPage=${page}&pageSize=5&componentIds=${bannerId}&lang=en&curr=INR`,
  //   );
  //   setCategoryDataArray(response);

  //   console.log('response for category uaing pagination', response);
  //   if (categoryData.length) {
  //     setCategoryData(prev => [...categoryData, ...response.component]);
  //   } else {
  //     setCategoryData(response.component);
  //   }
  // };
  // useEffect(() => {
  //   getBannerIds();
  // }, [page]);
  // const endReach = () => {
  //   if (categoryDataArray?.pagination?.totalPages > page) {
  //     setPage(page + 1);

  //     // getBannerIds();
  //   }
  // };
  const navigation = useNavigation();
  const catagory = item => {
    console.log('this sis category single data', item);
    return (
      <>
        <View style={Styles.mainContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate(item.item.title, {title: item.item.title})
            }
            style={Styles.catagory}>
            <Image
              source={{uri: item.item.image}}
              style={Styles.imgDim}></Image>
          </TouchableOpacity>
          <Text style={Styles.catagoryText}>{item.item.title}</Text>
        </View>
      </>
      // <TouchableOpacity
      //   activeOpacity={0.8}
      //   onPress={() => navigation.navigate(item.item.name)}>
      /* <ImageBackground
          resizeMode="cover"
          source={image.homedecortable}
          style={{
            height: 70,
            width: 70,
            overflow: 'hidden',
            backgroundColor: 'rgba(144, 50, 51, 0.5)',
            marginRight: 15,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
          }}>
          <Text
            style={[
              Styles.catagoryText,
            ]}>
            {item.item.name}
          </Text>
        </ImageBackground> */

      // </TouchableOpacity>
    );
  };
  return (
    // <View style={Styles.container}>
    <FlatList
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 5,
        paddingVertical: 7,
      }}
      data={data}
      horizontal
      // onEndReached={endReach}
      showsHorizontalScrollIndicator={false}
      onEndReachedThreshold={0.1}
      keyExtractor={(item, index) => index}
      renderItem={catagory}
      // contentContainerStyle={{width: width}}
    />
    // </View>
  );
}

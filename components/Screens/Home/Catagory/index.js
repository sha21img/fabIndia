import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {getComponentData, imageURL} from '../../../Common/Helper';
import {image} from '../../../../assets/images';
import {hasSpaces} from '../../../../constant';

export default function Catagory({data}) {
  const [categoryData, setCategoryData] = useState([]);
  const [categoryDataArray, setCategoryDataArray] = useState([]);
  const [page, setPage] = useState(0);

  const getBannerIds = () => {
    const bannerId = data.cmsLinks;
    const splitBannerId = bannerId.split(' ').join(',');
    getCategoryData(splitBannerId);
  };
  const getCategoryData = async bannerId => {
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=${page}&pageSize=5&componentIds=${bannerId}&lang=en&curr=INR`,
    );
    setPage(page + 1);
    setCategoryDataArray(response);
    if (categoryData.length) {
      setCategoryData(prev => [...prev, ...response.component]);
    } else {
      setCategoryData(response.component);
    }
  };
  useEffect(() => {
    getBannerIds();
  }, []);
  const endReach = () => {
    if (categoryDataArray?.pagination?.totalPages > page) {
      getBannerIds();
    }
  };
  const navigation = useNavigation();
  const catagory = item => {
    return (
      <>
        <View style={Styles.mainContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(item.item.name)}
            style={Styles.catagory}>
            <Image source={image.ArtistImg3} style={Styles.imgDim}></Image>
          </TouchableOpacity>
          <Text style={[Styles.catagoryText, {color: item.item.textColor}]}>
            {item.item.name}
          </Text>
        </View>
      </>
    );
  };
  return (
    <View style={Styles.container}>
      <FlatList
        horizontal
        data={categoryData}
        onEndReached={endReach}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        keyExtractor={(item, index) => index}
        renderItem={catagory}
      />
    </View>
  );
}

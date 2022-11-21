import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {getComponentData, imageURL} from '../../../Common/Helper';
import {image} from '../../../../assets/images';
import { hasSpaces } from '../../../../constant';

export default function Catagory({data}) {
  const [categoryData, setCategoryData] = React.useState([]);
  const getBannerIds = async () => {
    const bannerId = data.cmsLinks;
    getCategoryData(bannerId);
  };
  const getCategoryData = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    
    setCategoryData(response.component);
    console.log(response, 'responseresponse');
  };
  useEffect(() => {
    getBannerIds();
  }, []);
  const navigation = useNavigation();
  const catagory = categoryData.map(item => {
    return (
      <>
        <View style={Styles.mainContainer}>
          <TouchableOpacity
            // onPress={() => navigation.navigate(item.linkName)}
            style={Styles.catagory}>
            <Image source={image.ArtistImg3} style={Styles.imgDim}></Image>
          </TouchableOpacity>
          <Text style={[Styles.catagoryText, {color: item.textColor}]}>
            {item.linkName}
          </Text>
        </View>
      </>
    );
  });
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={Styles.container}>
      {catagory}
    </ScrollView>
  );
}

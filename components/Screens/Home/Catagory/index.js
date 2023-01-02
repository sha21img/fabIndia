import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import React from 'react';
import { Styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

export default function Catagory({ data }) {
  const navigation = useNavigation();

  const catagory = item => {
    return (
      <View key={item?.item?._id} style={Styles.mainContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate(item.item.title, { title: item.item.title })
          }>

          <FastImage
            style={Styles.imgDim}
            source={{
              uri: item?.item?.image?.split('?')[0],
              priority: FastImage.priority.normal
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
        <Text style={Styles.catagoryText}>{item.item.title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 5,
        paddingVertical: 7,
      }}
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item?.item?._id}
      renderItem={catagory}
    />
  );
}

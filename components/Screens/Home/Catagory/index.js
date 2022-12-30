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
import React from 'react';
import {Styles} from './styles';
import {useNavigation} from '@react-navigation/native';
export default function Catagory({data}) {
  const navigation = useNavigation();
  const catagory = item => {
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
      onEndReachedThreshold={0.1}
      keyExtractor={(item, index) => index}
      renderItem={catagory}
    />
  );
}

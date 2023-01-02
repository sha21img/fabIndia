import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Styles } from './styles';
import { hasSpaces } from '../../../constant';
import FastImage from 'react-native-fast-image';

export default function NewHighlights(props) {
  const { data = {}, customStyle = '' } = props;

  const imageCard = item => {
    const newCode = item.item.landingPage;
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('LandingPageSaris_Blouses', {
            code: newCode,
            title: item.item.title,
            isAdmin2: 'isAdmin2',
          })
        }
        activeOpacity={0.8}
        key={item?.item?._id}
        style={Styles.imageBox}>

        <FastImage
          style={Styles.image}
          source={{
            uri: item?.item?.image?.split('?')[0],
            priority: FastImage.priority.normal
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={Styles.imageText}>{item.item.title}</Text>
      </TouchableOpacity>
    );
  }

  const check = hasSpaces(data[0]?.categoryName);

  return (
    <View style={[Styles.container, customStyle]}>
      <View style={Styles.headingBox}>
        <Text style={Styles.headingText}>{check ? check[0] : null}</Text>
        <Text style={Styles.headingTitle}>{check ? check[1] : null}</Text>
      </View>
      <View style={Styles.imageContainer}>
        <FlatList
          horizontal
          data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item?.item?._id}
          renderItem={imageCard}
        />
      </View>
    </View>
  );
}

import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import {imageURL} from '../Helper';

export default function KidsNameCard(props) {
  const {item, height, width} = props;
  console.log('qqqqqqqqqqqq', item);
  const newSplitId = item.urlLink.split('/')[2];
  console.log('newSplitIdaa', newSplitId);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() =>
        props.navigation.navigate('LandingPageSaris_Blouses', {
          status: false,
          title: newSplitId,
          code: newSplitId,
        })
      }>
      <Image
        source={{uri: imageURL + item.media.url}}
        style={{
          width: height,
          height: width,
        }}
      />
    </TouchableOpacity>
    /* <ImageBackground
      key={Math.random() * 777266}
      resizeMode="cover"
      source={{uri: imageURL + item.media.url}}
      style={{
        width: height,
        height: width,
        backgroundColor: Colors.primarycolor,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 7,
      }}>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 20,
          lineHeight: 27,
          color: 'white',
        }}>
        {item.title}
      </Text>
    </ImageBackground> */
  );
}

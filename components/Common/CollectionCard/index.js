import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { Styles } from './style';

const CollectionCard = ({item}) => {
  return (
    // <ImageBackground
    //       resizeMode="cover"
    //       style={Styles.container}
    //       source={item.image}>
    <>
          <View style={Styles.headingContainer}>
            <Text style={Styles.heading}>{item.heading}</Text>
            <Text style={Styles.text}>{item.text}</Text>
          </View>
          <TouchableOpacity  style={Styles.exploreNowBox}>
            <Text style={Styles.exploreNowText}>Explore now</Text>
          </TouchableOpacity>
          </>
        // </ImageBackground>
  );
};
export default CollectionCard;

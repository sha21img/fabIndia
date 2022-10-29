import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from './style';

const CollectionCard = ({item}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={Styles.container}
      source={item.image}>
        <LinearGradient
          colors={[item.color,'transparent']}
          start={{ x: 0.5, y: 0.5}}
          style={{
            position: 'absolute',
            top: 0,
            height: 140,
            width: '100%',
          }}></LinearGradient>
      <View style={Styles.headingContainer}>
        <Text style={Styles.heading}>{item.heading}</Text>
        <Text style={Styles.text}>{item.text}</Text>
      </View>
      <TouchableOpacity style={Styles.exploreNowBox}>
        <Text style={Styles.exploreNowText}>Shop now</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default CollectionCard;

import {View, Text, ImageBackground, Image, Dimensions} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {image} from '../../../../../../assets/images';

const dimension = Dimensions.get('window');

const TopGallary = () => {
  return (
    <View style={Styles.imagecontainer}>
      <ImageBackground
        key={Math.random() * 6776}
        resizeMode="cover"
        style={{
          height: 212,
          width: dimension.width,
        }}
        source={image.BeautyProduct9}>
        <View style={[Styles.txtbox, {top: 15}]}>
          <Text style={Styles.imagetxt}>Skincare routine</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        key={Math.random() * 6776}
        resizeMode="cover"
        style={{
          height: 212,
          width: dimension.width / 1.5,
        }}
        source={image.BeautyProduct10}>
        <View style={[Styles.txtbox, {bottom: 15}]}>
          <Text style={Styles.imagetxt}>Lip service</Text>
        </View>
      </ImageBackground>
      <ImageBackground
        key={Math.random() * 6776}
        resizeMode="cover"
        style={{
          height: 212,
          width: dimension.width / 3,
        }}
        source={image.BeautyProduct11}>
        <View style={[Styles.txtbox, {bottom: 15}]}>
          <Text style={Styles.imagetxt}>Summer specials</Text>
        </View>
      </ImageBackground>
      <View style={Styles.categoryContainer}>
        <Image
          source={image.whitelogo}
          style={Styles.logo}
          resizeMode="contain"
        />
        <Text style={Styles.categoryContainerText}>beauty</Text>
      </View>
    </View>
  );
};

export default TopGallary;

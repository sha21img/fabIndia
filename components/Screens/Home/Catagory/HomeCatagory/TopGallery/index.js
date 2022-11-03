import {View, Text, ImageBackground, Image, Dimensions} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import Fonts from '../../../../../../assets/fonts';
import {image} from '../../../../../../assets/images';

const dimension = Dimensions.get('window');

const TopGallary = () => {
  return (
    <View style={Styles.imagecontainer}>
      <ImageBackground
        key={Math.random() * 6776}
        resizeMode="cover"
        style={{
          height: 484,
          width: dimension.width / 3,
        }}
        source={image.HomeLiner1}>
        <View style={[Styles.txtbox, {top: 15}]}>
          <Text style={Styles.imagetxt}>Morning cuppa</Text>
        </View>
      </ImageBackground>
      <View>
        <ImageBackground
          key={Math.random() * 6776}
          resizeMode="cover"
          style={{
            height: 242,
            width: dimension.width / 1.5,
          }}
          source={image.HomeLiner2}>
          <View style={[Styles.txtbox, {top: 15}]}>
            <Text style={Styles.imagetxt}>Comfort all day</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          key={Math.random() * 6776}
          resizeMode="cover"
          style={{
            height: 242,
            width: dimension.width / 1.5,
          }}
          source={image.HomeLiner3}>
          <View style={[Styles.txtbox, {bottom: 15}]}>
            <Text style={Styles.imagetxt}>Make a splash</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={Styles.categoryContainer}>
        <Image
          source={image.whitelogo}
          style={Styles.logo}
          resizeMode="contain"
        />
        <Text style={Styles.categoryContainerText}>home linen</Text>
      </View>
    </View>
  );
};

export default TopGallary;

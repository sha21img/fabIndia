import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {image} from '../../../../../../assets/images';
import {Styles} from './styles';
import Fonts from '../../../../../../assets/fonts';
const imageData = [
  {
    image: image.rise,
    title: 'Men’s Kurtas',
  },
  {
    image: image.fitness,
    title: 'Furniture',
  },
  {
    image: image.meal,
    title: 'Women’s Kurtas',
  },
  {
    image: image.lounging,
    title: 'Home Linen',
  },
];
const TopGallery = () => {
  return (
    <View style={Styles.imagecontainer}>
      {imageData.map((item, i) => {
        return (
          <ImageBackground
            key={Math.random() * 6776}
            resizeMode="cover"
            style={Styles.backgroundimg}
            source={item.image}>
            <View
              style={[
                Styles.txtbox,
                {top: i < 2 ? 15 : null, bottom: i >= 2 ? 15 : null},
              ]}>
              <Text style={Styles.imagetxt}>{item.title}</Text>
            </View>
          </ImageBackground>
        );
      })}
      <View style={Styles.topbox}>
        <Text style={Styles.toptxt}>A day in the life of a</Text>
        <View style={Styles.imagebox}>
          <Image
            source={image.whitelogo}
            style={Styles.imagedimension}
            resizeMode="contain"
          />
          <Text style={Styles.mantxt}>man</Text>
        </View>
      </View>
    </View>
  );
};

export default TopGallery;

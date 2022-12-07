import {View, Text, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../../../assets/Colors';
import {image} from '../../../../assets/images';
import {Styles} from './styles';
import VideoP from './VideoP';

const artImageData = [
  {banner: image.ArtistImg1},
  {banner: image.ArtistImg2},
  {banner: image.ArtistImg3},
  {banner: image.ArtistImg4},
];

export default function Art_Artist() {
  return (
    <View style={Styles.container}>
      <View style={Styles.backgroundBox} />
      <View style={Styles.headingBox}>
        <Text style={Styles.heading}>
          The <Text style={Styles.heading1}>art & the artists</Text>
        </Text>

        <Text style={Styles.description}>
          The artisans behind your favourite Fabindia pieces, and the stories
          they have to tell.
        </Text>
      </View>
      <VideoP />
      {/* <View style={Styles.imageBox}>
        {artImageData.map((item, i) => {
          return (
            <Image
              key={Math.random() * 10}
              style={Styles.image}
              source={item.banner}
            />
          );
        })}
      </View> */}
    </View>
  );
}

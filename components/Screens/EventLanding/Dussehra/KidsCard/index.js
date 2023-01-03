import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Styles from './style';
import {image} from '../../../../../assets/images';

export default function KidsCard() {
  return (
    <View style={Styles.container}>
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: '#5CB1B8',
          borderRadius: 200,
          position: 'absolute',
          right: -20,
          top: 0,
        }}
      />
      <View style={Styles.textBox}>
        <View style={Styles.heading}>
          <Text style={Styles.headingText}>Kids</Text>
        </View>
        <Text style={Styles.description}>
          Get your kids festive ready with our wide range of traditional
          apparel!
        </Text>
      </View>
      <View style={Styles.imageContainer1}>
        <ImageBackground source={image.ArtistImg1} style={{height: 137}}>
          <View style={Styles.titleBox}>
            <Text style={Styles.title}>Infants</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={Styles.imageContainer}>
        <ImageBackground source={image.kidlazing} style={Styles.imageDim}>
          <View style={Styles.titleBox}>
            <Text style={Styles.title}>Infants</Text>
          </View>
        </ImageBackground>
        <ImageBackground source={image.kidplaying} style={Styles.imageDim}>
          <View style={Styles.titleBox}>
            <Text style={Styles.title}>Infants</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

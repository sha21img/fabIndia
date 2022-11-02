import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {image} from '../../../../../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../../../../../assets/fonts';
export default function HorizontalCard({item = {}}) {
  return (
    <TouchableOpacity style={Styles.marinContainer}>
      <ImageBackground
        key={Math.random() * 1099900}
        source={item.banner}
        style={Styles.container}>
        <LinearGradient
          colors={['transparent', '#66553B']}
          style={Styles.textBox}>
          <Text style={Styles.text}>{item.title}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  marinContainer: {
    marginRight: 10,
  },
  container: {
    width: 330,
    height: 240,
    elevation: 5,
    backgroundColor: 'white',
  },
  textBox: {
    marginTop: 'auto',
  },
  text: {
    paddingTop: 30,
    padding: 12,
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    lineHeight: 21,
    color: 'white',
  },
});

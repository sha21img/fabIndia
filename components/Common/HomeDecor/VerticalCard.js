import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../../assets/fonts';
export default function VerticalCard({item = {}, index = ''}) {
  return (
    <>
      <View style={{marginRight: 10}}>
        {index % 2 != 0 ? <View style={Styles.topBox} /> : null}
        <TouchableOpacity>
          <ImageBackground
            key={Math.random() * 120}
            source={item.banner}
            style={Styles.container}>
            <LinearGradient
              colors={['transparent', '#66553B']}
              style={Styles.textBox}>
              <Text style={Styles.text}>{item.title}</Text>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
        {index % 2 == 0 ? <View style={Styles.bottomBox} /> : null}
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: 190,
    height: 265,
    elevation: 3,
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
  topBox: {
    width: '100%',
    height: 14,
    backgroundColor: '#D0A7AC',
    marginBottom: 10,
  },
  bottomBox: {
    width: '100%',
    height: 14,
    backgroundColor: '#D0A7AC',
    marginTop: 10,
  },
});

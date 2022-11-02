import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {image} from '../../../assets/images';
import {Styles} from './style';

const CornerGallery = ({header, subHeader, data = []}) => {
  const Cards = data.map((item, index) => {
    return (
      <ImageBackground
        key={Math.random() * 100000}
        source={item.image}
        style={[
          Styles.CardContainer,
          {
            // marginTop: index % 2 == 0 && index != 0 && index % 4 != 0 ? 33 : 15,
            height: (index+1) % 3==0 && index!=1 ? 603 : 352,
            width:(index+1) % 3==0 && index!=1 ? 413 :230
          },
        ]}>
        <LinearGradient
          colors={['transparent', '#925D4D']}
          style={Styles.CardGradient}>
          <Text style={Styles.CardFooter}>{item.name}</Text>
        </LinearGradient>
      </ImageBackground>
    );
  });
  return (
    <View style={{height: 845}}>
      <ImageBackground
        source={image.furniture1}
        style={{height: 527, position: 'relative'}}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.48)', 'rgba(196, 196, 196, 0)']}
          style={{paddingTop: 48, paddingLeft: 15, height: 161}}>
          {header()}
          {subHeader()}
        </LinearGradient>
        <View style={{position: 'absolute', top: 120}}>
          <ScrollView
            horizontal
            contentContainerStyle={{
              height: 734,
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            {Cards}
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
export default CornerGallery;

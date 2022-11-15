import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import Styles from './style';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeCard({customStyle}) {
  const mainbgimage = {
    uri: 'https://img.freepik.com/free-photo/clapboard-wall_1249-94.jpg?w=740&t=st=1668255513~exp=1668256113~hmac=cce4b0c571071c744f650f60c65de6c12b83adab4f87632fea36fb43e160991d',
  };
  const largeimage = {
    uri: 'https://img.freepik.com/premium-photo/bright-pink-ranunculus-flowers-glass-vase-table_169478-1104.jpg',
  };
  const SmallTopImage = {
    uri: 'https://img.freepik.com/premium-photo/woman-s-hands-packing-knitted-sweater-as-present-dark-wooden-table_169478-181.jpg',
  };
  const smallBottomImage = {
    uri: 'https://img.freepik.com/free-photo/young-woman-wearing-winter-clothes_273609-22209.jpg',
  };
  return (
    <View style={customStyle}>
      <View style={Styles.textContainer}>
        <View style={Styles.headingBox}>
          <Text style={Styles.title}>Home</Text>
        </View>
        <View style={Styles.descriptionBox}>
          <Text style={Styles.detail}>Be Diwali-Ready!</Text>
          <Text style={Styles.detail1}>
            This Festive Season make your home look special with a new furniture
            piece
          </Text>
        </View>
      </View>
      <ImageBackground
        source={mainbgimage}
        resizeMode="cover"
        style={Styles.mainImage}>
        <View style={{marginHorizontal: 5}}>
          <ImageBackground
            source={SmallTopImage}
            resizeMode="cover"
            style={{
              height: 157,
              width: 160,
              marginBottom: 5,
            }}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.7)']}
              style={{marginTop: 'auto'}}>
              <Text style={Styles.cardText}>Home Linen</Text>
            </LinearGradient>
          </ImageBackground>
          <ImageBackground
            source={smallBottomImage}
            resizeMode="cover"
            style={{
              height: 157,
              marginTop: 5,
              width: 160,
            }}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.7)']}
              style={{marginTop: 'auto'}}>
              <Text style={Styles.cardText}>Home Decor</Text>
            </LinearGradient>
          </ImageBackground>
        </View>
        <View style={{marginHorizontal: 5}}>
          <ImageBackground
            source={largeimage}
            resizeMode="cover"
            style={{
              height: 325,
              width: 160,
            }}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.7)']}
              style={{marginTop: 'auto'}}>
              <Text style={Styles.cardText}>Furniture</Text>
            </LinearGradient>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

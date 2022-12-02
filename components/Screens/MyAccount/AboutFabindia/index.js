import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
import {image} from '../../../../assets/images';
import {Styles} from './style';

const AboutFabindia = navigation => {
  return (
    <ScrollView style={{flex: 1}}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigation.navigate('AboutUs')}>
        <ImageBackground source={image.Oldbanner} style={{height: 200}}>
          <View style={Styles.BannerTape}>
            <Text style={Styles.BannerTapeText}>About Us</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <View style={Styles.SubBannerTape}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigation.navigate('Philosophy')}>
          <ImageBackground
            source={image.ArtistImg1}
            style={{
              height: Dimensions.get('window').width / 2 - 25,
              width: Dimensions.get('window').width / 2 - 25,
              marginBottom: 13,
            }}>
            <View style={Styles.BannerTape}>
              <Text style={[Styles.BannerTapeText, {fontSize: 15}]}>
                Our philosophy
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigation.navigate('Certification')}>
          <ImageBackground
            source={image.VilageWomen}
            style={{
              height: Dimensions.get('window').width / 2 - 25,
              width: Dimensions.get('window').width / 2 - 25,
              marginBottom: 13,
            }}>
            <View style={Styles.BannerTape}>
              <Text style={[Styles.BannerTapeText, {fontSize: 15}]}>
                Organic Certification
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigation.navigate('FabIndiaSchools')}>
          <ImageBackground
            source={image.Workers}
            style={{
              height: Dimensions.get('window').width / 2 - 25,
              width: Dimensions.get('window').width / 2 - 25,
              marginBottom: 13,
            }}>
            <View style={Styles.BannerTape}>
              <Text style={[Styles.BannerTapeText, {fontSize: 15}]}>
                The Fabindia Schools
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigation.navigate('Years60')}>
          <ImageBackground
            source={image.FabIndiaSubLogo}
            style={{
              height: Dimensions.get('window').width / 2 - 25,
              width: Dimensions.get('window').width / 2 - 25,
              marginBottom: 13,
            }}></ImageBackground>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AboutFabindia;

import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  Stylesheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import Otp from './Otp';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';

export default function Login_Register(props) {
  const googleIcon = {
    uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
  };
  const facebookIcon = {
    uri: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png',
  };

  const facebookLoginHandler = () => {};
  const googleLoginHandler = () => {};
  const loginWithMobileHandler = () => {
    props.navigation.navigate('LoginMobile');
  };
  const loginWithEmailHandler = () => {
    props.navigation.navigate('Login');
  };
  const resisterHandler = () => {
    props.navigation.navigate('Register');
  };
  const login = () => {
    props.navigation.navigate('Login');
  };
  return (
    <ImageBackground
      source={image.loginBg}
      resizeMode="cover"
      style={Styles.container}>
      <Image
        style={{
          width: 140,
          height: 150,
          top: 0,
          position: 'absolute',
          resizeMode: 'contain',
          right: 0,
          transform: [{rotate: '0deg'}, {scaleY: -1}],
        }}
        source={image.fabfamilyflower}
      />
      <Image
        style={{
          width: 140,
          height: 150,
          bottom: 0,
          position: 'absolute',
          resizeMode: 'contain',
          left: 0,
          transform: [{rotate: '0deg'}, {scaleX: -1}],
        }}
        source={image.fabfamilyflower}
      />
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 26,
          lineHeight: 24,
          color: 'white',
          paddingHorizontal: 20,
        }}>
        Hello!
      </Text>
      <Text style={Styles.titleText}>
        Log in or register to manage your orders
      </Text>
      <View style={Styles.buttonContainer}>
        {/* <TouchableOpacity
          style={Styles.button}
          onPress={() => loginWithMobileHandler()}>
          <Text style={Styles.loginText}>Log in with moble no.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.button}
          onPress={() => loginWithEmailHandler()}>
          <Text style={Styles.loginText}>Log in with email</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={Styles.button} onPress={() => login()}>
          <Text style={Styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.registerButton}
          onPress={() => resisterHandler()}>
          <Text style={Styles.registerText}>Register</Text>
        </TouchableOpacity>
        <View style={Styles.horizontalContainer}>
          <View style={Styles.horizontalLine} />
          <View>
            <Text style={Styles.orText}>or</Text>
          </View>
          <View style={Styles.iconContainer} />
        </View>
        <View style={Styles.socialIconContainer}>
          <TouchableOpacity onPress={() => facebookLoginHandler()}>
            <Image source={facebookIcon} style={Styles.facebookIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => googleLoginHandler()}>
            <Image source={googleIcon} style={Styles.googleIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

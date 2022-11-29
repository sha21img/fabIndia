import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import {Styles} from './styles';
import CommonButton from '../../../../Common/CommonButton';
import {Colors} from '../../../../../assets/Colors';
import {image} from '../../../../../assets/images';
import LinearGradient from 'react-native-linear-gradient';

function AboutFabFamily() {
  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        {/* <Image
          style={Styles.stretch}
          source={require('../../images/image1.png')}
        /> */}

        <ImageBackground
          resizeMode="cover"
          source={image.fabfamily}
          style={{
            height: 210,
            width: '100%',
            overflow: 'hidden',
            backgroundColor: 'rgba(144, 50, 51, 0.5)',
          }}>
          <LinearGradient
            colors={['rgba(144, 50, 51, 0.4)', 'rgba(144, 50, 51, 0.4)']}
            style={{height: 210}}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}></LinearGradient>
          <Image
            source={image.fabfamilyflower}
            style={{position: 'absolute', right: 0, bottom: 0}}
          />
        </ImageBackground>
        <View style={Styles.txtView}>
          <Text style={Styles.txtOne}>
            Join our exclusive membership program that opens up a world of
            experiences and rewards.
          </Text>
          <Text style={Styles.txtTwo}>
            It is a close-knit circle of those of us who share love and
            admiration for all things Indian. We value the rich cultural
            heritage that seeps from every corner of our country, as well as the
            progressive values that we hold dear, regardless of which part of
            the world we are in.
          </Text>
          <Text style={Styles.txtTwo}>
            The Fabfamily program has 5 tiers, with enriched benefits at every
            step of your journey. You can earn points on all your spends in
            store or online, and use them for shopping with Fabindia or to
            redeem hand-picked experiences at our selected list of partners.
          </Text>
          <Text style={Styles.txtTwo}>
            This program is our way of saying “Thank you” to all of you - for
            helping us craft a brand that is loved and admired by many; for
            standing by us for over 60 years of our existence, and for believing
            in the things that truly matter – this country and its people.
          </Text>
        </View>
        <View style={Styles.circleView}>
          <View style={Styles.circleInnerView}>
            <View style={Styles.circle}>
              <Text style={Styles.circleTxt}>Enrol</Text>
            </View>
            <Text style={Styles.circleBottomTxt}>
              Membership at Fabindia is simpleJust share your mobile number
              while shopping at stores or online.
            </Text>
          </View>
          <View style={Styles.lineView}></View>

          <View style={Styles.circleInnerView}>
            <View style={Styles.circle}>
              <Text style={Styles.circleTxt}>Earn</Text>
            </View>
            <Text style={Styles.circleBottomTxt}>
              Shop our range at Fabindia stores or online and earn points on
              every transaction. Earn and save as you go
            </Text>
          </View>
          <View style={Styles.lineView}></View>

          <View style={Styles.circleInnerView}>
            <View style={Styles.circle}>
              <Text style={Styles.circleTxt}>Redeem</Text>
            </View>
            <Text style={Styles.circleBottomTxt}>
              Pay by points to shop or enjoy a unique experience at any of our
              partners across India.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={Styles.btnbox}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Become a member"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
}

export default AboutFabFamily;

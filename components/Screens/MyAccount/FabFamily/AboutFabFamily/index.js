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

        {/* <ImageBackground
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
        </ImageBackground> */}
        <View style={Styles.txtView}>
          <Text style={Styles.txtOne}>
            AN EXCLUSIVE MEMBERSHIP PROGRAM THAT OPENS UP A WORLD of REWARDS.
          </Text>
          <Text style={Styles.txtTwo}>
            Fabfamily is a close-knit circle of those of us who cherish the rich
            cultural heritage of our country as well as the progressive values
            that we all hold dear.
          </Text>
          <Text style={Styles.txtTwo}>
            AN ALLIANCE OF OVER 5 MILLION conscious consumers and a growing
            number of purpose-driven businesses & organizations that are a part
            of our Shared Values Community.
          </Text>
          <Text style={Styles.txtTwo}>
            FABFAMILY IS OUR WAY OF SAYING “THANK YOU us craft a brand that is
            loved and admired by many, for standing by us for over 60 years of
            our existence, and for believing in the things that truly matter:
            this planet and its people.
          </Text>
        </View>
        <View style={Styles.circleView}>
          <View style={Styles.circleInnerView}>
            <View style={Styles.circle}>
              <Text style={Styles.circleTxt}>Enroll</Text>
            </View>
            <Text style={Styles.circleBottomTxt}>
              BECOME A MEMBER AND GET ACCESS TO EXCLUSIVE IN STORE AND ONLINE
              OFFERS
            </Text>
          </View>
          <View style={Styles.lineView}></View>

          <View style={Styles.circleInnerView}>
            <View style={Styles.circle}>
              <Text style={Styles.circleTxt}>Earn</Text>
            </View>
            <Text style={Styles.circleBottomTxt}>
              SHOP ACROSS OUR STORES OR ONLINE AND EARN FABCOINS ON YOUR
              TRANSACTIONS.
            </Text>
          </View>
          <View style={Styles.lineView}></View>

          <View style={Styles.circleInnerView}>
            <View style={Styles.circle}>
              <Text style={Styles.circleTxt}>Enjoy</Text>
            </View>
            <Text style={Styles.circleBottomTxt}>
              SPEND YOUR FABCOINS ON MORE SHOPPING OR WITH OUR REWARDS PARTNERS.
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* <View style={Styles.btnbox}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Become a member"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View> */}
    </>
  );
}

export default AboutFabFamily;

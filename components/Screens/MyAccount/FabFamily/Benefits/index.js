import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import {Styles} from './styles';
import {image} from '../../../../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import CommonButton from '../../../../Common/CommonButton';
import {Colors} from '../../../../../assets/Colors';

function Benefits() {
  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        <View style={Styles.txtMainView}>
          <Text style={Styles.txtOne}>
            We value every occasion where we interact with you. Your thoughts
            and feedback matter as do your friends and family. Earn Bonous
            points for each of below actions.
          </Text>
          <Text style={Styles.txtTwo}>
            • Up to 7 points{' '}
            <Text style={Styles.txtThree}>for every ₹ 100 spend</Text>
          </Text>
          <Text style={Styles.txtTwo}>
            • Up to 200 points{' '}
            <Text style={Styles.txtThree}>on profile completion</Text>
          </Text>
          <Text style={Styles.txtTwo}>
            • Up to 300 points{' '}
            <Text style={Styles.txtThree}>when you refer friend</Text>
          </Text>
          <Text style={Styles.txtEight}>TIERS & BENEFITS</Text>
          <View style={{marginTop: 15}}>
            <Text style={Styles.benefitstext}>
              Enjoy additional bespoke benefits as you move up the tiers of the
              Fabfamily program.
            </Text>
            <Text style={Styles.benefitstext}>
              Here's a look at what's on offer at each level.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{padding: 12, backgroundColor: '#FDFDFD', elevation: 5}}>
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

export default Benefits;

import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../../assets/Colors';
import CommonButton from '../../../Common/CommonButton';
const width = Dimensions.get('window').width;

export default function StoreMainDetails() {
  return (
    <View style={Styles.view1}>
    <Text style={Styles.maintxt}>
    Fabindia
    </Text>
      <Text style={Styles.txt1}>
        City Center Mall, Unit no. CCRP 0029, Upper ground floor, Vill-Mowa,
        Vidhan sabha road, Raipur - (Chattishgarh)
      </Text>
      <View style={Styles.upperView2}>
        <FontAwesome name={'phone'} color={'#4A4A4A'} size={20} />
        <Text
          style={[
            Styles.txt3,
            {
              fontFamily: Fonts.Assistant700,
              paddingHorizontal: 10,
            },
          ]}>
          Phone-
        </Text>
        <Text
          style={[
            Styles.txt3,
            {
              fontFamily: Fonts.Assistant400,
            },
          ]}>
          91-0771-4062574
        </Text>
      </View>
      <View style={Styles.upperView2}>
        <Feather name={'mail'} color={'#4A4A4A'} size={20} />
        <Text
          style={[
            Styles.txt3,
            {
              fontFamily: Fonts.Assistant700,
              paddingVertical: 12,
              paddingHorizontal: 6,
            },
          ]}>
          Email-
        </Text>
        <Text
          style={[
            Styles.txt3,
            {
              fontFamily: Fonts.Assistant400,
            },
          ]}>
          Fabindia.chattishgarh@gmail.com
        </Text>
      </View>
      <View style={Styles.upperView2}>
        <Feather name={'clock'} color={'#4A4A4A'} size={20} />
        <Text
          style={[
            Styles.txt3,
            {
              fontFamily: Fonts.Assistant700,
              paddingHorizontal: 6,
            },
          ]}>
          Store Timings-
        </Text>
        <Text
          style={[
            Styles.txt3,
            {
              fontFamily: Fonts.Assistant400,
            },
          ]}>
          11.00 am - 9.00 pm
        </Text>
      </View>
      <Text
        style={Styles.middletxt}>
        Open all days
      </Text>
      <View
        style={Styles.imageView}>
        <Image
          source={image.map}
          style={{height: 197, width: width / 1.07}}
          resizeMode="stretch"
        />
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt={'Get directions'}
          btntxtColor={Colors.primarycolor}
          customViewStyle={Styles.commonbutton}
        />
         <CommonButton
          backgroundColor="#BDBDBD"
          txt={'Call'}
          btntxtColor={Colors.backgroundColor}
          customViewStyle={Styles.commonbutton2}
        />
      </View>
    </View>
  );
}

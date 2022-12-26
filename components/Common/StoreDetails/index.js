import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import CommonButton from '../CommonButton';
import {Colors} from '../../../assets/Colors';

export default function StoreDetails() {
  return (
    <View>
      {[0, 0, 0, 0].map(el => {
        return (
          <View style={{marginBottom: 30}}>
            <Image
              resizeMode="stretch"
              key={Math.random() * 1099900}
              style={Styles.imgback}
              source={image.fabshow}></Image>
            <View style={Styles.view1}>
              <View style={Styles.upperView}>
                <Entypo name={'location-pin'} color={'#BDBDBD'} size={20} />
                <Text style={Styles.nearest}>City center mall</Text>
              </View>
              <Text style={Styles.txt1}>
                City Center Mall, Unit no. CCRP 0029, Upper ground floor,
                Vill-Mowa, Vidhan sabha road, Raipur - (Chattishgarh)
              </Text>
              <Text style={Styles.txt2}>
                Open all days
                <Text style={Styles.subtext}>- 11 am to 9 pm</Text>
              </Text>
              <View style={Styles.upperView2}>
                <FontAwesome name={'phone'} color={'#4A4A4A'} size={20} />
                <Text style={Styles.txt3}>91-0771-4062574 / 4062577</Text>
              </View>
              <CommonButton
                backgroundColor="#BDBDBD"
                txt={'View Details'}
                btntxtColor={Colors.primarycolor}
                customViewStyle={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: Colors.primarycolor,
                  width: '35%',
                  paddingVertical: 7,
                }}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
}

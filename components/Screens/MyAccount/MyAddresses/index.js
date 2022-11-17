import React, {useState} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {image} from '../../../../assets/images';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Styles from './styles';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
import CommonButton from '../../../Common/CommonButton';
const faqs = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
];
const MyAddresses = props => {
  const [show, setShow] = useState(false);
  return (
    <>
      <ScrollView
        contentContainerStyle={Styles.container}
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            FontFamily: Fonts.Assistant600,
            fontSize: 18,
            color: Colors.textcolor,
          }}>
          Saved Addresses
        </Text>
        <View style={Styles.body}>
          {faqs.map((faq, index) => (
            <View
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 10,
                padding: 15,
                flexDirection: 'row',
                elevation: 5,
                justifyContent: 'space-between',
                marginBottom: faq.length - 1 == index ? 0 : 15,
              }}>
              <View style={{maxWidth: '60%'}}>
                <Text style={Styles.mainDivText}>Home(Default)</Text>
                <Text style={[Styles.titletxt]}>
                  102 FI Tara Orchard Avenue
                </Text>
                <Text style={[Styles.titletxt]}>Hirananadani Gardens</Text>
                <Text style={[Styles.titletxt]}>Powal Mumbai 400076</Text>
                <Text style={[Styles.titletxt]}>Mobile - 9900000000</Text>
              </View>
              <TouchableOpacity
                onPress={() => setShow(prev => (prev != faq.id ? faq.id : ''))}>
                <MaterialCommunityIcons
                  name="dots-vertical"
                  color={Colors.textcolor}
                  size={20}
                />
              </TouchableOpacity>
              {show == faq.id ? (
                <View
                  style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    elevation: 5,
                    top: '50%',
                    left: '75%',
                    paddingVertical: 14,
                    paddingHorizontal: 24,
                  }}>
                  <TouchableOpacity>
                    <Text style={{fontWeight: 'bold'}}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={{fontWeight: 'bold', marginTop: 10}}>
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          ))}
        </View>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo
            name="circle-with-plus"
            color={Colors.primarycolor}
            size={20}
          />
          <Text style={{paddingLeft: 10, color: 'brown'}}>
            Add a new Addresses
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <CommonButton
        backgroundColor={Colors.primarycolor}
        txt="Continue"
        customViewStyle={{paddingVertical: 12}}
      />
      {/* <View style={{padding: 12}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.primarycolor,
            paddingVertical: 10,
            borderRadius: 30,
          }}>
          <Text style={{color: 'white'}}>Continue</Text>
        </View>
      </View> */}
    </>
  );
};
export default MyAddresses;

import React, {useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Styles from './styles';
import {Colors} from '../../../../assets/Colors';
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
        <Text style={Styles.headingtxt}>Saved Addresses</Text>
        <View style={Styles.body}>
          {faqs.map((faq, index) => (
            <View
              style={[
                Styles.txtbox,
                {
                  marginBottom: faq.length - 1 == index ? 0 : 15,
                },
              ]}>
              <View style={{width: '65%'}}>
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
                <View style={Styles.modalbox}>
                  <TouchableOpacity>
                    <Text style={Styles.edittxt}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Text style={Styles.deletetxt}>Delete</Text>
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
          <Text style={Styles.addbtntxt}>Add a new Addresses</Text>
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{
          padding: 12,
          backgroundColor: '#FDFDFD',
          elevation: 5,
        }}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Continue"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
};
export default MyAddresses;

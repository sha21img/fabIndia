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
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
import CommonButton from '../../../Common/CommonButton';
import {Styles} from './styles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const faqs = [
  {
    id: '1',
    question: 'You dont deliver in my area ?',
  },
  {
    id: '2',
    question: 'I want to cancel an item',
  },
  {
    id: '2',
    question: 'I want to return an item',
  },
  {
    id: '3',
    question: 'I want to exchange an item',
  },
  {
    id: '4',
    question: 'How can I update my personal details?',
  },
  {
    id: '5',
    question: 'Anything else we can help you with?',
  },
];
const CustomerCare = props => {
  return (
    <>
      <ScrollView
        contentContainerStyle={Styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={Styles.upperView}>
          <Text style={Styles.topheadtext}>How can we help you ?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('TrackRequest')}>
            <Text style={Styles.topheadtext1}>Track Requests</Text>
          </TouchableOpacity>
        </View>
        {faqs.map((faq, index) => (
          <TouchableOpacity
            style={Styles.mapViewstyle}
            onPress={() =>
              props.navigation.navigate('CustomerCareStatus', {index: index})
            }>
            {/* <View > */}
            <View style={{maxWidth: '90%'}}>
              <Text style={Styles.mainDivText}>{faq.question}</Text>
            </View>
            <SimpleLineIcons
              name="arrow-right"
              color={Colors.primarycolor}
              size={15}
            />
            {/* </View> */}
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={Styles.btnbox}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Submit"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
};
export default CustomerCare;

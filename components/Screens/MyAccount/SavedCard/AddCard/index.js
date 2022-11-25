import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Styles from './styles';
import {image} from '../../../../../assets/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../../../assets/Colors';
import InputText from '../../../../Common/InputText';
import CommonButton from '../../../../Common/CommonButton';
export default function AddCard() {
  const [text, setText] = useState('');

  return (
    <>
      <ScrollView style={Styles.mainContainer}>
        <Text style={Styles.noCardText}>Add a new card</Text>
        <View style={Styles.InputTextContainer}>
          <InputText
            underlineColor="#EDEDED"
            activeUnderlineColor=" #979797"
            customStyle={Styles.textinput}
            label="Card number"
            value={text}
            onChangeText={text => setText(text)}
          />
          <InputText
            underlineColor="#EDEDED"
            activeUnderlineColor=" #979797"
            customStyle={Styles.textinput}
            label="Address Line 2 (optional)"
            value={text}
            onChangeText={text => setText(text)}
          />
          <View style={Styles.expireBox}>
            <InputText
              underlineColor="#EDEDED"
              activeUnderlineColor=" #979797"
              customStyle={Styles.textinput1}
              label="Expiry month"
              value={text}
              onChangeText={text => setText(text)}
            />
            <InputText
              underlineColor="#EDEDED"
              activeUnderlineColor=" #979797"
              customStyle={Styles.textinput1}
              label="Expiry year"
              value={text}
              onChangeText={text => setText(text)}
            />
          </View>
        </View>
      </ScrollView>
      <View style={Styles.btnBox}>
        <CommonButton
          txt="Save card"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
            width: '100%',
            alignSelf: 'center',
          }}
        />
      </View>
    </>
  );
}

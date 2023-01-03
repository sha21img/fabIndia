import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';
import InputText from '../../../../Common/InputText';
import CommonButton from '../../../../Common/CommonButton';
import {Styles} from './styles';

export default function Help() {
  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        <Text style={Styles.heading}>Anything else we can help you with?</Text>
        <InputText
          placeholder="Enter your query here"
          placeholderTextColor="#979797"
          // onChangeText={text => discriptionNameHandler(text)}
          // value={user.description}
          numberOfLines={4}
          multiline={true}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          customStyle={Styles.inputcontainer}
        />
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Start shopping"
          btntxtColor="#979797"
          customViewStyle={Styles.btncontainer}
        />
      </ScrollView>
      <View style={Styles.btnbox}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Call us"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
}

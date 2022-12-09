import {View, Text} from 'react-native';
import React from 'react';
import Success from '../../../../Common/Success';
import Fonts from '../../../../../assets/fonts';

export default function ChangePasswordSuccesfully() {
  return (
    <Success
      //   title="Return request submitted"
      description="Your password has been 
changed successfully!"
      btntxt="Start shopping now!"
      showCard={false}
      descfont={{fontFamily: Fonts.Assistant700}}
    />
  );
}

import {View, Text} from 'react-native';
import React from 'react';
import Success from '../../../../Common/Success';

export default function OrderSuccess() {
  return (
    <Success
      title="Return request submitted"
      description="Your package will be picked up by our 
  delivery executive"
      btntxt="Done"
    />
  );
}

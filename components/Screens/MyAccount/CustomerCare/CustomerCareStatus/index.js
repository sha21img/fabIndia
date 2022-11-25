import {View, Text} from 'react-native';
import React from 'react';
import DontDeliver from '../DontDeliver';
import CancelItem from '../CancelItem';
import ReturnItem from '../ReturnItem';
import ExchangeItem from '../ExchangeItem';
import PersonalDetail from '../PersonalDetail';
import Help from '../Help';

export default function CustomerCareStatus({route}) {
  //   console.log('route', route.params);
  //   const status = route.params.index;
  return (
    <>
      <Help />
      {/* <PersonalDetail /> */}
      {/* <ExchangeItem /> */}
      {/* <ReturnItem /> */}
    </>
  );
  {
    /* <DontDeliver /> */
    // <CancelItem />
  }
  {
    /* status == 0 && <DontDeliver /> */
  }
}

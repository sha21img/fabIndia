import {View, Text} from 'react-native';
import React from 'react';
import {dataDetectorType} from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import FullCard from '../../Common/FullCard';

export default function CardList({data = []}) {
  return (
    <>
      {data?.map(item => {
        return <FullCard item={item} />;
      })}
    </>
  );
}

import {
  View,
  Text,
} from 'react-native';
import React from 'react';
import ResultCards from './ResultCards';

export default function LandingPageSaris_Blouses(props) {
  const {code, title, status, isSearch} = props.route.params;

  return (
    <>
      <ResultCards
        isSearch={isSearch}
        status={status}
        title={title}
        code={code}
        {...props}
      />
    </>
  );
}
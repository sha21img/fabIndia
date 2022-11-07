import {View, Text} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {Styles} from './styles';

export default function NoResultFound() {
  return (
    <View style={{flex: 1, paddingHorizontal: 15}}>
      <Text style={Styles.noresultfounttxt1}>No results found</Text>
      <Text style={Styles.noresultfounttxt2}>
        We’re really sorry, but we couldn’t find what you’re looking for.
      </Text>
    </View>
  );
}

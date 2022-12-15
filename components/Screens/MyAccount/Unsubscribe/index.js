import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import {Styles} from './styles';
import {Colors} from '../../../../assets/Colors';

function Unsubscribe() {
  return (
    <ScrollView style={Styles.container}>
      <Text style={Styles.unsubscribeTxtOne}>
        We hate goodbyes-but if you have change of heart, we'll always be
        there.{'\n'}
      </Text>
      <Text style={Styles.unsubscribeTxtOne}>
        To opt out / unsubscribe
      </Text>
      <Text style={[Styles.unsubscribeTxtOne]}>
        write to us at{' '}
        <Text style={[Styles.unsubscribeTxtOne, {color: Colors.primarycolor}]}>
          fabfamily@fabindia.net{'\n'}
        </Text>
      </Text>
      <Text style={Styles.unsubscribeTxtOne}>
        or call us on{' '}
        <Text style={[Styles.unsubscribeTxtOne, {color: Colors.primarycolor}]}>
          1800-100-1212
        </Text>
      </Text>
    </ScrollView>
  );
}

export default Unsubscribe;

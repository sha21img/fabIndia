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
        We hate goodbyes - but if you have change of heart, we'll always be
        there.{'\n'}
      </Text>
      <Text style={Styles.unsubscribeTxtOne}>
        To opt out / unsubscribe{'\n'}
      </Text>
      <Text style={[Styles.unsubscribeTxtOne]}>
        write to us at{' '}
        <Text style={[Styles.unsubscribeTxtOne, {color: Colors.primarycolor}]}>
          support@fabindia.net{'\n'}
        </Text>
      </Text>
      <Text style={Styles.unsubscribeTxtOne}>
        or call us on{' '}
        <Text style={[Styles.unsubscribeTxtOne, {color: Colors.primarycolor}]}>
          +91 8010488888
        </Text>
      </Text>
    </ScrollView>
  );
}

export default Unsubscribe;

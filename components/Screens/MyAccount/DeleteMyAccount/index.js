import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import {Styles} from './styles';
import {Colors} from '../../../../assets/Colors';

function DeleteMyAccount() {
  return (
    <ScrollView style={Styles.container}>
      <Text style={Styles.deleteTxtOne}>
        if you delete your account details will be permanently closed and
        unrecoverable{'\n'}
      </Text>
      <Text style={Styles.deleteTxtOne}>
        if you're experiencing an issue with your account,payment or
        device,please give us the opportunity to assist you.We're here to help
        and will be sorry to see you go.{'\n'}
      </Text>
      <Text style={Styles.deleteTxtOne}>To delete your account{'\n'}</Text>
      <Text style={Styles.deleteTxtOne}>
        Write to us at{' '}
        <Text style={[Styles.deleteTxtOne, {color: Colors.primarycolor}]}>
          support@fabindia.net
        </Text>
      </Text>
      <Text style={Styles.deleteTxtOne}>
        Or call us on{' '}
        <Text style={[Styles.deleteTxtOne, {color: Colors.primarycolor}]}>
          +91 8010488888
        </Text>
      </Text>
    </ScrollView>
  );
}

export default DeleteMyAccount;

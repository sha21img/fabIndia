import {View, Text} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import styles from './styles';
export default function ErrorScreen() {
  return (
    <View style={styles.mainView}>
      <Text style={styles.txt1}>404 Error</Text>
      <Text style={[styles.txt2, {paddingVertical: 20}]}>
        Sorry, this page was not found.
      </Text>
      <Text style={styles.txt2}>
        Here's a quick fix - try refreshing the page, or heading back to home!
      </Text>
    </View>
  );
}

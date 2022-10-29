import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Styles} from './styles';

export default function Header() {
  return (
    <View style={Styles.container}>
      <View style={{width: '40%'}}>
        <Text>Fabindia</Text>
      </View>
      <View
        style={{
          width: '60%',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Ionicons name="location-sharp" size={20} />
          <Text>text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <FontAwesome name="rupee" size={20} />
          <Text>text</Text>
        </TouchableOpacity>
        <AntDesign name="search1" size={20} />
      </View>
    </View>
  );
}

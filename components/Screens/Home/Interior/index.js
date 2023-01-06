import {TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';

export default function Interior(props) {
  const {data = {}} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{margin: 16, marginBottom: 0}}
      onPress={() => props.navigation.navigate('InteriorHomepage')}>
      <FastImage
        style={{height: 200}}
        source={{
          uri: data[0]?.image.split('?')[0],
          priority: FastImage.priority.normal,
        }}
        // resizeMode={FastImage.resizeMode.contain}
      />
    </TouchableOpacity>
  );
}

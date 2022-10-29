import react from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {image} from '../../../assets/images';

export default function StoriesCard({custumStyles = {}, data = []}) {
  const cards = data.map(item => {
    return (
      <View key={Math.random() * 100000} style={{marginLeft: 15, elevation:2}}>
        <Image source={item.Image} />
        <Text
          style={{
            marginLeft: 10,
            marginVertical: 5,
            fontSize: 16,
            lineHeight: 21,
            color: '#ffffff',
          }}>
          {item.description}
        </Text>
      </View>
    );
  });
  return (
    <View style={[{backgroundColor: '#BBA865', paddingVertical: 20}, custumStyles]}>
      <Text
        style={{
          fontFamily: 'Barlow-Regular',
          fontStyle: 'normal',
          color: '#ffffff',
          fontSize: 30,
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            fontFamily: 'LaBelleAurore-Regular',
            fontStyle: 'normal',
            color: '#ffffff',
            fontSize: 60,
            lineHeight: 90,
          }}>
          Style
        </Text>{' '}
        STORIES
      </Text>
      <View style={{marginBottom: 15}}>
        <Text
          style={{
            fontSize: 18,
            color: '#ffffff',
            lineHeight: 23,
            marginHorizontal: 20,
          }}>
          Our customers share their styling tips. See something you like? Tap to
          buy!
        </Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cards}
      </ScrollView>
    </View>
  );
}

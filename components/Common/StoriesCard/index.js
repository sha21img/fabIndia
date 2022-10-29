import react from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {image} from '../../../assets/images';
import { Styles } from './styles';

export default function StoriesCard({custumStyles = {}, data = [], title=null}) {
  const cards = data.map(item => {
    return (
      <View key={Math.random() * 100000} style={{marginLeft: 15, elevation:2}}>
        <Image source={item.Image} />
        <Text
          style={Styles.CarddescriptionText}>
          {item.description}
        </Text>
      </View>
    );
  });
  return (
    <View style={[{backgroundColor: '#BBA865', paddingVertical: 20}, custumStyles]}>
      {title()}
      <View style={{marginBottom: 15}}>
        <Text
          style={Styles.DescriptionText}>
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

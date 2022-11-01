import react from 'react';
import {Image, ScrollView, Text, View, ImageBackground} from 'react-native';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';

export default function StoriesCard({
  custumStyles = {},
  data = [],
  title = null,
}) {
  const cards = data.map(item => {
    return (
      <View key={Math.random() * 100000}>
        <Image source={item.Image} />
        <Text style={Styles.CarddescriptionText}>{item.description}</Text>
        <View
          style={{
            position: 'absolute',
            top: 20,
            backgroundColor: 'rgba(187, 168, 101, 0.7)',
            paddingHorizontal: 5,
            flexDirection: 'row',
            paddingVertical: 3,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
          }}>
          <Text
            style={{
              fontFamily: Fonts.Assistant300,
              color: '#FFFFFF',
              fontSize: 12,
              marginRight: 5,
            }}>
            Featured
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant700,
              color: '#FFFFFF',
              fontSize: 12,
            }}>
            @tanya.s
          </Text>
        </View>
      </View>
    );
  });
  return (
    <View
      style={[{backgroundColor: '#BBA865', paddingBottom: 20}, custumStyles]}>
      {title()}
      <View style={{marginBottom: 15}}>
        <Text style={Styles.DescriptionText}>
          Our customers share their styling tips. See something you like? Tap to
          buy!
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#BBA865',
          elevation: 5,
          marginLeft: 15,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cards}
        </ScrollView>
      </View>
    </View>
  );
}

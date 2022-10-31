import react from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';
import {Styles} from './styles';

export default function LifeStyle({
  custumStyles = {},
  data = [],
  title = null,
}) {
  const cards = data.map((item, index) => {
    return (
      <ImageBackground
        key={Math.random() * 1099900}
        source={item.image}
        style={[
          Styles.card,
          {
            marginTop: index % 2 != 0 ? 33 : 15,
          },
        ]}>
        <LinearGradient
          colors={['transparent', '#66553B']}
          style={Styles.cardBox}>
          <Text style={Styles.boxText}>{item.name}</Text>
        </LinearGradient>
      </ImageBackground>
    );
  });
  return (
    <View style={Styles.container}>
      <View style={[Styles.containerBox, custumStyles]}>
        {title()}
        <View style={Styles.cardContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {cards}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

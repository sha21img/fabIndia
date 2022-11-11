import react from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './style';

export default function SummerGalary({
  data = [],
  title = null,
  subtitles = '',
  customViewStyle = {},
  backgroundColor = '',
  shadowColor = '',
}) {
  const cards = data.map((item, index) => {
    return (
      <ImageBackground
        key={Math.random() * 100000}
        source={item.image}
        style={[
          Styles.CardContainer,
          {
            marginTop: index % 2 == 0 && index != 0 && index % 4 != 0 ? 33 : 15,
          },
        ]}>
        <LinearGradient
          colors={['transparent', '#925D4D']}
          style={Styles.CardGradient}>
          <Text style={Styles.CardFooter}>{item.name}</Text>
        </LinearGradient>
      </ImageBackground>
    );
  });
  return (
    <View style={customViewStyle}>
      <View
        style={{
          height: '75%',
          width: '100%',
          backgroundColor: backgroundColor,
          position: 'absolute',
          zIndex: -1,
        }}></View>
      {title}
      <Text style={Styles.ContainerHeader}>{subtitles}</Text>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={Styles.CardCarousole}>
          {cards}
        </ScrollView>
      </View>
    </View>
  );
}

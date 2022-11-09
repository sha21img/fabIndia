import react from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';
import {Styles} from './styles';

export default function LifeStyle({
  data = [],
  title = null,
  backgroundColor = '',
  customViewStyle = {},
}) {
  const cards = data.map((item, index) => {
    return (
      <ImageBackground
        key={Math.random() * 1099900}
        source={item.image}
        style={[
          Styles.card,
          {
            marginTop: index % 2 != 0 ? 30 : 10,
            height: 340,
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
    <View style={customViewStyle}>
      <View
        style={{
          height: '75%',
          width: '100%',
          backgroundColor: backgroundColor,
          position: 'absolute',
          zIndex: -1,
        }}></View>
      {title()}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.ScrollContainer}>
        {cards}
      </ScrollView>
      {/* <View style={[Styles.containerBox, custumStyles]}>
        
        <View style={Styles.cardContainer}>
          
        </View>
      </View> */}
    </View>
  );
}

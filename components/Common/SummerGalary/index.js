import react from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {image} from '../../../assets/images';

export default function SummerGalary({
  custumStyles = {},
  data = [],
  title = '',
  subtitles = '',
}) {
  const cards = data.map((item, index) => {
    return (
      <ImageBackground
        key={Math.random() * 100000}
        source={item.image}
        style={{
          height: 297,
          width: 258,

          zIndex: 100,
          marginLeft: 15,
          elevation: 4,
          marginTop: index % 2 == 0 && index != 0 && index % 4 != 0 ? 33 : 15,
          // backgroundColor: 'white',
        }}>
        <LinearGradient
          colors={['transparent', '#925D4D']}
          style={{
            position: 'absolute',
            bottom: 0,
            height: 67,
            width: '100%',
          }}>
          <Text
            style={{
              marginLeft: 10,
              marginVertical: 5,
              fontSize: 16,
              lineHeight: 21,
              position: 'absolute',
              bottom: 12,
              left: 12,
              color: '#ffffff',
            }}>
            {item.name}
          </Text>
        </LinearGradient>
      </ImageBackground>
    );
  });
  return (
    <View style={{height: 758, backgroundColor:"red"}}>
      <View
        style={[
          {
            backgroundColor: '#EFE5E0',
            paddingTop: 48,
            height: 648,
            position: 'relative',
          },
          custumStyles,
        ]}>
        <Text
          style={{
            fontFamily: 'PlayfairDisplay-Italic',
            color: '#4A4A4A',
            fontSize: 30,
            marginHorizontal: 20,
          }}>
          {title}
        </Text>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: '#4A4A4A',
              lineHeight: 23,
              marginHorizontal: 20,
            }}>
            {subtitles}
          </Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: 660,
            position: 'absolute',
            bottom: '-25%',
            flexDirection: 'column',
            flexWrap: 'wrap',
          }}>
          {cards}
        </ScrollView>
      </View>
    </View>
  );
}

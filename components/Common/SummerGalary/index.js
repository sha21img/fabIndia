import react from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';

export default function SummerGalary({
  data = [],
  title = null,
  subtitles = '',
  customViewStyle = {},
  backgroundColor = '',
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
    <View
      style={[
        {height: 758, backgroundColor: Colors.backgroundColor},
        customViewStyle,
      ]}>
      <View
        style={[
          {
            backgroundColor: backgroundColor,
            paddingTop: 48,
            height: 648,
            position: 'relative',
          },
        ]}>
        {title}

        <Text
          style={{
            fontSize: 18,
            color: '#4A4A4A',
            lineHeight: 23,
            marginHorizontal: 20,
          }}>
          {subtitles}
        </Text>

        <View style={{position: 'absolute', top: 100}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              height: 660,
              flexDirection: 'column',
              flexWrap: 'wrap',
            }}>
            {cards}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

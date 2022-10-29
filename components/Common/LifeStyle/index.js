import react from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../assets/Colors';
import {image} from '../../../assets/images';

export default function LifeStyle({
  custumStyles = {},
  data = [],
  title = '',
  subtitles = '',
}) {
  const cards = data.map((item, index) => {
    return (
      <ImageBackground
        key={Math.random() * 1099900}
        source={item.image}
        style={{
          height: 340,
          width: 258,
          zIndex:20,
          marginLeft: 15,
          elevation: 1,
          marginTop: index % 2 != 0 ? 33 : 15,
        }}>
        <LinearGradient
          colors={['transparent', '#66553B']}
          style={{
            position: 'absolute',
            bottom: 5,
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
    <View style={{ height: 480, backgroundColor:Colors.backgroundColor}}>
      <View
        style={[
          {
            backgroundColor: '#F8F2EF',
            height: 300,
            paddingTop: 30,
            paddingBottom: 20,
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
            marginBottom:5
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
       <View style={{position:"absolute", bottom:-165}}>
       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {cards}
      </ScrollView>
       </View>
      </View>
    </View>
  );
}

import {View, Text, ScrollView, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {Stylesheet} from 'react-native';
import {Styles} from './styles';
export default function Card() {
  const data = [
    {
      id: 1,
      url: 'https://apisap.fabindia.com/medias/homepageSection22Image4.jpg?context=bWFzdGVyfGltYWdlc3wxODQ1NDF8aW1hZ2UvanBlZ3xoODgvaDAzLzg5MDA5OTAxMDc2NzgvaG9tZXBhZ2VTZWN0aW9uMjJJbWFnZTQuanBnfDY4ZGJkYmJkMjFkYjdjMTlmNDA3ZGE3ZmZjNDQyMzgyMWQ5OTgzODRlMDRhZTA2YWRhMDlkMmVmNGE1Zjc4YjY',
      location: 'Summer Collection',
    },
    {
      id: 2,
      url: 'https://apisap.fabindia.com/medias/homepageSection22Image1.jpg?context=bWFzdGVyfGltYWdlc3wxMDcwNzJ8aW1hZ2UvanBlZ3xoMjAvaDAwLzg5MDA5OTAwMDkzNzQvaG9tZXBhZ2VTZWN0aW9uMjJJbWFnZTEuanBnfDYzZTM5ZmIyNzBlODI5YjIxM2Q5YmFhYzJiZGZmZmQwNTRjNmRiN2U4ZjNmYmRmMjM5YmYyODA1NmEzZGRiODA',
      location: 'Kurtas & Shirts',
    },
  ];
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map(img => (
        <ImageBackground
          style={Styles.img}
          source={{
            uri: img.url,
          }}
          resizeMode="cover">
          <LinearGradient
            colors={['rgba(0,0,0,0.5)', 'transparent']}
            style={Styles.container}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}>
            <View style={Styles.discountTextContainer}>
              <Text style={Styles.uptoText}>UPTO</Text>
              <Text style={Styles.offerText}>70%</Text>
              <Text style={Styles.uptoText}>OFF</Text>
            </View>
            <Text style={Styles.bottomText}>{img.location}</Text>
          </LinearGradient>
        </ImageBackground>
      ))}
    </ScrollView>
  );
}

import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from './styles';
export default function StateCategory() {
  const data = [
    {
      id: 1,
      url: 'https://apisap.fabindia.com/medias/homepageSection22Image4.jpg?context=bWFzdGVyfGltYWdlc3wxODQ1NDF8aW1hZ2UvanBlZ3xoODgvaDAzLzg5MDA5OTAxMDc2NzgvaG9tZXBhZ2VTZWN0aW9uMjJJbWFnZTQuanBnfDY4ZGJkYmJkMjFkYjdjMTlmNDA3ZGE3ZmZjNDQyMzgyMWQ5OTgzODRlMDRhZTA2YWRhMDlkMmVmNGE1Zjc4YjY',
      title: 'The Nairs',
      location: 'Mumbai',
    },
    {
      id: 2,
      url: 'https://apisap.fabindia.com/medias/homepageSection22Image1.jpg?context=bWFzdGVyfGltYWdlc3wxMDcwNzJ8aW1hZ2UvanBlZ3xoMjAvaDAwLzg5MDA5OTAwMDkzNzQvaG9tZXBhZ2VTZWN0aW9uMjJJbWFnZTEuanBnfDYzZTM5ZmIyNzBlODI5YjIxM2Q5YmFhYzJiZGZmZmQwNTRjNmRiN2U4ZjNmYmRmMjM5YmYyODA1NmEzZGRiODA',
      title: 'The Singhs',
      location: 'Pune',
    },
    {
      id: 3,
      url: 'https://apisap.fabindia.com/medias/homepageSection22Image4.jpg?context=bWFzdGVyfGltYWdlc3wxODQ1NDF8aW1hZ2UvanBlZ3xoODgvaDAzLzg5MDA5OTAxMDc2NzgvaG9tZXBhZ2VTZWN0aW9uMjJJbWFnZTQuanBnfDY4ZGJkYmJkMjFkYjdjMTlmNDA3ZGE3ZmZjNDQyMzgyMWQ5OTgzODRlMDRhZTA2YWRhMDlkMmVmNGE1Zjc4YjY',
      title: 'The Singhs',
      location: 'Pune',
    },
  ];
  return (
    <View style={Styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(img => (
          <View style={Styles.imgContainer}>
            <Image
              style={Styles.img}
              source={{
                uri: img.url,
              }}
            />
            <Text style={Styles.bottomText}>{img.title}</Text>
            <Text style={Styles.bottomText}>{img.location}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

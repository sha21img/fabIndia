import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {Styles} from './styles';

export default function Legacy() {
  const data = [
    {
      id: 1,
      url: 'https://apisap.fabindia.com/medias/homepageSection22Image4.jpg?context=bWFzdGVyfGltYWdlc3wxODQ1NDF8aW1hZ2UvanBlZ3xoODgvaDAzLzg5MDA5OTAxMDc2NzgvaG9tZXBhZ2VTZWN0aW9uMjJJbWFnZTQuanBnfDY4ZGJkYmJkMjFkYjdjMTlmNDA3ZGE3ZmZjNDQyMzgyMWQ5OTgzODRlMDRhZTA2YWRhMDlkMmVmNGE1Zjc4YjY',
    },
    {
      id: 2,
      url: 'https://apisap.fabindia.com/medias/homepageSection22Image1.jpg?context=bWFzdGVyfGltYWdlc3wxMDcwNzJ8aW1hZ2UvanBlZ3xoMjAvaDAwLzg5MDA5OTAwMDkzNzQvaG9tZXBhZ2VTZWN0aW9uMjJJbWFnZTEuanBnfDYzZTM5ZmIyNzBlODI5YjIxM2Q5YmFhYzJiZGZmZmQwNTRjNmRiN2U4ZjNmYmRmMjM5YmYyODA1NmEzZGRiODA',
    },
    {
      id: 3,
      url: 'https://apisap.fabindia.com/medias/homepageSection22Image4.jpg?context=bWFzdGVyfGltYWdlc3wxODQ1NDF8aW1hZ2UvanBlZ3xoODgvaDAzLzg5MDA5OTAxMDc2NzgvaG9tZXBhZ2VTZWN0aW9uMjJJbWFnZTQuanBnfDY4ZGJkYmJkMjFkYjdjMTlmNDA3ZGE3ZmZjNDQyMzgyMWQ5OTgzODRlMDRhZTA2YWRhMDlkMmVmNGE1Zjc4YjY',
    },
    {
      id: 4,
      url: 'https://apisap.fabindia.com/medias/homepageSection22Image1.jpg?context=bWFzdGVyfGltYWdlc3wxMDcwNzJ8aW1hZ2UvanBlZ3xoMjAvaDAwLzg5MDA5OTAwMDkzNzQvaG9tZXBhZ2VTZWN0aW9uMjJJbWFnZTEuanBnfDYzZTM5ZmIyNzBlODI5YjIxM2Q5YmFhYzJiZGZmZmQwNTRjNmRiN2U4ZjNmYmRmMjM5YmYyODA1NmEzZGRiODA',
    },
    {
      id: 5,
      url: 'https://apisap.fabindia.com/medias/homepageSection22Image4.jpg?context=bWFzdGVyfGltYWdlc3wxODQ1NDF8aW1hZ2UvanBlZ3xoODgvaDAzLzg5MDA5OTAxMDc2NzgvaG9tZXBhZ2VTZWN0aW9uMjJJbWFnZTQuanBnfDY4ZGJkYmJkMjFkYjdjMTlmNDA3ZGE3ZmZjNDQyMzgyMWQ5OTgzODRlMDRhZTA2YWRhMDlkMmVmNGE1Zjc4YjY',
    },
    {
      id: 6,
      url: 'https://apisap.fabindia.com/medias/homepageSection22Image10.jpg?context=bWFzdGVyfGltYWdlc3wyMTAxMjV8aW1hZ2UvanBlZ3xoNTkvaDBhLzg5MDA5OTAzMDQyODYvaG9tZXBhZ2VTZWN0aW9uMjJJbWFnZTEwLmpwZ3wwOGU1ZWZhMzA4NzBlMGM1OGY4ZDdkZTIwNWFlYWY2N2ZkNTAzYWEzMDc5YzJhZmQwZjcwMTE1ZjdlYzBhM2Jk',
    },
  ];
  return (
    <View style={Styles.container}>
      <Text style={Styles.header}>Our legacy</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map(img => (
          <Image
            style={Styles.img}
            source={{
              uri: img.url,
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}

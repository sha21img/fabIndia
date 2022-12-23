import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';
import {Styles} from './style';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;
export default function CommonImageGrid({
  heading = null,
  bgImage = '',
  customViewStyle = {},
}) {
  const ImageGrid = item => {
    return (
      <View>
        <Image
          source={{uri: item.item.imagess}}
          style={{
            height: 95,
            width: width / 3.4,
            marginVertical: 3,
          }}
          resizeMode="stretch"
        />
      </View>
    );
  };
  const data = [
    {
      imagess:
        'https://apisap.fabindia.com/medias/wmn-lpsec8-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MzcxMDh8aW1hZ2UvanBlZ3xoY2QvaDY5LzkwOTExMDMzOTE3NzQvd21uLWxwc2VjOC0xOW9jdDIyLTEuanBnfGVlNTc1NDJhOWQ5ZWY1ZDE2NGVhYzk3MWRkMGM4Y2ZlMzhiNjAwZmViNmQwYTJkNDNjY2U0MzIyYWRiYzJlODU',
    },
    {
      imagess:
        'https://apisap.fabindia.com/medias/wmn-lpsec8-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MzcxMDh8aW1hZ2UvanBlZ3xoY2QvaDY5LzkwOTExMDMzOTE3NzQvd21uLWxwc2VjOC0xOW9jdDIyLTEuanBnfGVlNTc1NDJhOWQ5ZWY1ZDE2NGVhYzk3MWRkMGM4Y2ZlMzhiNjAwZmViNmQwYTJkNDNjY2U0MzIyYWRiYzJlODU',
    },
    {
      imagess:
        'https://apisap.fabindia.com/medias/wmn-lpsec8-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MzcxMDh8aW1hZ2UvanBlZ3xoY2QvaDY5LzkwOTExMDMzOTE3NzQvd21uLWxwc2VjOC0xOW9jdDIyLTEuanBnfGVlNTc1NDJhOWQ5ZWY1ZDE2NGVhYzk3MWRkMGM4Y2ZlMzhiNjAwZmViNmQwYTJkNDNjY2U0MzIyYWRiYzJlODU',
    },
    {
      imagess:
        'https://apisap.fabindia.com/medias/wmn-lpsec8-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MzcxMDh8aW1hZ2UvanBlZ3xoY2QvaDY5LzkwOTExMDMzOTE3NzQvd21uLWxwc2VjOC0xOW9jdDIyLTEuanBnfGVlNTc1NDJhOWQ5ZWY1ZDE2NGVhYzk3MWRkMGM4Y2ZlMzhiNjAwZmViNmQwYTJkNDNjY2U0MzIyYWRiYzJlODU',
    },
    {
      imagess:
        'https://apisap.fabindia.com/medias/wmn-lpsec8-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MzcxMDh8aW1hZ2UvanBlZ3xoY2QvaDY5LzkwOTExMDMzOTE3NzQvd21uLWxwc2VjOC0xOW9jdDIyLTEuanBnfGVlNTc1NDJhOWQ5ZWY1ZDE2NGVhYzk3MWRkMGM4Y2ZlMzhiNjAwZmViNmQwYTJkNDNjY2U0MzIyYWRiYzJlODU',
    },
    {
      imagess:
        'https://apisap.fabindia.com/medias/wmn-lpsec8-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MzcxMDh8aW1hZ2UvanBlZ3xoY2QvaDY5LzkwOTExMDMzOTE3NzQvd21uLWxwc2VjOC0xOW9jdDIyLTEuanBnfGVlNTc1NDJhOWQ5ZWY1ZDE2NGVhYzk3MWRkMGM4Y2ZlMzhiNjAwZmViNmQwYTJkNDNjY2U0MzIyYWRiYzJlODU',
    },
  ];
  return (
    <View style={Styles.mainView}>
      <Text style={Styles.txt1}>Take a Tour of india</Text>
      <Text style={Styles.txt2}>Explore the various crafts of India and dress in sustainable, handcrafted style</Text>

      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsHorizontalScrollIndicator={false}
        data={data}
        numColumns={3}
        keyExtractor={(item, index) => index}
        renderItem={ImageGrid}
      />
    </View>
  );
}

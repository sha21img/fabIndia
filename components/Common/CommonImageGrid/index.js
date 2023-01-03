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
export default function CommonImageGrid(props) {
  const {
    heading = null,
    bgImage = '',
    customViewStyle = {},
    data = [],
    isAdmin2 = '',
  } = props;
  const ImageGrid = item => {
    console.log('item', item.item.landingPage);
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          props.navigation.navigate('LandingPageSaris_Blouses', {
            code: item.item.landingPage,
            title: item.item.title,
            isAdmin2: 'isAdmin2',
          })
        }>
        <Image
          source={{uri: item.item.image}}
          style={{
            height: 95,
            width: width / 3.4,
            marginVertical: 3,
          }}
          resizeMode="stretch"
        />
      </TouchableOpacity>
    );
  };
  // const data = [
  //   {
  //     imagess:
  //       'https://apisap.fabindia.com/medias/wmn-lpsec8-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MzcxMDh8aW1hZ2UvanBlZ3xoY2QvaDY5LzkwOTExMDMzOTE3NzQvd21uLWxwc2VjOC0xOW9jdDIyLTEuanBnfGVlNTc1NDJhOWQ5ZWY1ZDE2NGVhYzk3MWRkMGM4Y2ZlMzhiNjAwZmViNmQwYTJkNDNjY2U0MzIyYWRiYzJlODU',
  //   },
  //   {
  //     imagess:
  //       'https://apisap.fabindia.com/medias/wmn-lpsec8-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MzcxMDh8aW1hZ2UvanBlZ3xoY2QvaDY5LzkwOTExMDMzOTE3NzQvd21uLWxwc2VjOC0xOW9jdDIyLTEuanBnfGVlNTc1NDJhOWQ5ZWY1ZDE2NGVhYzk3MWRkMGM4Y2ZlMzhiNjAwZmViNmQwYTJkNDNjY2U0MzIyYWRiYzJlODU',
  //   },
  //   {
  //     imagess:
  //       'https://apisap.fabindia.com/medias/wmn-lpsec8-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MzcxMDh8aW1hZ2UvanBlZ3xoY2QvaDY5LzkwOTExMDMzOTE3NzQvd21uLWxwc2VjOC0xOW9jdDIyLTEuanBnfGVlNTc1NDJhOWQ5ZWY1ZDE2NGVhYzk3MWRkMGM4Y2ZlMzhiNjAwZmViNmQwYTJkNDNjY2U0MzIyYWRiYzJlODU',
  //   },
  //   {
  //     imagess:
  //       'https://apisap.fabindia.com/medias/wmn-lpsec8-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MzcxMDh8aW1hZ2UvanBlZ3xoY2QvaDY5LzkwOTExMDMzOTE3NzQvd21uLWxwc2VjOC0xOW9jdDIyLTEuanBnfGVlNTc1NDJhOWQ5ZWY1ZDE2NGVhYzk3MWRkMGM4Y2ZlMzhiNjAwZmViNmQwYTJkNDNjY2U0MzIyYWRiYzJlODU',
  //   },
  //   {
  //     imagess:
  //       'https://apisap.fabindia.com/medias/wmn-lpsec8-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MzcxMDh8aW1hZ2UvanBlZ3xoY2QvaDY5LzkwOTExMDMzOTE3NzQvd21uLWxwc2VjOC0xOW9jdDIyLTEuanBnfGVlNTc1NDJhOWQ5ZWY1ZDE2NGVhYzk3MWRkMGM4Y2ZlMzhiNjAwZmViNmQwYTJkNDNjY2U0MzIyYWRiYzJlODU',
  //   },
  //   {
  //     imagess:
  //       'https://apisap.fabindia.com/medias/wmn-lpsec8-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MzcxMDh8aW1hZ2UvanBlZ3xoY2QvaDY5LzkwOTExMDMzOTE3NzQvd21uLWxwc2VjOC0xOW9jdDIyLTEuanBnfGVlNTc1NDJhOWQ5ZWY1ZDE2NGVhYzk3MWRkMGM4Y2ZlMzhiNjAwZmViNmQwYTJkNDNjY2U0MzIyYWRiYzJlODU',
  //   },
  // ];
  return (
    <View style={Styles.mainView}>
      <Text style={Styles.txt1}>Take a Tour of india</Text>
      <Text style={Styles.txt2}>
        Explore the various crafts of India and dress in sustainable,
        handcrafted style
      </Text>

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

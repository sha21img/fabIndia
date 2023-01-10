import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {hasSpaces} from '../../../../../../constant';
import Fonts from '../../../../../../assets/fonts';
const width = Dimensions.get('window').width;
export default function FoodImageGrid(props) {
  const {
    heading = null,
    bgImage = '',
    customViewStyle = {},
    data = [],
    isAdmin2 = '',
  } = props;
  const check = hasSpaces(data[0]?.categoryName);
  const ImageGrid = item => {
    console.log('labding page code', item.item.landingPage);
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          console.log('adsfgasdkjfhaksjdlhf;ladsfkasdhfljasdlfk');
          props.navigation.navigate('ProductDetailed', {
            productId: item.item.landingPage,
            imageUrlCheck: item.item,
          });
        }}>
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
  return (
    <View style={Styles.mainView}>
      <Text style={Styles.txt1}>{check ? check[0] : null}</Text>
      <Text style={Styles.txt2}>{check ? check[1] : null}</Text>

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

const Styles = StyleSheet.create({
  imageBackground: {},
  container: {
    padding: 16,
  },
  mainView: {paddingVertical: 25, paddingHorizontal: 15},
  txt1: {fontSize: 30, fontFamily: Fonts.PlayfairDisplay600},
  txt2: {
    fontSize: 18,
    fontFamily: Fonts.Assistant400,
    marginBottom: 15,
    paddingTop: 5,
  },
});

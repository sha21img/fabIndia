import react from 'react';
import {
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Styles} from './styles';
import React, {useEffect, useState} from 'react';
import {getComponentData} from '../Helper';
import {hasSpaces} from '../../../constant';

export default function LifeStyle(props) {
  const {
    data = {},
    title = null,
    backgroundColor = '',
    customViewStyle = {},
    isAdmin2,
  } = props;
  const [categoryData, setCategoryData] = React.useState([]);
  const [page, setPage] = useState(0);
  const [array, setArray] = useState([]);
  const check = hasSpaces(data[0]?.categoryName);

  const cards = (item, index) => {
    const newCode = item.landingPage;
    console.log('dfg', item.image);
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          props.navigation.navigate('LandingPageSaris_Blouses', {
            code: newCode,
            title: item.title,
            isAdmin2: isAdmin2,
          })
        }>
        <ImageBackground
          key={Math.random() * 1099900}
          resizeMode="cover"
          source={{uri: item.image}}
          style={[
            Styles.card,
            {
              marginTop: index % 2 != 0 ? 30 : 10,
              height: 250,
            },
          ]}>
          {/* <LinearGradient
          colors={['transparent', '#66553B']}
          style={Styles.cardBox}>
          <Text style={Styles.boxText}>{item.title}</Text>
        </LinearGradient> */}
        </ImageBackground>
      </TouchableOpacity>
    );
  };
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
      {/* {title()} */}
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplay600Italic,
            color: '#4A4A4A',
            fontSize: 20,
          }}>
          {check ? check[0] : null}
        </Text>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: '#4A4A4A',
              lineHeight: 23,
              fontFamily: Fonts.Assistant400,
            }}>
            {check ? check[1] : null}
          </Text>
        </View>
      </View>

      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => cards(item, index)}
      />
      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.ScrollContainer}>
        {cards}
      </ScrollView> */}
      {/* <View style={[Styles.containerBox, custumStyles]}>
        
        <View style={Styles.cardContainer}>
          
        </View>
      </View> */}
    </View>
  );
}

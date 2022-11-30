import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {image} from '../../../assets/images';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const width = Dimensions.get('window').width;
export default function ExchangeCard() {
  const [visible, setVisible] = useState(null);
  const handleClick = id => {
    setVisible(id);
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <FlatList
        // numColumns={3}
        horizontal
        // style={Styles.cardListContainer}
        showsHorizontalScrollIndicator={false}
        data={[0, 0, 0]}
        // data={carouselData}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => handleClick(index)}
                style={{
                  backgroundColor: '#FFFFFF',
                  width: width / 3.5,
                  elevation: 1,
                  marginRight: 10,
                  borderWidth: visible == index ? 2 : 0,
                  borderColor:
                    visible == index ? Colors.primarycolor : 'transparent',
                  marginVertical: 20,
                }}>
                <Image source={image.saree} style={{width: 'auto'}} />
                <View style={{padding: 5}}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: Fonts.Assistant400,
                      color: Colors.textcolor,
                    }}>
                    Cotton Silk Blo...
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: Fonts.Assistant700,
                      color: Colors.textcolor,
                    }}>
                    ₹3,500
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          );
        }}
      />
      {/* {[0, 0, 0].map(item => {
        return (
          <View
            style={{
              backgroundColor: '#FFFFFF',
              elevation: 1,
              width: width / 3.5,
              marginRight: 10,
            }}>
            <Image source={image.saree} />
            <View style={{padding: 5}}>
              <Text>Cotton Silk Blo...</Text>
              <Text>₹3,500</Text>
            </View>
          </View>
        );
      })} */}
    </View>
  );
}

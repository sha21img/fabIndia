import react, {useEffect, useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Fonts from '../../../assets/fonts';
import {Styles} from './style';

const JewelleryRange = ({
  title,
  JewelleryRangeData,
  customViewStyle = {},
  backgroundColor = '',
}) => {
  const [count, setCount] = useState([]);

  useEffect(() => {
    let d = JewelleryRangeData.length;
    let odd = [];
    let even = [];
    for (var i = 0; i < d; i++) {
      if (i % 2 == 0) {
        even.push(i);
      } else {
        odd.push(i);
      }
    }
    odd = odd.filter((el, index) => index % 2 == 0);
    even = even.filter((el, index) => index % 2 != 0);
    odd = [...odd, ...even];
    setCount(odd);
  }, []);

  const Cards = JewelleryRangeData.map((el, index) => {
    return (
      <>
        <ImageBackground
          key={Math.random() * 3726562}
          source={el.image}
          style={[
            Styles.CardBodyContainer,
            {
              height: count.includes(index) ? 147 : 270,
              marginTop: index % 2 == 0 && index % 4 != 0 ? 30 : 10,
            },
          ]}>
          <View
            style={{
              bottom: 0,
              position: 'absolute',
              paddingVertical: 10,
              paddingHorizontal: 12,
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: Fonts.Assistant400,
                fontSize: 16,
              }}>
              {el.name}
            </Text>
          </View>
        </ImageBackground>
      </>
    );
  });

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
      {title()}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.ScrollContainer}>
        {Cards}
      </ScrollView>
    </View>
  );
};

export default JewelleryRange;

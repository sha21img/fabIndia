import react, {useEffect, useState} from 'react';
import {Dimensions, ImageBackground, ScrollView, View} from 'react-native';
import { Styles } from './style';

const JewelleryRange = ({title, JewelleryRangeData}) => {
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
      <ImageBackground
        key={Math.random() * 3726562}
        source={el.image}
        style={[
          Styles.CardBodyContainer,
          {
            height: count.includes(index) ? 147 : 270,
            marginTop: index % 2 == 0 && index % 4 != 0 ? 50 : 20,
          },
        ]}></ImageBackground>
    );
  });

  return (
    <View style={{height: 556}}>
      <View
        style={Styles.GalleryContainer}>
        <View style={Styles.HeadingContainer}>{title()}</View>
        <View style={Styles.scrollingContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={Styles.ScrollContainer}>
            {Cards}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default JewelleryRange;

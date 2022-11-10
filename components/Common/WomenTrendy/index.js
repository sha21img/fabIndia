import React, {useEffect, useState} from 'react';
import {Dimensions, ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import { Styles } from './style';

const WomenTrendy = ({data = [], title, opacity=0.8}) => {
  const [count, setCount] = useState([]);

  useEffect(() => {
    let d = data.length;
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
  return (
    <>
      <View style={{width: Dimensions.get('window').width}}>
        {title()}
        <View style={Styles.GalleryContainer}>
          {data.map((item, index) => {
            return (
              <ImageBackground
                style={{height: 180, width: Dimensions.get('window').width / 2}}
                source={item.banner}>
                {count.includes(index) ? (
                  <View
                    style={[Styles.TextContainer, {opacity: opacity,}]}>
                    <Text
                      style={[Styles.TextData]}>
                      {item.Footer}
                    </Text>
                  </View>
                ) : (
                  <LinearGradient
                    colors={['transparent', Colors.primarycolor]}
                    style={Styles.LinearContainer}>
                    <Text style={Styles.LinearContainerText}>
                      {item.Footer}
                    </Text>
                  </LinearGradient>
                )}
              </ImageBackground>
            );
          })}
        </View>
      </View>
    </>
  );
};
export default WomenTrendy;

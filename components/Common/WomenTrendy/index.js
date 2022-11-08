import React, {useEffect, useState} from 'react';
import {Dimensions, ImageBackground, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

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
        <View style={{flexDirection: 'row', flexWrap: 'wrap', width: '100%'}}>
          {data.map((item, index) => {
            return (
              <ImageBackground
                style={{height: 180, width: Dimensions.get('window').width / 2}}
                source={item.banner}>
                {count.includes(index) ? (
                  <View
                    style={{
                      backgroundColor: Colors.primarycolor,
                      height: 180,
                      opacity: opacity,
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: Fonts.PlayfairDisplay600Italic,
                        fontSize: 26,
                        color: '#ffffff',
                      }}>
                      {item.Footer}
                    </Text>
                  </View>
                ) : (
                  <LinearGradient
                    colors={['transparent', Colors.primarycolor]}
                    style={{width:"100%", height:67, bottom:0, position:"absolute"}}>
                    <Text style={{fontSize: 16, color: '#ffffff', bottom:12, left:15, position:"absolute"}}>
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

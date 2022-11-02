import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Styles} from './styles';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

const ArCarousel = ({data = [], width, height}) => {
  const [imgActive1, setImgActive1] = React.useState(0);

  return (
    <>
      <View style={Styles.container}>
        <Carousel
          loop={true}
          pagingEnabled
          onScrollEnd={index => setImgActive1(index)}
          width={width}
          autoPlay={true}
          data={data}
          height={height}
          scrollAnimationDuration={1000}
          autoPlayInterval={3000}
          renderItem={item => {
            return (
              <View style={Styles.mainbox}>
                <Image
                  source={item.item.banner}
                  style={{height: 250, width: width}}
                  resizeMode="cover"
                />
                <View style={Styles.headingbox}>
                  <Text style={Styles.headingtxt}>Single Loft Bed</Text>
                  <View style={Styles.amountbox}>
                    <Text style={Styles.pricetxt}>₹800</Text>
                    <Text style={Styles.originalpricetxt}>1,000</Text>
                    <Text style={Styles.offertxt}>20% off</Text>
                  </View>
                  <View style={Styles.btncontainer}>
                    <TouchableOpacity style={Styles.arbox}>
                      <Text style={Styles.artxt}>View in AR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.optionbox}>
                      <Text style={Styles.optiontxt}>EMI Options</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          width: width,
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
        }}>
        {data.map((item, index) => (
          <Text
            style={
              imgActive1 == index
                ? {color: Colors.primarycolor}
                : {color: '#E5E5E5'}
            }>
            ●
          </Text>
        ))}
      </View>
    </>
  );
};

export default ArCarousel;

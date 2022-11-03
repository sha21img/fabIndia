import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import TopGallery from './TopGallery';
import HeaderBox from './HeaderBox';
import SummerGalary from '../../../../Common/SummerGalary';
import {image} from '../../../../../assets/images';
import Fonts from '../../../../../assets/fonts';
import CommonCarousel from '../../../../Common/CommonCarousel';
import {Colors} from '../../../../../assets/Colors';
const width = Dimensions.get('window').width;

const SummerGalaryData = [
  {image: image.womenPhoto1, name: 'Saris'},
  {image: image.womenPhoto2, name: 'Dresses'},
  {image: image.womenPhoto3, name: 'Tunics'},
  {image: image.womenPhoto4, name: 'Saris'},
];
const WomenCarouselText = () => {
  return (
    <>
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplay600Italic,
          fontSize: 26,
          color: 'white',
        }}>
        Add a monogram
      </Text>
      <Text
        style={{
          fontFamily: Fonts.Assistant400,
          fontSize: 16,
          color: 'white',
          marginTop: 5,
        }}>
        Give your linen a personality. Makes for a unique gift to a loved one,
        or a fun addition to your home!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#FFFFFF',
          padding: 10,
          borderRadius: 40,
          position: 'absolute',
          left: 20,
          bottom: 25,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: Colors.primarycolor,
            fontFamily: Fonts.Assistant400,
          }}>
          Add a monogram
        </Text>
      </TouchableOpacity>
    </>
  );
};
const WomenCarouselData = [
  {
    heading_btn: () => WomenCarouselText(),
    banner: image.WomenCarousel,
  },
  {
    heading_btn: () => WomenCarouselText(),
    banner: image.WomenCarousel,
  },
];
const getTitle = () => {
  return (
    <Text
      style={{
        fontFamily: Fonts.PlayfairDisplay600,
        color: '#4A4A4A',
        fontSize: 30,
        marginHorizontal: 20,
      }}>
      Custom apparel
    </Text>
  );
};
const CustomizeCatagory = () => {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <TopGallery />
      <HeaderBox />
      <SummerGalary
        data={SummerGalaryData}
        title={getTitle()}
        subtitles="Any way you like it!"
        backgroundColor="#F6EFE6"
        customViewStyle={{marginVertical: 30}}
      />
      <SummerGalary
        data={SummerGalaryData}
        title={getTitle()}
        subtitles="Any way you like it!"
        backgroundColor="#F6EFE6"
        customViewStyle={{marginVertical: 30}}
      />
      <CommonCarousel data={WomenCarouselData} width={width} height={410} />
      <SummerGalary
        data={SummerGalaryData}
        title={getTitle()}
        subtitles="Any way you like it!"
        backgroundColor="#F6EFE6"
        customViewStyle={{marginVertical: 30}}
      />
      <SummerGalary
        data={SummerGalaryData}
        title={getTitle()}
        subtitles="Any way you like it!"
        backgroundColor="#F6EFE6"
        customViewStyle={{marginVertical: 30}}
      />
      <SummerGalary
        data={SummerGalaryData}
        title={getTitle()}
        subtitles="Any way you like it!"
        backgroundColor="#F6EFE6"
        customViewStyle={{marginVertical: 30}}
      />
    </ScrollView>
  );
};

export default CustomizeCatagory;

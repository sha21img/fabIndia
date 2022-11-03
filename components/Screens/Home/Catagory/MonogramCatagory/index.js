import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import TopGallery from './TopGallery';
import {Styles} from './styles';
import HeaderBox from '../CustomizeCatagory/HeaderBox';
import SummerGalary from '../../../../Common/SummerGalary';
import Fonts from '../../../../../assets/fonts';
import {image} from '../../../../../assets/images';
import CommonBanner from '../../../../Common/CommonBanner';
const SummerGalaryData = [
  {image: image.womenPhoto1, name: 'Saris'},
  {image: image.womenPhoto2, name: 'Dresses'},
  {image: image.womenPhoto3, name: 'Tunics'},
  {image: image.womenPhoto4, name: 'Saris'},
];
const bannerHeading1 = () => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 26,
            color: 'white',
            fontFamily: Fonts.PlayfairDisplay700,
          }}>
          CUSTOMIZE
        </Text>
        <Text
          style={{
            fontSize: 26,
            paddingLeft: 4,
            color: 'white',
            fontFamily: Fonts.PlayfairDisplay400,
          }}>
          YOUR OWN
        </Text>
      </View>
      <Text
        style={{
          paddingVertical: 15,
          fontSize: 16,
          fontFamily: Fonts.Assistant400,
          color: 'white',
          lineHeight: 22,
        }}>
        Bring home Fabindia products that are designed by you, for you!
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          paddingVertical: 10,
          paddingHorizontal: 15,
          alignSelf: 'flex-start',
          borderRadius: 40,
          marginTop: 10,
          marginBottom: 5,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: '#903233',
          }}>
          Customize now
        </Text>
      </TouchableOpacity>
    </>
  );
};
const getTitle = () => {
  return (
    <Text
      style={{
        fontFamily: Fonts.PlayfairDisplay600,
        color: '#4A4A4A',
        fontSize: 30,
        marginHorizontal: 20,
        paddingTop: 48,
      }}>
      Custom apparel
    </Text>
  );
};
const MonogramCatagory = () => {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <TopGallery />
      <HeaderBox />
      <View style={{}}>
        <SummerGalary
          data={SummerGalaryData}
          title={getTitle()}
          subtitles="Any way you like it!"
          backgroundColor="#F6EFE6"
          customViewStyle={{marginTop: 20}}
        />
      </View>
      <CommonBanner
        heading={bannerHeading1}
        buttonText="Customize now"
        bgImage={image.banner1}
        customViewStyle={Styles.space}
      />
      <SummerGalary
        data={SummerGalaryData}
        title={getTitle()}
        subtitles="Any way you like it!"
        backgroundColor="#F6EFE6"
        customViewStyle={Styles.space}
      />
    </ScrollView>
  );
};

export default MonogramCatagory;

import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CommonCarousel from '../../Common/CommonCarousel';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import Details from './Details';
import Size_Color from './Size_Color';
import Popular from './Popular';
import Footer from './Footer';
import Art_Artist from './Art_Artist';
import CommonTopTab from '../../Common/CommonTopTab';
import {WomenTabdata} from '../../../constant';
import Customize from './Customize';
const width = Dimensions.get('window').width;

export default function ProductDetailed() {
  const WomenCarouselData = {
    banners:
      'FabHomepageSection14ABannerComponent FabHomepageSection14BBannerComponent',
    container: 'false',
    modifiedtime: '2022-07-27T16:17:04.554+05:30',
    name: 'FabBannerResponsiveCarouselComponent',
    parents:
      'FabHomepageSection14ABannerComponent FabHomepageSection14BBannerComponent',
    synchronizationBlocked: 'false',
    typeCode: 'FabBannerResponsiveCarouselComponent',
    uid: 'FabHomepageSection14CaroselComponent',
    uuid: 'eyJpdGVtSWQiOiJGYWJIb21lcGFnZVNlY3Rpb24xNENhcm9zZWxDb21wb25lbnQiLCJjYXRhbG9nSWQiOiJmYWJpbmRpYS1iMmNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
  };
  const WomenCarouselText = () => {
    return <></>;
  };
  const DetailsData = item => {
    return (
      <>
        <View style={{padding: 15, backgroundColor: 'white'}}>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 16,
              lineHeight: 22,
            }}>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
            incididunt ut labore et dole magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliq ex ea commodo
            consequat.
          </Text>
        </View>
      </>
    );
  };
  const screenObj = {
    Saris: DetailsData,
    Tunics: DetailsData,
    Kurtas: DetailsData,
    Dresses: DetailsData,
    'Tops Shirts': DetailsData,
    Pants: DetailsData,
  };
  const dataMap = WomenTabdata.map(item => ({
    title: item,
    card: screenObj[item],
  }));
  return (
    <>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
        <CommonCarousel
          data={WomenCarouselData}
          width={width}
          height={380}
          customStyle={{
            backgroundColor: '#F6F6F6',
          }}
        />
        <Details />
        <Size_Color customStyle={{marginTop: 20}} />
        <Customize
          heading="Get your linen monogrammed!"
          description="Add a personal touch to your bath linen with a
monogram. Ideal as a gift for a loved one, or 
an addition to your home."
          btnText="Add a monogram"
        />
        <CommonTopTab data={dataMap} />
        <Popular
          heading="Style it right!"
          description="This cotton kurta is super comfortable, breathable
and versatile. Team it with a pair of white PJs for the perfect work-from-home outfit, or with a pair of white jeans, silver danglers and juttis for a casual day at the office."
          data={[0, 0, 0, 0]}
          customStyle={{marginVertical: 10}}
        />
        <Art_Artist />
        <Popular
          customStyle={{marginVertical: 10}}
          heading="Frequently bought together"
          data={[0, 0, 0, 0]}
        />
        <Popular
          customStyle={{marginVertical: 10}}
          heading="More in Short kurtas"
          data={[0, 0, 0, 0]}
        />
        <Popular
          customStyle={{marginVertical: 10}}
          heading="More in Hand Block Print Short Kurtas"
          data={[0, 0, 0, 0]}
        />
      </ScrollView>
      <Footer oos={false} />
    </>
  );
}

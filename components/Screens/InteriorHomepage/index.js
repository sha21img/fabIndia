import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import CommonCarousel from '../../Common/CommonCarousel';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import {getData} from '../../Common/Helper';
import CommonCarousel1 from '../../Common/CommonCarousel/CommonCarousel1';
import InteriorSubSection from '../../Common/InteriorSubSection';

const width = Dimensions.get('window').width;
const InteriorPage = [
  'Section1', // Top Swipper
  'Section2', //Apparel highlight
  'Section3', //Duppatta highlight
  'Section4', // jewellery highlight
  'Section5', // Ethnic wear
  'Section6', // women toptab
];
const reachData = [
  {
    numbers: 120,
    txt: 'CITIES',
  },
  {
    numbers: 316,
    txt: 'STORIES',
  },
  {
    numbers: 10,
    txt: 'COUNTRIES',
  },
  {
    numbers: '55,000+',
    txt: 'ARTISANS',
  },
];
export default function InteriorHomepage(props) {
  const [filteredComp, setFilteredComp] = React.useState([]);

  React.useEffect(() => {
    getInitialData();
  }, []);
  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Finterior-designpage&lang=en&curr=INR',
    );
    // console.log('response.dataaa0000000000000000000', response);
    // console.log(
    //   'response?.contentSlots?.contentSlotresponse?.contentSlots?.contentSlotresponse?.contentSlots?.contentSlot',
    //   response?.contentSlots?.contentSlot,
    // );
    getSections(response.contentSlots.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    InteriorPage.map(sectionId => {
      const filter = data.find(item => {
        return item.position == sectionId;
      });
      dataa.push(filter?.components?.component[0]);
    });
    console.log('dataaaaaaa', dataa);
    setFilteredComp(dataa);
  };
  const checkSwitch = param => {
    // console.log('jijijij', param);
    switch (param?.typeCode) {
      case 'FabResponsiveBannerCarouselComponent':
        return (
          <CommonCarousel1
            {...props}
            data={param}
            width={width}
            height={200}
            // customStyle={{margin: 20}}
          />
        );
      case 'FabConfigGridBannerCarouselComponent':
        return (
          <>
            <View style={{alignItems: 'center', paddingVertical: 20}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 22,
                  fontFamily: Fonts.Assistant400,
                }}>
                {param.title}
              </Text>
            </View>
            <CommonCarousel1
              {...props}
              data={param}
              width={width}
              height={200}
              customStyle={{margin: 20}}
            />
          </>
        );
      case 'FabConfigBannerCarouselComponent':
        console.log('lijhghplkjhgvfc', param);
        if (param.title == 'INTERIOR DESIGN SERVICES')
          return (
            <>
              <View style={{alignItems: 'center', paddingVertical: 20}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 22,
                    fontFamily: Fonts.Assistant400,
                  }}>
                  {param.title}
                </Text>
              </View>
              <View>
                <Text style={{textAlign: 'center', marginBottom: 10}}>
                  {param.headline}
                </Text>
              </View>
              <InteriorSubSection data={param} {...props} />
            </>
          );
        else if (param.title == 'WHY IDS')
          return (
            <>
              <View style={{marginVertical: 25}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 22,
                    fontFamily: Fonts.Assistant400,
                    color: 'black',
                  }}>
                  {param.title}
                </Text>
              </View>
              <InteriorSubSection data={param} {...props} />
            </>
          );
        else if (param.title == 'OUR REACH')
          return (
            <>
              <View style={{marginVertical: 25}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 22,
                    fontFamily: Fonts.Assistant400,
                    color: 'black',
                  }}>
                  {param.title}
                </Text>
              </View>
              <InteriorSubSection data={param} {...props} />
            </>
          );
        else if (param.title == 'MEET OUR HAPPY CUSTOMER')
          return (
            <>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 22,
                    fontFamily: Fonts.Assistant400,
                    color: 'black',
                  }}>
                  {param.title}
                </Text>
                <Text style={{textAlign: 'center', marginVertical: 10}}>
                  {param.headline}
                </Text>
              </View>
              <InteriorSubSection data={param} {...props} />
            </>
          );

      default:
        return;
    }
  };
  return (
    <>
      <FlatList
        contentContainerStyle={{flexGrow: 1, backgroundColor: '#FFFFFF'}}
        data={filteredComp}
        keyExtractor={(item, index) => index}
        renderItem={item => checkSwitch(item.item)}
      />
    </>
  );
}

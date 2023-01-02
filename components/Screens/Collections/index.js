import {View, Text, ScrollView, Dimensions, FlatList} from 'react-native';
import React from 'react';
import WomenCollection from './WomenCollection';
import {Colors} from '../../../assets/Colors';
import {
  CollectionWomenData,
  KidsTableData2,
  ShopByCollections,
} from '../../../constant';
import CommonTopTab from '../../Common/CommonTopTab';
import Card from '../../Common/Card';
import KidsCards from './KidsCards';
import MenCollection from './MenCollection';
import Accessories from './Accessories';
import HomeProductCategory from './HomeProductCategory';
import FurnitureCollection from './FurnitureCollection';
import ArCarousel from '../../Common/ArCarousel';
import {image} from '../../../assets/images';
import Videos from '../../Common/Videos';
import Fonts from '../../../assets/fonts';
import TopVideo from './TopVideo';
import {getData} from '../../Common/Helper';
import CommonCarousel from '../../Common/CommonCarousel';
const width = Dimensions.get('window').width;

const data = [
  {
    banner: image.WomenCarousel,
  },
  {
    banner: image.WomenCarousel,
  },
];

export default function Collections(props) {
  const [dashboardData, setDashboardData] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);

  const CardCompo = item => {
    return (
      <>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            padding: 10,
            backgroundColor: Colors.backgroundColor,
          }}>
          <Card
            offer="20"
            originalprice="1,000"
            customViewStyle={{marginRight: 10}}
          />
          <Card customViewStyle={{marginRight: 10}} />
        </ScrollView>
      </>
    );
  };
  // Tab 1
  const screenObj = {
    Dupattas: CardCompo,
    Kurtas: CardCompo,
    Saris: CardCompo,
    Lehengas: CardCompo,
  };
  const dataMap = CollectionWomenData.map(item => ({
    name: item,
    screen: screenObj[item],
  }));

  const HomeScreen2 = item => {
    return <ArCarousel data={data} width={width / 1.07} height={380} />;
  };
  const screenObj3 = {
    Bestsellers: HomeScreen2,
    Furniture: HomeScreen2,
    'Games & Toys': HomeScreen2,
  };
  const dataMap2 = KidsTableData2.map(item => ({
    name: item,
    screen: screenObj3[item],
  }));
  const text = () => {
    return (
      <>
        <View
          style={{
            backgroundColor: '#C57B31',
            paddingVertical: 10,
            paddingHorizontal: 15,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            position: 'absolute',
            bottom: '10%',
          }}>
          <Text
            style={{
              fontFamily: Fonts.PlayfairDisplay700,
              fontSize: 30,
              color: 'white',
            }}>
            AJRAKH
          </Text>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 22,
              color: 'white',
              marginTop: 5,
            }}>
            Celebrating Traditions
          </Text>
        </View>
      </>
    );
  };
  const getSections = data => {
    var dataa = [];
    ShopByCollections.map(sectionId => {
      const filter = data.find(item => {
        return item.position == sectionId;
      });
      console.log('filterfilterfilter', filter);

      dataa.push(filter?.components?.component[0]);
    });
    setFilteredComp(dataa);
  };
  const getInitialData = async () => {
    const response = await getData('cms/pages?lang=en&curr=INR');
    setDashboardData(response.contentSlots.contentSlot);
    getSections(response.contentSlots.contentSlot);
  };
  React.useEffect(() => {
    getInitialData();
  }, []);
  // console.log('1234560-98765432', filteredComp);
  const checkSwitch = param => {
    switch (param?.typeCode) {
      case 'FabResponsiveBannerCarouselComponent':
        return (
          <CommonCarousel
            {...props}
            data={param}
            width={width / 1.07}
            height={200}
            customStyle={{margin: 20}}
          />
        );
      // case 'FabCmsLinkCarousalComponent':
      //   return <Catagory data={param} {...props} />;
      // case 'FabBannerCarouselComponent':
      //   return (
      //     <NewHighlights
      //       {...props}
      //       customStyle={{marginVertical: 20}}
      //       bgColor={{backgroundColor: '#F3E0E0'}}
      //       data={param}
      //     />
      //   );
      // case 'FabBannerResponsiveCarouselComponent':
      //   return (
      //     <CommonCarousel
      //       {...props}
      //       data={param}
      //       width={width / 1.07}
      //       height={200}
      //       customStyle={{margin: 20}}
      //     />
      //   );
      // case 'FabCMSTabContainer':
      //   return (
      //     <>
      //       <WomenTab data={param} {...props} />
      //     </>
      //   );
      // case 'FabResponsiveBannerCarouselComponent':
      //   return (
      //     <CommonCarousel
      //       {...props}
      //       data={param}
      //       width={width}
      //       height={200}
      //       customStyle={{margin: 20}}
      //     />
      //   );
      // case 'FabTitleCMSTabParagraphContainer':
      //   return (
      //     <>
      //       <Text
      //         style={{
      //           fontFamily: Fonts.PlayfairDisplay600Italic,
      //           fontSize: 20,
      //           paddingTop: 20,
      //           color: Colors.textcolor,
      //           marginLeft: 15,
      //         }}>
      //         Offers for you
      //       </Text>
      //       <OfferTab data={param} {...props} />
      //     </>
      //   );
      // case 'SimpleResponsiveBannerComponent':
      //   return <Interior data={param} {...props} />;
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
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          paddingBottom: 20,
          flexGrow: 1,
        }}>
         <TopVideo />
         <CommonTopTab data={dataMap} /> 
        <KidsCards customStyle={{paddingTop: 20}} />
        <WomenCollection customStyle={{paddingVertical: 15}} />
        <CommonTopTab data={dataMap} />
        <MenCollection customStyle={{paddingTop: 20}} />
        <CommonTopTab data={dataMap} />
        <Accessories customStyle={{paddingTop: 20}} />
        <CommonTopTab data={dataMap} />
        <View style={{paddingVertical: 20}}>
          <Text
            style={{
              fontFamily: Fonts.PlayfairDisplay600Italic,
              fontSize: 22,
              color: Colors.textcolor,
              paddingVertical: 10,
              paddingHorizontal: 15,
            }}>
            The story of our Ajrakh craft
          </Text>
          <Videos
            text={text}
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
        </View>
        <HomeProductCategory customStyle={{marginTop: 10}} />
        <CommonTopTab data={dataMap} />
        <FurnitureCollection customStyle={{marginTop: 10}} />
        <CommonTopTab data={dataMap} />

        <CommonTopTab data={dataMap2} /> 
      </ScrollView> */}
    </>
  );
}

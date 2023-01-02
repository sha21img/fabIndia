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
import CollectionTab from './CollectionTab';
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

  const getSections = data => {
    var dataa = [];
    ShopByCollections.map(sectionId => {
      const filter = data.find(item => {
        return item.position == sectionId;
      });
      // console.log('filterfilterfilter', filter);

      dataa.push(filter?.components?.component[0]);
    });
    setFilteredComp(dataa);
  };
  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Fwedding&lang=en&curr=INR',
    );
    setDashboardData(response.contentSlots.contentSlot);
    getSections(response.contentSlots.contentSlot);
  };
  React.useEffect(() => {
    getInitialData();
  }, []);
  // console.log('1234560-98765432', filteredComp);
  const checkSwitch = param => {
    // console.log('Checking switch', param?.typeCode);
    switch (param?.typeCode) {
      case 'FabResponsiveBannerCarouselComponent':
        return (
          <CommonCarousel
            data={[
              {
                _id: '63ad97fdbcb1a02702f7bc02',
                category: '63ad979cbcb1a02702f7bbfd',
                categoryData: {
                  Is_Active: true,
                  Name: 'Banner Four',
                  _id: '63ad979cbcb1a02702f7bbfd',
                  createdAt: '2022-12-29T13:35:24.534Z',
                  is_youtube: false,
                  sortorder: '29',
                  updatedAt: '2022-12-29T13:35:24.534Z',
                },
                categoryId: '63ad979cbcb1a02702f7bbfd',
                categoryName: 'Banner Four',
                createdAt: '2022-12-29T13:37:01.628Z',
                image:
                  'https://apisap.fabindiahome.com/medias/sys_master/root/hf7/hbd/9093790498846/wedding-sec1-mob-28oct22-1/wedding-sec1-mob-28oct22-1.jpg',
                is_enable: true,
                is_slider: true,
                landingPage:
                  ':creationtime-desc:allCategories:wedding:ibmCategories:Women:ibmCategories:Men:ibmCategories:Kids',
                sortorder: 1,
                title: 'Wedding Collection',
                updatedAt: '2022-12-30T13:44:54.649Z',
              },
              {
                _id: '63ad9820bcb1a02702f7bc07',
                category: '63ad979cbcb1a02702f7bbfd',
                categoryData: {
                  Is_Active: true,
                  Name: 'Banner Four',
                  _id: '63ad979cbcb1a02702f7bbfd',
                  createdAt: '2022-12-29T13:35:24.534Z',
                  is_youtube: false,
                  sortorder: '29',
                  updatedAt: '2022-12-29T13:35:24.534Z',
                },
                categoryId: '63ad979cbcb1a02702f7bbfd',
                categoryName: 'Banner Four',
                createdAt: '2022-12-29T13:37:36.501Z',
                image:
                  'https://apisap.fabindiahome.com/medias/sys_master/root/h26/hb7/9093790695454/wedding-sec1-mob-28oct22-2/wedding-sec1-mob-28oct22-2.jpg',
                is_enable: true,
                is_slider: true,
                landingPage: ':relevance:allCategories:wedding-home-living',
                sortorder: 2,
                title: 'Wedding Home & Living',
                updatedAt: '2022-12-30T13:45:01.782Z',
              },
            ]}
            width={width}
            height={278}
            {...props}
            // customStyle={{margin: 20}}
          />
        );
      case 'FabCollectionBannerCarouselComponent':
        return (
          <KidsCards customStyle={{paddingTop: 20}} {...props} data={param} />
        );
      case 'FabCMSTabParagraphContainer':
        return <CollectionTab {...props} data={param} />;
      case 'FabCollectionSpaceBannerCarouselComponent':
        return (
          <KidsCards customStyle={{paddingTop: 20}} {...props} data={param} />
        );
      case 'FabWeddingPageSection7TabContainer':
        return (
          <>
            <CollectionTab {...props} data={param} />
          </>
        );
      default:
        return;
    }
  };
  return (
    <>
      {filteredComp.length > 0 && (
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#FFFFFF',
            paddingBottom: 20,
          }}
          data={filteredComp}
          keyExtractor={(item, index) => index}
          renderItem={item => checkSwitch(item.item)}
        />
      )}
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

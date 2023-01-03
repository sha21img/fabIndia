import React from 'react';
import {Dimensions, ScrollView, Text} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import CommonCarousel from '../../../../Common/CommonCarousel';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
import {LandingPageFurniture} from '../../../../../constant';
import NewHighlights from '../../../../Common/NewHighlights';
import LifeStyle from '../../../../Common/LifeStyle';
import WomenTab from '../../Tabs.js/WomenTab';
import SingleBanner from '../../../../Common/SingleBanner';
import CollectionCard from '../../../../Common/CollectionCard';
import HomeHeader from '../../HomeHeader';
import NewHighlights1 from '../../../../Common/NewHighlights/NewHighlights1';
import TopSwiper1 from '../../../../Common/TopSwiper/TopSwiper1';
import CommonCarousel1 from '../../../../Common/CommonCarousel/CommonCarousel1';
const width = Dimensions.get('window').width;

const FurnitureCategory = props => {
  const {title} = props.route.params;

  const [active, setActive] = React.useState();
  const [active1, setActive1] = React.useState();
  const [sectionData, setSectionData] = React.useState([]);
  const [Ids, setIds] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);

  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Ffurniture&lang=en&curr=INR',
    );
    setSectionData(response?.contentSlots?.contentSlot);
    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPageFurniture.map(sectionId => {
      const filter = data.find(item => {
        return item.position == sectionId;
      });
      dataa.push(filter?.components?.component[0]);
    });
    setFilteredComp(dataa);
  };

  React.useEffect(() => {
    getInitialData();
  }, []);
  const checkSwitch = param => {
    switch (param?.typeCode) {
      //1
      case 'FabResponsiveGridBannerCarouselComponent':
        return <TopSwiper1 data={param} {...props} />;
      //2,3,4
      case 'FabBannerCarouselComponent':
        return (
          <NewHighlights1
            {...props}
            customStyle={{marginTop: 30}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={param}
          />
        );
      //5
      case 'FabOffersGridBannerCarouselComponent':
        return (
          <LifeStyle
            {...props}
            // data={LifeStyleData}
            data={param}
            // title={GetLifeStyleTitle}
            backgroundColor="#F8F2EF"
            customViewStyle={{marginVertical: 30}}
          />
        );
      //6
      case 'FabCMSTabContainer':
        return (
          <WomenTab data={param} {...props} />

          // <CommonCarousel data={param} width={width / 1.07} height={330} />
        );
      //7,8,9 empty
      // case 'SimpleResponsiveBannerComponent':
      //   return (
      //     <Image
      //       resizeMode="stretch"
      //       source={{
      //         uri: `https://apisap.fabindia.com/${param.media.mobile.url}`,
      //       }}
      //       style={{height: 300, width: width}}
      //     />
      //   );
      //10
      case 'FabResponsiveBannerCarouselComponent':
        return <SingleBanner data={param} {...props} />;
      //11,12 empty

      //  13

      case 'FabBannerResponsiveCarouselComponent':
        return (
          <CommonCarousel1
            data={param}
            width={width / 1.07}
            height={200}
            {...props}
          />
        );
      // 14
      case 'FabBannerL1ResponsiveCarouselComponent':
        return (
          <>
            <Text
              style={{
                marginLeft: 15,
                fontFamily: Fonts.PlayfairDisplay600Italic,
                fontSize: 20,
                color: Colors.textcolor,
                marginBottom: 10,
              }}>
              Collections
            </Text>
            <CollectionCard data={param} {...props} />
          </>
        );
      // CollectionCard
      // case 'CMSFlexComponent':
      //   return;
      default:
        return;
    }
  };

  return (
    <>
      <HomeHeader
        customViewStyle={{backgroundColor: '#FFFFFF'}}
        {...props}
        headertext={title}
      />

      <ScrollView
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          paddingBottom: 20,
          flexGrow: 1,
        }}>
        {filteredComp.map(item => {
          return checkSwitch(item);
        })}
      </ScrollView>
    </>
  );
};

export default FurnitureCategory;

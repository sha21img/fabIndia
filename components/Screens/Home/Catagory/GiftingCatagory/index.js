import React, {useState} from 'react';
import {ScrollView, Text, Dimensions, FlatList} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import {
  LandingPageL1Gifting,
  LandingPageL1Women,
} from '../../../../../constant';
import {getData} from '../../../../Common/Helper';
import HomeHeader from '../../HomeHeader';
import Carousel from './Carousel';
import ClassicsCards from './ClassicsCards';
import Occasion from './Occasion';
import TopBanner from './TopBanner';

const GiftingCatagory = props => {
  const {title} = props.route.params;

  const [dashboardData, setDashboardData] = React.useState([]);
  const [filteredComp, setFilteredComp] = useState([]);
  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Fgifting&lang=en&curr=INR',
    );
    setDashboardData(response?.contentSlots?.contentSlot);
    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPageL1Gifting.map(sectionId => {
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
    console.log('param.....', param);
    switch (param?.typeCode) {
      case 'FabResponsiveBannerCarouselComponent':
        return <TopBanner data={param} {...props} />;
      case 'FabBannerResponsiveCarouselComponent':
        const newSplit = param.banners.split(' ');
        console.log('param.banners.length < 3', newSplit.length);
        if (newSplit.length < 3) {
          return (
            <Carousel
              data={param}
              customStyles={{marginVertical: 10}}
              {...props}
            />
          );
        } else {
          return <Occasion data={param} {...props} />;
        }

      case 'FabProductCarouselComponent':
        return (
          <ClassicsCards
            data={param}
            customStyles={{marginVertical: 10}}
            {...props}
          />
        );
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

      <FlatList
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          paddingBottom: 20,
          flexGrow: 1,
        }}
        data={filteredComp}
        keyExtractor={(item, index) => index}
        renderItem={item => checkSwitch(item.item)}
      />
    </>
  );
};
export default GiftingCatagory;

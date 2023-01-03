import {
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import {LandingPageL1Food} from '../../../../../constant';
import CommonCarousel from '../../../../Common/CommonCarousel';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
import CollectionCard from '../../../../Common/CollectionCard';
import SingleBanner from '../../../../Common/SingleBanner';
import WomenTab from '../../Tabs.js/WomenTab';
import LifeStyle from '../../../../Common/LifeStyle';
import NewHighlights from '../../../../Common/NewHighlights';
import CommonTitleTab from '../../../../Common/CommonTitleTab';
import HomeHeader from '../../HomeHeader';
const width = Dimensions.get('window').width;

export default function FoodCatagory(props) {
  const {title} = props.route.params;

  const [filteredComp, setFilteredComp] = useState([]);

  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2FFood&lang=en&curr=INR',
    );
    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPageL1Food.map(sectionId => {
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
      case 'FabResponsiveGridBannerCarouselComponent':
        return <TopSwiper data={param} />;
      case 'FabBannerCarouselComponent':
        return (
          <NewHighlights
            {...props}
            customStyle={{marginVertical: 10}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={param}
          />
        );
      case 'FabOffersGridBannerCarouselComponent':
        return (
          <LifeStyle
            {...props}
            // data={LifeStyleData}
            data={param}
            // title={GetLifeStyleTitle}
            backgroundColor="#F8F2EF"
          />
        );
      case 'FabTitleCMSTabContainer':
        return <CommonTitleTab data={param} {...props} />;
      case 'FabCMSTabContainer':
        return (
          <WomenTab data={param} {...props} />

          // <CommonCarousel data={param} width={width / 1.07} height={330} />
        );
      case 'SimpleResponsiveBannerComponent':
        console.log('Food category', param);
        const newCode = param.urlLink;
        let splitURL = newCode.split('/');
        splitURL = splitURL[splitURL.length - 1];
        let a = splitURL.split('?');
        console.log('paramparamparamparamparamparam', param);
        const newId = {
          code: a[a.length - 1].includes('query') ? a[1] : a[0],
          status: a[a.length - 1].includes('query'),
          title: param.title,
          // title: filteredObj.title || filteredObj.media.mobile.altText,
        };
        return (
          // <TouchableOpacity
          //   onPress={() =>
          //     props.navigation.navigate('LandingPageSaris_Blouses', {
          //       code: splitURL.split('?')[0],
          //       title: param.media.mobile.altText,
          //     })
          //   }>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              props.navigation.navigate('LandingPageSaris_Blouses', newId)
            }>
            <Image
              resizeMode="stretch"
              source={{
                uri: `https://apisap.fabindia.com/${param.media.mobile.url}`,
              }}
              style={{height: 238, width: width}}
            />
          </TouchableOpacity>
        );
      // section8 grid
      //section 9 empty
      case 'FabResponsiveBannerCarouselComponent':
        return <SingleBanner data={param} {...props} />;

      case 'FabBannerResponsiveCarouselComponent':
        return (
          <CommonCarousel
            {...props}
            data={param}
            width={width / 1.07}
            height={200}
            customStyle={{marginVertical: 20}}
          />
        );
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
}

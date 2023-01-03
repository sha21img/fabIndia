import React from 'react';
import {
  Text,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import {LandingPageL1Women} from '../../../../../constant';
import CollectionCard from '../../../../Common/CollectionCard';
import CommonCarousel from '../../../../Common/CommonCarousel';
import CommonImageGrid from '../../../../Common/CommonImageGrid';
import {getData} from '../../../../Common/Helper';
import LifeStyle from '../../../../Common/LifeStyle';
import NewHighlights from '../../../../Common/NewHighlights';
import SingleBanner from '../../../../Common/SingleBanner';
import TopSwiper from '../../../../Common/TopSwiper';
import HomeHeader from '../../HomeHeader';
import WomenTab from '../../Tabs.js/WomenTab';
const width = Dimensions.get('window').width;

const WomenCategory = props => {
  const {title} = props.route.params;

  const [imgActive1, setImgActive1] = React.useState(0);
  const [active, setActive] = React.useState('');

  const [filteredComp, setFilteredComp] = React.useState([]);
  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Fwomen&lang=en&curr=INR',
    );
    getSections(response?.contentSlots?.contentSlot);
  };

  const getSections = data => {
    var dataa = [];
    LandingPageL1Women.map(sectionId => {
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
        return <TopSwiper data={param} {...props} />;
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
            customViewStyle={{marginVertical: 20}}
            // data={LifeStyleData}
            data={param}
            // title={GetLifeStyleTitle}
            backgroundColor="#F8F2EF"
          />
        );
      case 'FabCMSTabContainer':
        return (
          <WomenTab data={param} {...props} />

          // <CommonCarousel data={param} width={width / 1.07} height={330} />
        );
      case 'SimpleResponsiveBannerComponent':
        const newCode = param.urlLink;
        let splitURL = newCode.split('/');
        splitURL = splitURL[splitURL.length - 1];
        return (
          <>
            <TouchableOpacity
              style={{marginTop: 20}}
              activeOpacity={0.8}
              onPress={() =>
                props.navigation.navigate('LandingPageSaris_Blouses', {
                  code: splitURL.split('?')[0],
                  title: param.title,
                })
              }>
              <Image
                resizeMode="stretch"
                source={{
                  uri: `https://apisap.fabindia.com/${param.media.mobile.url}`,
                }}
                style={{height: 213, width: width}}
              />
            </TouchableOpacity>
          </>
        );
      // section8 grid
      case 'FabBannerResponsiveTableComponent':
        return <CommonImageGrid {...props} data={param} />;
      // case 'FabBannerResponsiveTableComponent':
      //   return <CategoryGrid data={param} {...props} />;
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
};
export default WomenCategory;

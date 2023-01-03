import {
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import NewHighlights from '../../../../Common/NewHighlights';
import {LandingPageL1Men} from '../../../../../constant';
import {Colors} from '../../../../../assets/Colors';
import CommonCarousel from '../../../../Common/CommonCarousel';
import Fonts from '../../../../../assets/fonts';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
import LifeStyle from '../../../../Common/LifeStyle';
import WomenTab from '../../Tabs.js/WomenTab';
import SingleBanner from '../../../../Common/SingleBanner';
import CollectionCard from '../../../../Common/CollectionCard';
import CommonImageGrid from '../../../../Common/CommonImageGrid';
import HomeHeader from '../../HomeHeader';
const width = Dimensions.get('window').width;

const MenCatagory = props => {
  const {title} = props.route.params;
  const [active, setActive] = React.useState('Bestsellers');
  const [imgActive1, setImgActive1] = React.useState(0);
  const [sectionsData, setSectionsData] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);

  const [Ids, setIds] = React.useState([]);
  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Fmen&lang=en&curr=INR',
    );
    console.log('Men Catagory response', response);
    setSectionsData(response?.contentSlots?.contentSlot);
    // getIds(response.contentSlots.contentSlot);
    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPageL1Men.map(sectionId => {
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
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginTop: 20}}
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
              style={{height: 300, width: width}}
            />
          </TouchableOpacity>
        );

      // section8 grid
      case 'FabBannerResponsiveTableComponent':
        return <CommonImageGrid {...props} data={param} />;
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

export default MenCatagory;

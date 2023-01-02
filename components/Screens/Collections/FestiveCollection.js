import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {getData} from '../../Common/Helper';
import {FestiveCollections} from '../../../constant';
import CommonCarousel from '../../Common/CommonCarousel';
import KidsCards from './KidsCards';
import CollectionTab from './CollectionTab';
const width = Dimensions.get('window').width;

const FestiveCollection = props => {
  const [dashboardData, setDashboardData] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);

  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Ffestive&lang=en&curr=INR',
    );
    console.log(response);
    setDashboardData(response.contentSlots.contentSlot);
    getSections(response.contentSlots.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    FestiveCollections.map(sectionId => {
      const filter = data.find(item => {
        return item.position == sectionId;
      });
      // console.log('filterfilterfilter', filter);

      dataa.push(filter?.components?.component[0]);
    });
    setFilteredComp(dataa);
  };
  React.useEffect(() => {
    getInitialData();
  }, []);
  const checkSwitch = param => {
    // console.log('Checking switch', param?.typeCode);
    switch (param?.typeCode) {
      case 'FabResponsiveBannerCarouselComponent':
        return (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('LandingPageSaris_Blouses', {
                code: ':relevance:allCategories:festive',
                title: 'Festive',
                isAdmin2: 'isAdmin2',
              });
            }}>
            <Image
              source={{
                uri: 'https://apisap.fabindiahome.com/medias/sys_master/root/hda/ha2/9087728517150/festive-collp-mob-sec1img1/festive-collp-mob-sec1img1.jpg',
              }}
              style={{height: 228, width: width}}
            />
          </TouchableOpacity>
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
      //   case 'FabWeddingPageSection7TabContainer':
      //     return (
      //       <>
      //         <CollectionTab {...props} data={param} />
      //       </>
      //     );
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
    </>
  );
};

export default FestiveCollection;

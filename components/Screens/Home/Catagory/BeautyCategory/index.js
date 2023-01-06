import {ScrollView, Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../../../../assets/Colors';
import {LandingPagePersonalCare} from '../../../../../constant';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
import NewHighlights from '../../../../Common/NewHighlights';
import CommonTitleTab from '../../../../Common/CommonTitleTab';
import HomeHeader from '../../HomeHeader';
const width = Dimensions.get('window').width;

export default function BeautyCategory(props) {
  const {title} = props.route.params;

  const [active, setActive] = React.useState('Bestsellers');
  const [dashboardData, setDashboardData] = React.useState([]);

  const [sectionsData, setSectionsData] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);
  const [Ids, setIds] = React.useState([]);
  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Fpersonal-care&lang=en&curr=INR',
    );
    setSectionsData(response?.contentSlots?.contentSlot);

    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPagePersonalCare.map(sectionId => {
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
        return <TopSwiper data={param} {...props} />;
      //  2,3,4
      case 'FabBannerCarouselComponent':
        return (
          <NewHighlights
            {...props}
            customStyle={{marginVertical: 10}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={param}
          />
        );
      //5 not present

      //6
      case 'FabCMSTabContainer':
        //   return <WomenTab data={param} />;
        return <CommonTitleTab data={param} {...props} />;

      //7
      case 'SimpleResponsiveBannerComponent':
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

        console.log('split...................', splitURL.split('?')[1]);
        // let splitURL = newCode.split('=')[1];
        // console.log('Adding', splitURL);

        return (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              props.navigation.navigate('LandingPageSaris_Blouses', newId)
            }>
            <Image
              resizeMode="stretch"
              source={{
                uri: `https://apisap.fabindia.com/${param.media.mobile.url}`,
              }}
              style={{height: 296, width: width}}
            />
          </TouchableOpacity>
        );

      //8,9,10 empty
      //11 not present
      //12 empty
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
        showsVerticalScrollIndicator={false}
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
}

import {
  Text,
  Dimensions,
  ScrollView,
  FlatList,
  BackHandler,
  Alert,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Catagory from './Catagory';
import NewHighlights from '../../Common/NewHighlights';
import CommonCarousel from '../../Common/CommonCarousel/index';
import {HomePageSection} from '../../../constant';
import {Colors} from '../../../assets/Colors';
import Interior from './Interior';
import Fonts from '../../../assets/fonts';
import TopSwiper from '../../Common/TopSwiper';
import axios from 'axios';
import {AuthBaseUrl2, getCartID, getData} from '../../Common/Helper';
import WomenTab from './Tabs.js/WomenTab';
import OfferTab from './Tabs.js/OfferTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
const width = Dimensions.get('window').width;
import {withNavigationFocus} from 'react-navigation';
import YoutubeVideo from '../YoutubeVideo';
import OfferForYou from '../OfferForYou';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function Dashbord(props) {
  const [active, setActive] = React.useState('Bestsellers');
  const [dashboardData, setDashboardData] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  const handleBackButton = () => {
    if (props.navigation.isFocused()) {
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => BackHandler.exitApp(),
          },
        ],
        {
          cancelable: false,
        },
      );
      return true;
    }
  };

  const getInitialCartID = async () => {
    const cartId = await AsyncStorage.getItem('cartID');
    console.log('cartId==>', cartId);
    cartId == null && getCartID();
  };
  const generatTokenWithout = async () => {
    await axios
      .post(
        `${AuthBaseUrl2}/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
      )
      .then(
        response => {
          console.log(
            'response-=-=-=-=-=-generatTokenWithoutaa',
            response.data,
          );
          AsyncStorage.setItem(
            'generatToken',
            JSON.stringify({...response.data, isCheck: false}),
          );
        },
        error => {
          console.log('response-=-=-=-=-=-error', error);
        },
      );
  };
  const checkToken = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    console.log('asdfasdfasdfasdf', JSON.parse(get));
    if (getToken == null) {
      await generatTokenWithout();
      await getInitialCartID();
    }
  };
  useEffect(
    React.useCallback(() => {
      checkToken();
    }, []),
  );

  const HomPageSections = {
    Categorymenu: '63aab8dc15519f83a59729df',
    Mainslider: '63aab8b715519f83a59729d7',
    NewInWomen: '63aad98915519f83a5972aa6',
    BannerWomen: '63ae8541bcb1a02702f7be1a',
    NewInMen: '63aadb1815519f83a5972ab4',
    BannerMen: '63aadab915519f83a5972aad',
    NewInKids: '63aadbd215519f83a5972ac1',
    BannerKids: '63ad7b23bcb1a02702f7bb0c',
    // offer
    offerWomen: '63ad9230bcb1a02702f7bb9f',
    offerMen: '63ad9067bcb1a02702f7bb87',
    offerKids: '63ad923cbcb1a02702f7bba4',
    offerHome: '63ad9244bcb1a02702f7bba9',

    Interior: '63ad95f5bcb1a02702f7bbd8',
    NewInHome: '63ad96b4bcb1a02702f7bbe6',
    BannerHome: '63ad979cbcb1a02702f7bbfd',
    BannerLiving: '63ad983cbcb1a02702f7bc10',
  };
  const getNewHomeData = async () => {
    const response = await axios.get(
      'http://159.89.164.11:3030/homepage/getForApp',
    );
    setDashboardData(response.data.data);
    console.log('this is a eresponse of pageXOffset', response.data.data);
  };
  const getSections = data => {
    var dataa = [];
    HomePageSection.map(sectionId => {
      const filter = data.find(item => {
        return item.position == sectionId;
      });
      dataa.push(filter?.components?.component[0]);
    });
    console.log('dataadataadataa', dataa);
    setFilteredComp(dataa);
  };
  const getInitialData = async () => {
    const response = await getData('cms/pages?lang=en&curr=INR');
    getSections(response.contentSlots.contentSlot);
  };
  React.useEffect(() => {
    getInitialData();
    getNewHomeData();
  }, []);

  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        {Array.isArray(dashboardData[HomPageSections.Categorymenu]) && (
          <Catagory
            data={dashboardData?.[HomPageSections.Categorymenu]}
            {...props}
            isAdmin2={'isAdmin2'}
            customStyle={{paddingVertical: 10}}
          />
        )}
        {Array.isArray(dashboardData[HomPageSections.Mainslider]) && (
          <TopSwiper
            isAdmin2={'isAdmin2'}
            data={dashboardData?.[HomPageSections.Mainslider]}
            {...props}
          />
        )}
        {Array.isArray(dashboardData[HomPageSections.NewInWomen]) && (
          <NewHighlights
            {...props}
            isAdmin2={'isAdmin2'}
            customStyle={{marginVertical: 20}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={dashboardData?.[HomPageSections.NewInWomen]}
          />
        )}
        {Array.isArray(dashboardData[HomPageSections.BannerWomen]) && (
          <CommonCarousel
            {...props}
            data={dashboardData?.[HomPageSections.BannerWomen]}
            width={width / 1.07}
            isAdmin2={'isAdmin2'}
            height={200}
            customStyle={{margin: 20}}
          />
        )}
        {Array.isArray(filteredComp) && (
          <WomenTab data={filteredComp[0]} {...props} />
        )}
        {Array.isArray(dashboardData[HomPageSections.NewInMen]) && (
          <NewHighlights
            {...props}
            isAdmin2={'isAdmin2'}
            customStyle={{marginVertical: 20}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={dashboardData?.[HomPageSections.NewInMen]}
          />
        )}
        {Array.isArray(dashboardData[HomPageSections.BannerMen]) && (
          <CommonCarousel
            {...props}
            data={dashboardData?.[HomPageSections.BannerMen]}
            width={width / 1.07}
            isAdmin2={'isAdmin2'}
            height={200}
            customStyle={{margin: 20}}
          />
        )}
        {Array.isArray(filteredComp) && (
          <WomenTab data={filteredComp[1]} {...props} />
        )}
        {Array.isArray(dashboardData[HomPageSections.NewInKids]) && (
          <NewHighlights
            {...props}
            isAdmin2={'isAdmin2'}
            customStyle={{marginVertical: 20}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={dashboardData?.[HomPageSections.NewInKids]}
          />
        )}
        {Array.isArray(dashboardData[HomPageSections.BannerKids]) && (
          <CommonCarousel
            {...props}
            data={dashboardData?.[HomPageSections.BannerKids]}
            isAdmin2={'isAdmin2'}
            width={width / 1.07}
            height={200}
            customStyle={{margin: 20}}
          />
        )}
        {Array.isArray(filteredComp) && (
          <WomenTab data={filteredComp[2]} {...props} />
        )}
        {/* long card */}
        {Array.isArray(dashboardData[HomPageSections.offerWomen]) && (
          <OfferForYou
            isAdmin2={'isAdmin2'}
            dataWomen={dashboardData[HomPageSections.offerWomen]}
            dataMen={dashboardData[HomPageSections.offerMen]}
            dataKids={dashboardData[HomPageSections.offerKids]}
            dataHome={dashboardData[HomPageSections.offerHome]}
          />
        )}
        {Array.isArray(dashboardData[HomPageSections.Interior]) && (
          <Interior
            data={dashboardData?.[HomPageSections.Interior]}
            isAdmin2={'isAdmin2'}
            {...props}
          />
        )}
        {Array.isArray(dashboardData[HomPageSections.NewInHome]) && (
          <NewHighlights
            isAdmin2={'isAdmin2'}
            {...props}
            customStyle={{marginVertical: 20}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={dashboardData?.[HomPageSections.NewInHome]}
          />
        )}
        {Array.isArray(dashboardData[HomPageSections.BannerHome]) && (
          <CommonCarousel
            {...props}
            data={dashboardData?.[HomPageSections.BannerHome]}
            isAdmin2={'isAdmin2'}
            width={width / 1.07}
            height={200}
            customStyle={{margin: 20}}
          />
        )}
        {Array.isArray(filteredComp) && (
          <WomenTab data={filteredComp[3]} {...props} />
        )}
        {Array.isArray(dashboardData[HomPageSections.BannerLiving]) && (
          <CommonCarousel
            {...props}
            data={dashboardData?.[HomPageSections.BannerLiving]}
            isAdmin2={'isAdmin2'}
            width={width / 1.07}
            height={200}
            customStyle={{margin: 20}}
          />
        )}
        <YoutubeVideo />
      </ScrollView>
    </>
  );
}

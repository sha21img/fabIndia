import {
  Dimensions,
  ScrollView,
  BackHandler,
  Alert,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Catagory from './Catagory';
import NewHighlights from '../../Common/NewHighlights';
import CommonCarousel from '../../Common/CommonCarousel/index';
import {HomePageSection} from '../../../constant';
import {Colors} from '../../../assets/Colors';
import Interior from './Interior';
import TopSwiper from '../../Common/TopSwiper';
import axios from 'axios';
import {AuthBaseUrl2, getCartID, getData} from '../../Common/Helper';
import WomenTab from './Tabs.js/WomenTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
const width = Dimensions.get('window').width;
import YoutubeVideo from '../YoutubeVideo';
import OfferForYou from '../OfferForYou';
import {withNavigationFocus} from 'react-navigation';
import {useDispatch} from 'react-redux';

export default function Dashbord(props) {
  const dispatch = useDispatch();
  const [active, setActive] = React.useState('Bestsellers');
  const [dashboardData, setDashboardData] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

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
    cartId == null && getCartID(dispatch);
  };

  const generatTokenWithout = async () => {
    await axios
      .post(
        `${AuthBaseUrl2}/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
      )
      .then(
        response => {
          // console.log('response', response.data);
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
    BannerWomen: '63aadb5815519f83a5972aba',
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
    youtube: '63abc289c349c715bd92dadd',
  };

  const getNewHomeData = async () => {
    setLoading(true);
    const response = await axios
      .get('http://159.89.164.11:3030/homepage/getForApp')
      .then(response => {
        console.log('oiuytrfghj', response.data.data);
        setDashboardData(response.data.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('eeeeeeeeeeeeeeee', err);
      });
  };

  const getSections = data => {
    var dataa = [];
    HomePageSection.map(sectionId => {
      const filter = data.find(item => {
        return item.position == sectionId;
      });
      dataa.push(filter?.components?.component[0]);
    });
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
        {dashboardData?.[HomPageSections.Categorymenu]?.length > 0 ? (
          <Catagory
            data={dashboardData?.[HomPageSections.Categorymenu]}
            {...props}
            isAdmin2={'isAdmin2'}
            customStyle={{paddingVertical: 10}}
          />
        ) : null}
        {dashboardData?.[HomPageSections.Mainslider]?.length > 0 ? (
          <TopSwiper
            isAdmin2={'isAdmin2'}
            data={dashboardData?.[HomPageSections.Mainslider]}
            {...props}
          />
        ) : null}
        {dashboardData?.[HomPageSections.NewInWomen]?.length > 0 ? (
          <NewHighlights
            {...props}
            isAdmin2={'isAdmin2'}
            customStyle={{marginVertical: 20}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={dashboardData?.[HomPageSections.NewInWomen]}
          />
        ) : null}
        {dashboardData?.[HomPageSections.BannerWomen]?.length > 0 ? (
          <CommonCarousel
            {...props}
            data={dashboardData?.[HomPageSections.BannerWomen]}
            width={width / 1.07}
            isAdmin2={'isAdmin2'}
            height={200}
            customStyle={{margin: 20}}
          />
        ) : null}
        {filteredComp.length > 0 ? (
          <WomenTab data={filteredComp[0]} {...props} />
        ) : null}
        {dashboardData?.[HomPageSections.NewInMen]?.length > 0 ? (
          <NewHighlights
            {...props}
            isAdmin2={'isAdmin2'}
            customStyle={{marginVertical: 20}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={dashboardData?.[HomPageSections.NewInMen]}
          />
        ) : null}
        {dashboardData?.[HomPageSections.BannerMen]?.length > 0 ? (
          <CommonCarousel
            {...props}
            data={dashboardData?.[HomPageSections.BannerMen]}
            width={width / 1.07}
            isAdmin2={'isAdmin2'}
            height={200}
            customStyle={{margin: 20}}
          />
        ) : null}
        {filteredComp.length > 0 ? (
          <WomenTab data={filteredComp[1]} {...props} />
        ) : null}
        {dashboardData?.[HomPageSections.NewInKids]?.length > 0 ? (
          <NewHighlights
            {...props}
            isAdmin2={'isAdmin2'}
            customStyle={{marginVertical: 20}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={dashboardData?.[HomPageSections.NewInKids]}
          />
        ) : null}
        {dashboardData?.[HomPageSections.BannerKids]?.length > 0 ? (
          <CommonCarousel
            {...props}
            data={dashboardData?.[HomPageSections.BannerKids]}
            isAdmin2={'isAdmin2'}
            width={width / 1.07}
            height={200}
            customStyle={{margin: 20}}
          />
        ) : null}
        {filteredComp.length > 0 ? (
          <WomenTab data={filteredComp[2]} {...props} />
        ) : null}
        <OfferForYou
          isAdmin2={'isAdmin2'}
          dataWomen={dashboardData[HomPageSections.offerWomen]}
          dataMen={dashboardData[HomPageSections.offerMen]}
          dataKids={dashboardData[HomPageSections.offerKids]}
          dataHome={dashboardData[HomPageSections.offerHome]}
        />
        {dashboardData?.[HomPageSections.Interior]?.length > 0 ? (
          <Interior
            data={dashboardData?.[HomPageSections.Interior]}
            isAdmin2={'isAdmin2'}
            {...props}
          />
        ) : null}
        {dashboardData?.[HomPageSections.NewInHome]?.length > 0 ? (
          <NewHighlights
            isAdmin2={'isAdmin2'}
            {...props}
            customStyle={{marginVertical: 20}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={dashboardData?.[HomPageSections.NewInHome]}
          />
        ) : null}
        {dashboardData?.[HomPageSections.BannerHome]?.length > 0 ? (
          <CommonCarousel
            {...props}
            data={dashboardData?.[HomPageSections.BannerHome]}
            isAdmin2={'isAdmin2'}
            width={width / 1.07}
            height={200}
            customStyle={{margin: 20}}
          />
        ) : null}
        {filteredComp.length > 0 ? (
          <WomenTab data={filteredComp[3]} {...props} />
        ) : null}
        {dashboardData?.[HomPageSections.BannerLiving]?.length > 0 ? (
          <CommonCarousel
            {...props}
            data={dashboardData?.[HomPageSections.BannerLiving]}
            isAdmin2={'isAdmin2'}
            width={width / 1.07}
            height={200}
            customStyle={{margin: 20}}
          />
        ) : null}
        <YoutubeVideo data={dashboardData?.[HomPageSections.youtube]} />
        {loading ? (
          <View
            style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              elevation: 0,
            }}>
            <ActivityIndicator size="large" color={Colors.primarycolor} />
          </View>
        ) : null}
      </ScrollView>
    </>
  );
}

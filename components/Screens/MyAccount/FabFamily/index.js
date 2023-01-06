import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import AboutFabFamily from './AboutFabFamily';
import Benefits from './Benefits';
import Membership from './Membership';
import ReferFriend from './ReferFriend';
import AlreadyMember from './AlreadyMember';
import {image} from '../../../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import CommonTopTab from '../../../Common/CommonTopTab';
import {FabFamilyTabData} from '../../../../constant';
import {WebView} from 'react-native-webview';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../../Common/Header';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Colors} from '../../../../assets/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {BaseURL2, logout} from '../../../Common/Helper';
import {useDispatch} from 'react-redux';
import FabFamilyContent from './FabFamilyContent';
export default function FabFamily(props) {
  const dispatch = useDispatch();
  const [referCode, setReferCode] = React.useState(null);
  const [userDetail, setuserDetail] = React.useState('');
  const [loyalityPoints, setLoyalityPoints] = React.useState({});
  const screenObj = {
    'About FabFamily': AboutFabFamily,
    Benefits: Benefits,
    Membership: Membership,
    'Refer a friend': ReferFriend,
  };
  const getUserDetail = async () => {
    console.log('getUserDetailgetUserDetailgetUserDetail');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    await axios
      .get(`${BaseURL2}/users/current?lang=en&curr=INR`, {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      })
      .then(response => {
        console.log('respohhhhhhhhhhhhhhhhhhhhhhhhhhh', response.data);
        setuserDetail(response.data);
        getMemberlist(response.data.contactNumber);
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  const getMemberlist = async mobile => {
    console.log('mobile', mobile);
    const data = await AsyncStorage.getItem('fabToken');
    const parseData = JSON.parse(data);
    console.log('parseDataparseData', parseData.token);

    await axios
      .get(`https://api.apm20.gravty.io/v1/members/list/?mobile=${mobile}`, {
        headers: {
          'x-api-key': 'ZIhuq8Igby1qOyhu1nnsb6JL5ibQJ2sf6V968DLk',
          'Content-Type': 'application/json',
          Authorization: `JWT ${parseData.token}`,
        },
      })
      .then(response => {
        console.log('responskjhgfghjkl', response.data);
        setReferCode(response.data[0].member_id);
      })
      .catch(err => {
        console.log('errkoihugyf', err);
      });
  };

  const getLoyalityPoints = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios
      .get(`${BaseURL2}users/current/userLoyaltyPoint?lang=en&curr=INR`, {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      })
      .then(response => {
        console.log('response for loyality points', response.data);
        setLoyalityPoints(response.data);
      })
      .catch(error => {
        console.log('erro', error);
      });
  };
  
  useEffect(() => {
    getUserDetail();
    getLoyalityPoints();
  }, []);
  const dataMap = FabFamilyTabData.map(item => ({
    referCode: referCode,
    userDetail: userDetail,
    title: item,
    card: screenObj[item],
  }));
  const leftIcon = (
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <SimpleLineIcons
        name="arrow-left"
        color={Colors.primarycolor}
        size={20}
      />
    </TouchableOpacity>
  );

  const rightIcon = (
    <AntDesign name="profile" color={Colors.primarycolor} size={25} />
  );
  const handleClick = () => {
    console.log('referCode11', referCode);
    props.navigation.navigate('AlreadyMember', {referCode: referCode});
  };
  return (
    <>
      {/* <WebView
        originWhitelist={['*']}
        style={{backgroundColor: '#fff'}}
        source={{uri: 'https://www.fabfamily.fabindia.com/abouttheprogram'}}
      /> */}
      <Header
        handleClick={handleClick}
        title="FabFamily"
        right={false}
        customStyle={{
          backgroundColor: '#F8F6F5',
          marginBottom: 4,
        }}
      />

      <FabFamilyContent {...props} loyalityPoints={loyalityPoints} />

        {/* <ImageBackground
          resizeMode="cover"
          source={image.fabfamily}
          style={{
            height: 210,
            width: '100%',
            overflow: 'hidden',
            backgroundColor: 'rgba(144, 50, 51, 0.5)',
          }}>
          <LinearGradient
            colors={['rgba(144, 50, 51, 0.4)', 'rgba(144, 50, 51, 0.4)']}
            style={{height: 210}}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}></LinearGradient>
          <Image
            source={image.fabfamilyflower}
            style={{position: 'absolute', right: 0, bottom: 0}}
          />
        </ImageBackground>
      {!!referCode ? <CommonTopTab data={dataMap} /> : null} */}
    </>
  );
}

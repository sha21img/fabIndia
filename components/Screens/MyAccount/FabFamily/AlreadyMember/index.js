import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import CommonTopTab from '../../../../Common/CommonTopTab';
import CongratulationModal from './CongratulationsModal';
import ThankYouModal from './ThankYouModal';
import YourCardAndBenefits from './YourCardAndBenefits';

// import ProgressBar from 'react-native-progress/Bar';
// import { image } from '../../../../../assets/images';
// import { Styles } from './styles';
import YourProfile from './YourProfile';
import YourReferrals from './YourReferrals';
import {BaseURL2, logout} from '../../../../Common/Helper';
import {Styles} from './styles';
import {image} from '../../../../../assets/images';

function AlreadyMember(props) {
  const {referCode} = props.route.params;
  console.log('ALALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL', referCode);
  const [loyalityTier, setLoyalityTier] = useState({});
  const [userDetail, setUserDetail] = useState(null);
  const [loyalityPoints, setLoyalityPoints] = useState({});
  const [transactionDetail, setTransactionDetail] = useState([]);

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
        // console.log('response for loyality points', response.data);
        setLoyalityPoints(response.data);
      })
      .catch(error => {
        console.log('erro', error);
      });
  };
  const getProfileDetail = async () => {
    const token = await AsyncStorage.getItem('fabToken');
    const parseToken = JSON.parse(token);
    // console.log('JSON.parse(token)', parseToken);

    const response = await axios
      .get(`https://api.apm20.gravty.io/v1/members/data/${referCode}/`, {
        headers: {
          // Authorization: `JWT ${parseToken.token}`,
          'Content-Type': 'application/json',
          'x-api-key': 'ZIhuq8Igby1qOyhu1nnsb6JL5ibQJ2sf6V968DLk',
          Authorization: `JWT ${parseToken.token}`,
        },
      })
      .then(response => {
        setUserDetail(response.data);
        console.log('poiuyf12345678', response.data);
      })
      .catch(error => {
        console.log('profile detail error', error.response.data);
      });
  };
  const getTransactionDetail = async () => {
    const token = await AsyncStorage.getItem('fabToken');
    const parseToken = JSON.parse(token);
    // console.log('JSON.parse(token)', parseToken);
    console.log('referCodereferCodereferCode.parse(token)', referCode);

    const response = await axios
      .get(`https://api.apm20.gravty.io/v1/bits/?member_id=${referCode}`, {
        headers: {
          // Authorization: `JWT ${parseToken.token}`,
          'Content-Type': 'application/json',
          'x-api-key': 'ZIhuq8Igby1qOyhu1nnsb6JL5ibQJ2sf6V968DLk',
          Authorization: `JWT ${parseToken.token}`,
        },
      })
      .then(response => {
        console.log(
          'poiuyf12345678 for transaction detail in fabfamily',
          response.data,
        );
        setTransactionDetail(response.data);
      })
      .catch(error => {
        console.log('profile detail error', error.response.data);
      });
  };

  useEffect(() => {
    getProfileDetail();
    getLoyalityPoints();
    getLoyalityTier();
    getTransactionDetail();
  }, []);

  const getLoyalityTier = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios
      .get(
        `${BaseURL2}users/current/userLoyaltyPointTierClass?lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        // console.log('response for loyality tier', response.data);
        setLoyalityTier(response.data);
      })
      .catch(error => {});
  };
  // console.log('referCodereferCode', referCode);
  const screenObj = {
    'Your Profile': YourProfile,
    'Your card & benifits': YourCardAndBenefits,
    'Your referrals': YourReferrals,
  };
  const FabFamilyAlreadyTabData = [
    'Your Profile',
    'Your card & benifits',
    'Your referrals',
  ];
  const dataMap = FabFamilyAlreadyTabData.map(item => ({
    referCode: referCode,
    loyalityTier: loyalityTier,
    loyalityPoints: loyalityPoints,
    transactionDetail: transactionDetail,
    userDetail: userDetail,
    title: item,
    card: screenObj[item],
  }));
  return (
    !!userDetail && (
      <>
        <View style={Styles.headerInnerView}>
          <Text style={Styles.headerTxtOne}>
            Hello,
            <Text style={Styles.headerTxtTwo}>
              {userDetail && userDetail?.data?.user?.first_name}
            </Text>
          </Text>
        </View>
        <Image style={Styles.stretch} source={image.fabfamilyflower} />
        <CommonTopTab {...props} data={dataMap} />
      </>
    )
  );
}

export default AlreadyMember;

import React from 'react';
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

function AlreadyMember(props) {
  const {referCode} = props.route.params;

  console.log('referCodereferCode', referCode);
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
    title: item,
    card: screenObj[item],
  }));
  return <CommonTopTab {...props} data={dataMap} />;
}

export default AlreadyMember;

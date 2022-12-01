import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import CongratulationModal from './CongratulationsModal';
import ThankYouModal from './ThankYouModal';
import YourCardAndBenefits from './YourCardAndBenefits';
// import ProgressBar from 'react-native-progress/Bar';
// import { image } from '../../../../../assets/images';
// import { Styles } from './styles';
import YourProfile from './YourProfile';
import YourReferrals from './YourReferrals';


function AlreadyMember() {
  return (
    <View>
      <ThankYouModal />
    </View>
  );
}

export default AlreadyMember;

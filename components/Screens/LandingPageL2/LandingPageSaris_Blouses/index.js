import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Modal,
  Alert,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import React, {useState} from 'react';
import TopBanner from './TopBanner';
import {Colors} from '../../../../assets/Colors';
import ResultCards from './ResultCards';
import SortBox from './SortBox';
import Entypo from 'react-native-vector-icons/Entypo';
import Fonts from '../../../../assets/fonts';
import Filter from '../../../Common/Filter';
import HomeHeader from '../../Home/HomeHeader';

export default function LandingPageSaris_Blouses(props) {
  const {code, title, status, isSearch} = props.route.params;
  console.log(
    'productDetailproductDetailproductDetailproductDetail',
    title,
    code,
  );

  // openFilter = () => setModalVisible(true);
  return (
    <>
      {/* <TopBanner /> */}

      <ResultCards
        isSearch={isSearch}
        status={status}
        title={title}
        code={code}
        {...props}
        // setTotalCount={setTotalCount}
        // totalCount={totalCount}
      />

      {/* <Filter /> */}
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  centeredView: {
    marginTop: 'auto',
    width: '100%',
    backgroundColor: 'white',
  },
  headingBox: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  heading: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
    // width: '50%',
    textAlign: 'center',
  },
  titleBox: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    // borderBottomColor: '#EDEDED',
    paddingVertical: 15,
    justifyContent: 'space-between',
    // borderBottomWidth: 2,
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
    paddingLeft: 10,
  },
});

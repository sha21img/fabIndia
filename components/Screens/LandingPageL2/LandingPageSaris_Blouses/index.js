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
  const {code, title} = props.route.params;
  console.log('productDetailproductDetailproductDetailproductDetail', title);
  const [modalVisible, setModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [sortValue, setSortValue] = useState('');

  const openSort = () => setModalVisible(true);
  // openFilter = () => setModalVisible(true);
  return (
    <>
      <HomeHeader {...props} headertext={title} />
      <View
      // contentContainerStyle={{
      //   backgroundColor: Colors.backgroundColor,
      //   flexGrow: 1,
      //   paddingBottom: 20,
      // }}
      >
        {/* <TopBanner /> */}

        <ResultCards
          code={code}
          {...props}
          sortValue={sortValue}
          openSort={openSort}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.mainContainer}>
          <View style={styles.centeredView}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}>
              <View style={styles.headingBox}>
                <Text style={styles.heading}>Sort</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Entypo
                    name="circle-with-cross"
                    color={Colors.primarycolor}
                    size={24}
                  />
                </TouchableOpacity>
              </View>

              {[
                {title: `What's New`, value: 'creationtime-desc'},
                {title: `Price: Low to High`, value: 'price-asc'},
                {title: `Price: High to Low`, value: 'price-desc'},
                {title: `Bestseller`, value: 'productCountBestSeller-desc'},
              ].map(item => {
                return (
                  <>
                    <View style={styles.titleBox}>
                      <CheckBox
                        checkBoxColor={Colors.primarycolor}
                        onClick={() => {
                          // setIsChecked(!isChecked);
                          setSortValue(item.value);
                          setModalVisible(!modalVisible);
                        }}
                        isChecked={sortValue == item.value ? true : false}
                      />
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Modal>
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  headingBox: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
  },
  titleBox: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomColor: '#EDEDED',
    paddingVertical: 15,
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    paddingLeft: 10,
  },
});

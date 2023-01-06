import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Fonts from '../../../assets/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../assets/Colors';
import PointDetailCard from '../../Common/PointDetailCard';

export default function Details({customStyle, productdetail}) {
  const [modalVisible, setModalVisible] = useState(false);
  const discountPrice =
    100 -
    (productdetail.priceAfterDiscount?.value / productdetail?.price?.value) *
      100;
  // console.log('discountPrice'.discountPrice);
  openCompare = () => setModalVisible(true);

  console.log(" productdetail?.price?.value productdetail?.price?.value",  productdetail)
  return (
    <View style={[Styles.cardDetailContainer, customStyle]}>
      <Text style={Styles.singleproducttitle}>{productdetail.name}</Text>
      <View style={{paddingVertical: 10}}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 22,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
          }}>
          SKU : {productdetail.code}
        </Text>
      </View>
      {/* <View style={Styles.titleContainer}>
        <View style={Styles.titleHeader}>
          <View style={Styles.titleIcon}></View>
          <Text style={Styles.titleText}>Sustainable</Text>
        </View>
        <View style={Styles.titleHeader}>
          <View style={Styles.titleIcon}></View>
          <Text style={Styles.titleText}>Sustainable</Text>
        </View>
      </View> */}
      <View style={Styles.txtbox}>
      
        <Text style={Styles.singleproductamount}>
          {productdetail?.priceAfterDiscount?.formattedValue}
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: Fonts.Assistant600,
            color: Colors.textcolor,
            marginLeft: 5,
          }}>
          M.R.P{' '}
        </Text>
        {
         productdetail?.totalDiscount?.value?
          <>
          <Text style={Styles.priceofftxt}>
          {productdetail?.price?.formattedValue}
        </Text>
        <Text style={Styles.offertxt}>{productdetail?.price?.value ? discountPrice?.toFixed(0) : 0}% off</Text>
        </>
        : null
        }
        
      </View>
      <Text style={{fontFamily:Fonts.Assistant400}}>(Incl. of all taxes) </Text>
      {
        productdetail?.stock?.stockLevelStatus == 'outOfStock' ? <Text
        style={[
          Styles.oos,
          {
            color:
              productdetail?.stock?.stockLevelStatus == 'outOfStock'
                ? '#DA5959'
                : 'green',
          },
        ]}>
        {productdetail?.stock?.stockLevelStatus == 'outOfStock'
          ? 'Out of stock'
          : null}
      </Text>:null
      }
      
      {/* <View style={Styles.btnBox}>
        <TouchableOpacity style={Styles.btn} onPress={() => openCompare()}>
          <Text style={Styles.btnText}>Compare</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.btn}>
          <Text style={Styles.btnText}>View in AR</Text>
        </TouchableOpacity>
      </View> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={Styles.mainContainer}>
          <View style={Styles.centeredView}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}>
              <View style={Styles.headingBox}>
                <Text style={Styles.heading}>Choose a bundle to compare</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Entypo
                    name="circle-with-cross"
                    color={Colors.primarycolor}
                    size={26}
                  />
                </TouchableOpacity>
              </View>
              <View style={Styles.chipContainer}>
                {['Similar', 'Recently viewed'].map(item => {
                  return (
                    <>
                      <TouchableOpacity style={Styles.chipActive}>
                        <Text style={Styles.chipTextActive}>{item}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={Styles.chipInActive}>
                        <Text style={Styles.chipTextInActive}>{item}</Text>
                      </TouchableOpacity>
                    </>
                  );
                })}
              </View>
              <ScrollView
                horizontal
                contentContainerStyle={Styles.productListContainer}>
                {[0, 0, 0].map(item => {
                  return <PointDetailCard compare={true} />;
                })}
              </ScrollView>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const Styles = StyleSheet.create({
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
  cardDetailContainer: {
    padding: 15,
    backgroundColor: '#F6F6F6',
  },
  singleproducttitle: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
    paddingRight: 5,
  },
  txtbox: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  singleproductamountSign: {
    fontSize: 18,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
    marginRight: 2,
  },
  singleproductamount: {
    fontSize: 18,
    fontFamily: Fonts.Assistant700,
    color: Colors.textcolor,
  },
  btnBox: {
    flexDirection: 'row',
  },
  btn: {
    borderRadius: 50,
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderColor: Colors.primarycolor,
    borderWidth: 1,
    marginVertical: 5,
    marginRight: 10,
  },
  btnText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.primarycolor,
  },
  priceofftxt: {
    paddingRight: 2,
    textDecorationLine: 'line-through',
    color: '#979797',
    fontSize: 16,
    paddingHorizontal: 10,
    fontFamily: Fonts.Assistant700,
  },
  offertxt: {
    paddingHorizontal: 10,
    fontFamily: Fonts.Assistant700,
    color: '#96AD66',
    fontSize: 16,
  },
  oos: {
    fontFamily: Fonts.Assistant700,

    fontSize: 16,
    lineHeight: 22,
    paddingVertical: 5,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  titleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
  },
  titleIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#ADA866',
    fontFamily: Fonts.Assistant600,
    fontSize: 14,
    lineHeight: 14,
  },
  titleText: {
    paddingHorizontal: 5,
    color: '#ADA866',
  },

  chipContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  chipActive: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: Colors.textcolor,
    borderRadius: 50,
    marginRight: 10,
  },
  chipTextActive: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    color: 'white',
  },
  chipInActive: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: '#E0D9D6',
    borderRadius: 50,
    marginRight: 10,
  },
  chipTextInActive: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    color: Colors.textcolor,
  },
  productListContainer: {
    paddingLeft: 15,
    paddingVertical: 10,
  },
});

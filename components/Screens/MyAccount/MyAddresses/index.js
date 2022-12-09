import React, {useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Modal} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Styles from './styles';
import {Colors} from '../../../../assets/Colors';
import CommonButton from '../../../Common/CommonButton';
import Fonts from '../../../../assets/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';

const faqs = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
];
const MyAddresses = props => {
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const handleClick = () => {
    console.log('hihi');
  };
  return (
    <>
      <ScrollView
        contentContainerStyle={Styles.container}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <Text style={Styles.headingtxt}>Saved Addresses</Text>
        <View style={Styles.body}>
          {faqs.map((faq, index) => (
            <>
              <View
                style={[
                  Styles.txtbox,
                  {
                    marginBottom: faq.length - 1 == index ? 0 : 15,
                  },
                ]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={Styles.mainDivText}>Home(Default)</Text>
                  <TouchableOpacity
                    onPress={() =>
                      setShow(prev => (prev != faq.id ? faq.id : ''))
                    }>
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      color={Colors.textcolor}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
                {show == faq.id ? (
                  <View style={Styles.modalbox}>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('Address')}>
                      <Text style={Styles.edittxt}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalShow(true)}>
                      <Text style={Styles.deletetxt}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
                <Text style={Styles.titletxt}>Tara Orchard</Text>
                <Text style={Styles.titletxt}>102 FI Tara Orchard Avenue</Text>
                <Text style={Styles.titletxt}>Hirananadani Gardens</Text>
                <Text style={Styles.titletxt}>Powal Mumbai 400076</Text>
                <Text style={Styles.titletxt}>Mobile - 9900000000</Text>
              </View>
            </>
          ))}
        </View>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => props.navigation.navigate('Address')}>
          <Entypo
            name="circle-with-plus"
            color={Colors.primarycolor}
            size={20}
          />
          <Text style={Styles.addbtntxt}>Add a new Addresses</Text>
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{
          padding: 12,
          backgroundColor: '#FDFDFD',
          elevation: 5,
        }}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Continue"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>

      <Modal
        visible={modalShow}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={Styles.modalcontainer}>
          <View style={Styles.modalbox}>
            <View style={Styles.headbox}>
              <Text style={Styles.headtxt}>
                You are about to remove address!
              </Text>
              <TouchableOpacity onPress={() => setModalShow(false)}>
                <Ionicons name="close-circle-outline" size={15} />
              </TouchableOpacity>
            </View>
            <Text style={Styles.head1txt}>
              Are you sure you want to remove this Address?
            </Text>

            {/* ///---choose mode of return---/// */}

            {/* //--radio button--// */}
            {/* <RadioButtonRN
              animationTypes={['zoomIn']}
              circleSize={17}
              box={false}
              data={dataTwo}
              activeColor="maroon"
              selectedBtn={e => console.log(e)}
              style={{marginVertical: 9}}
            /> */}
            <View
              style={{
                paddingVertical: 15,
                width: '50%',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.Assistant700,
                  color: Colors.textcolor,
                }}>
                Office
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: Fonts.Assistant400,
                  color: Colors.textcolor,
                }}>
                Purvi Nargund, 3, Lok Everest Orchard Avenue, Hiranandani
                Gardens, Powai, Mumbai 400076
              </Text>
            </View>
            <View
              style={{
                paddingVertical: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <CommonButton
                txt="Cancel"
                customViewStyle={{
                  backgroundColor: '#FFFFFF',
                  width: '47%',
                  borderWidth: 1,
                  borderColor: Colors.primarycolor,
                }}
                btntxtColor={Colors.primarycolor}
              />
              <CommonButton
                backgroundColor="#BDBDBD"
                txt="Remove address"
                customViewStyle={{
                  backgroundColor: Colors.primarycolor,
                  width: '47%',
                }}
                handleClick={handleClick}
              />
            </View>

            {/* <View
              style={{
                padding: 10,
                backgroundColor: '#FDFDFD',
              }}>
              <TouchableOpacity
                onPress={() => setModalShow(true)}
                style={{
                  backgroundColor: Colors.primarycolor,
                  borderRadius: 20,
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Assistant400,
                    fontSize: 16,
                    color: '#fff',
                    alignSelf: 'center',
                  }}>
                  Confirm return
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </Modal>
    </>
  );
};
export default MyAddresses;

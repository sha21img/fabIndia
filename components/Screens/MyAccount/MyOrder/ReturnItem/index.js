import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import RadioButtonRN from 'radio-buttons-react-native';
import Fonts from '../../../../../assets/fonts';
import {Colors} from '../../../../../assets/Colors';
import OrderProductCard from '../../../../Common/OrderProductCard';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../../../../Common/CommonButton';
import {Styles} from './styles';

const data = [
  {label: 'Received a wrong or defective product', index: 0},
  {label: 'Image did not match the actual product', index: 1},
  {label: 'Quality issues', index: 2},
  {label: 'I changed my mind', index: 3},
  {label: 'Size or fit issues', index: 4},
];
const getFirst = () => {
  return (
    <View
      style={{
        flexWrap: 'wrap',
        width: 300,
      }}>
      <Text
        style={{
          fontSize: 14,
          fontFamily: Fonts.Assistant600,
          width: 300,
          color: Colors.textcolor,
        }}>
        Back to source
      </Text>
      <Text
        style={{
          width: '80%',
          fontSize: 14,
          fontFamily: Fonts.Assistant400,
          lineHeight: 18,
          color: Colors.textcolor,
        }}>
        After product is picked up , refund of ₹ 3,500 will be initiated. ₹3,500
        to be credited to original payment mode in 7 working days
      </Text>
    </View>
  );
};

const getSecond = () => {
  return (
    <View
      style={{
        flexWrap: 'wrap',
        width: 300,
      }}>
      <Text
        style={{
          fontSize: 14,
          fontFamily: Fonts.Assistant600,
          width: 300,
          color: Colors.textcolor,
        }}>
        Back to source
      </Text>
      <Text
        style={{
          width: '80%',
          fontSize: 14,
          fontFamily: Fonts.Assistant400,
          lineHeight: 18,
          color: Colors.textcolor,
        }}>
        After product is picked up , refund of ₹ 3,500 will be initiated. ₹3,500
        to be credited to original payment mode in 7 working days
      </Text>
    </View>
  );
};

const dataTwo = [{label: getFirst()}, {label: getSecond()}];

const ReturnItem = ({selected, setSelected, modalShow, setModalShow}) => {
  // const [selected, setSelected] = useState(null);
  // const [modalShow, setModalShow] = useState(false);
  const navigation = useNavigation();
  const handleClick = () => {
    console.log('handleClick');
    setModalShow(!modalShow);
  };
  return (
    <>
      <View>
        {/* <View style={Styles.product}>
          <View style={{marginRight: 10}}>
            <Image
              style={Styles.image}
              source={{
                uri: 'https://www.bringitonline.in/uploads/2/2/4/5/22456530/saree-photographers-in-delhi-bringitonline-2_orig.jpeg',
              }}
            />
          </View>
          <View style={Styles.textContainer}>
            <Text style={Styles.txt}>Cotton Silk Block Printed Sari</Text>
            <Text style={Styles.txt}>Product Name</Text>
            <Text style={Styles.txt}>
              Size:<Text style={Styles.bold}>M</Text>
              <Text style={Styles.txt}> Qty</Text>
              <Text style={Styles.bold}> 2 </Text>
            </Text>
            <Text style={Styles.price}> ₹ 3,500</Text>
          </View>
        </View> */}
        {/* <OrderProductCard
          image="https://www.bringitonline.in/uploads/2/2/4/5/22456530/saree-photographers-in-delhi-bringitonline-2_orig.jpeg"
          title="Cotton Silk Block Printed Sari Product Name"
          size="M"
          quantity="1"
          price="3,500"
        />

        <View style={Styles.policyContainer}>
          <Text> ↩ Eligible for return till 15 Jun </Text>
          <Text style={Styles.viewPolicy}>View policy</Text>
        </View> */}

        <View style={Styles.reasonsContainer}>
          <Text style={Styles.boldTitle}>Reason for returning</Text>
          <View>
            {/* //---radio button----/// */}
            <RadioButtonRN
              animationTypes={['zoomIn']}
              circleSize={17}
              box={false}
              data={data}
              activeColor={Colors.primarycolor}
              selectedBtn={e => {
                console.log('e', e), setSelected(e.index);
              }}
              style={{marginVertical: 9}}
            />

            {/* <View style={Styles.inputContainer}>
                            {
                                selected && (<TextInput
                                    placeholder='Additional Comments'
                                    multiline
                                    style={Styles.input}
                                />)
                            }
                        </View> */}
          </View>
        </View>
        <View style={Styles.inputContainer}>
          {selected == 0 && (
            <TextInput
              numberOfLines={3}
              placeholder="Additional Comments"
              multiline
              style={Styles.input}
            />
          )}
        </View>
      </View>

      {/* {selected == 0 && ( */}
      {/* {selected !== 4 && (
        <View
          style={{
            padding: 12,
            backgroundColor: '#FDFDFD',
            elevation: 5,
          }}>
          <CommonButton
            handleClick={handleClick}
            backgroundColor="#BDBDBD"
            txt="Confirm return"
            customViewStyle={{
              backgroundColor: selected == 0 ? Colors.primarycolor : '#BDBDBD',
            }}
          />
        </View>
      )} */}

      {/* )} */}
      {/* <View
        style={{
          padding: 10,
          backgroundColor: '#FDFDFD',
        }}>
        <TouchableOpacity
          onPress={() => setModalShow(true)}
          style={Styles.appButtonContainer}>
          <Text style={Styles.appButtonText}>Confirm return</Text>
        </TouchableOpacity>
      </View> */}

      {/* ////---Modal---//// */}

      <Modal
        visible={modalShow}
        style={{height: 400}}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View
            style={{
              marginTop: 'auto',
              backgroundColor: '#FFFFFF',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              padding: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={Styles.returntxt}>Returned confirmed</Text>
              <Text onPress={() => setModalShow(false)} style={{fontSize: 20}}>
                ✖
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                paddingVertical: 15,
                fontFamily: Fonts.Assistant400,
                color: Colors.textcolor,
              }}>
              Your package will be picked up by our delivery executive{' '}
            </Text>

            {/* ///---choose mode of return---/// */}

            <Text style={Styles.boldTitle}>Choose mode of return :</Text>

            {/* //--radio button--// */}
            <RadioButtonRN
              animationTypes={['zoomIn']}
              circleSize={17}
              box={false}
              data={dataTwo}
              activeColor="maroon"
              selectedBtn={e => console.log(e)}
              style={{marginVertical: 9}}
            />

            <View
              style={{
                padding: 10,
                backgroundColor: '#FDFDFD',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalShow(true), navigation.navigate('OrderSuccess');
                }}
                style={Styles.appButtonContainer}>
                <Text style={Styles.appButtonText}>Confirm return</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ReturnItem;

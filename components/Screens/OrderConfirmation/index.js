import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonButton from '../../Common/CommonButton';

const OrderConfirmation = props => {
  const [showmodal, setshowmodal] = useState(false);
  const {amount, addressData, UDID} = props?.route?.params;
  console.log('UD///ID',UDID)
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const final = UDID.split('/');
    let id = final[final.length - 2];
    getorderconfirmDetails(id);
  }, []);

  const getorderconfirmDetails = async id => {
    console.log('jijhiojiojhp', id);
    const response = await axios.post(
      `https://apisap.fabindiahome.com/occ/v2/fabindiab2c/users/current/orders/fetch?id=${id}&lang=en&curr=INR`,
      // {},
    );
    console.log(
      'getorderconfirmDetailsgetorderconfirmDetailsgetorderconfirmDetailsgetorderconfirmDetailsgetorderconfirmDetails',
      response.data,
    );
    setDetails(response.data);
  };

  return (
    <>
      <ScrollView>
        <View
          style={{
            height: 207,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#96AD66',
              height: 70,
              width: 70,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={image.tick} />
          </View>
          <Text
            style={{
              color: Colors.textcolor,
              marginTop: 30,
              fontFamily: Fonts.Assistant700,
              fontSize: 18,
              lineHeight: 24,
            }}>
            Yay! Your order has been placed.
          </Text>
          <Text
            style={{
              color: Colors.textcolor,
              marginTop: 10,
              fontFamily: Fonts.Assistant400,
              fontSize: 18,
              lineHeight: 24,
            }}>
            You saved
            <Text style={{fontFamily: Fonts.Assistant700}}> ₹ 24,000</Text>
          </Text>
        </View>
        <View style={{height: 113, padding: 13}}>
          <Text
            style={{
              color: Colors.textcolor,
              fontFamily: Fonts.Assistant400,
              fontSize: 18,
              lineHeight: 24,
              textAlign: 'center',
            }}>
            You can check delivery details in
            <Text style={{fontFamily: Fonts.Assistant700}}>‘My orders’</Text>
            within 48 hours of placing the order
          </Text>
          <TouchableOpacity
            onPress={() => {
              setshowmodal(true);
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginVertical: 20,
                color: Colors.primarycolor,
              }}>
              View order details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 15}}>
          <Text>
            Visit the place where your products are made Take a tour of the
            Fabindia village!
          </Text>
        </View>
        {/*  */}
        <Modal
          visible={showmodal}
          animationType="slide"
          swipeDirection={['down']}
          transparent={true}>
          <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View
              style={{
                backgroundColor: 'white',
                elevation: 5,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                paddingHorizontal: 15,
                paddingVertical: 10,
                marginTop: 'auto',
                width: '100%',
                height: '80%',
              }}>
              <View style={{margin: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontFamily: Fonts.Assistant700, fontSize: 16}}>
                    Your order details
                  </Text>
                  <TouchableOpacity onPress={() => setshowmodal(false)}>
                    <Ionicons name="close-circle-outline" size={24} />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 15,
                  }}>
                  <TouchableOpacity onPress={() => setshowmodal(false)}>
                    <Ionicons name="close-circle-outline" size={24} />
                  </TouchableOpacity>
                  <View style={{paddingHorizontal: 15}}>
                    <Text>6 items</Text>
                    <Text>1,14,800</Text>
                  </View>
                  <View style={{borderLeftWidth: 1, paddingHorizontal: 10}}>
                    <Text>You saved 24,000</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
      <View style={{alignItems:'center',marginBottom:20}}>
      <CommonButton
        backgroundColor="#BDBDBD"
        txt={'Back to home'}
        btntxtColor='white'
        customViewStyle={{
          backgroundColor: Colors.primarycolor,
          borderWidth: 1,
          // borderColor: Colors.primarycolor,
          width: '80%',
          paddingVertical: 12,
        }}
        handleClick={()=>{
          props.navigation.navigate("Home")
        }}
      />
      </View>
      
    </>
  );
};

export default OrderConfirmation;

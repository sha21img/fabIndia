import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import CloseIcon from 'react-native-vector-icons/Ionicons';
import {Styles} from './styles';
import CommonButton from '../../../../Common/CommonButton';
import {Colors} from '../../../../../assets/Colors';
import {image} from '../../../../../assets/images';
import {BaseURL2} from '../../../../Common/Helper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
function ReferFriend(props) {
  const dispatch = useDispatch();

  const [refercode, setReferCode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const getUserDetail = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    await axios
      .get(`${BaseURL2}/users/current?lang=en&curr=INR`, {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      })
      .then(response => {
        console.log('response.data', response.data);
        getMemberlist(response.data.contactNumber);
        setMobileNumber(response.data.contactNumber);
      })
      .catch(err => {
        console.log('err', err);
        if (err.response.status == 401) {
          logout(dispatch);
        }
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
        console.log(
          'response.data for member list',
          response.data[0].member_id,
        );
        setReferCode(response.data[0].member_id);
      })
      .catch(err => {
        console.log('err', err);
        if (err.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  useEffect(() => {
    getUserDetail();
  }, [props]);
  const referFriend = async () => {
    const data = await AsyncStorage.getItem('fabToken');
    const parseData = JSON.parse(data);
    console.log('parseData11', parseData);

    const params = {
      user: {
        email: parseData.user.email,
        first_name: parseData.user.first_name,
        last_name: parseData.user.last_name,
      },
      enrolling_sponsor: parseData.sponsor_id,
      mobile: !!parseData.mobile || mobileNumber,
      enrollment_referrer: refercode,
    };
    console.log('paramsparams', params);
    await axios
      .post(`https://api.apm20.gravty.io/v2/members`, params, {
        headers: {
          'x-api-key': 'ZIhuq8Igby1qOyhu1nnsb6JL5ibQJ2sf6V968DLk',
          'Content-Type': 'application/json',
          Authorization: `JWT ${parseData.token}`,
        },
      })
      .then(response => {
        console.log('members enroll response', response.data);
      })
      .catch(errors => {
        console.log('members enroll errors', errors.response.data);
        Toast.showWithGravity(
          errors.response.data.error.message,
          Toast.LONG,
          Toast.TOP,
        );
      });
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        <View style={Styles.headingTextView}>
          <Text style={Styles.headingText}>
            'Join Fabfamily to get exclusive benefits!'
          </Text>
        </View>
        {[0, 0, 0].map(item => {
          return (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <View style={{width: '17%'}}>
                  <Image source={image.referfriend1} />
                </View>
                <View style={{width: '70%'}}>
                  <Text>Refer your friend by sharing your unique code</Text>
                </View>
              </View>
            </>
          );
        })}

        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={Styles.termsAndConditions}>View Terms & Conditions</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={Styles.modalShadow}>
            <Text>oijhu</Text>
            {/* <View style={Styles.modalMainView}>
              <View style={Styles.headingView}>
                <Text style={Styles.modalHeadingTxt}>Terms & Conditions</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <CloseIcon
                    name="close-circle-outline"
                    size={25}
                    color="gray"
                  />
                </Pressable>
              </View>
              <View style={Styles.modalTxtView}>
                <Text style={Styles.modalTxtOne}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nisl diam justo, est viverra. Feugiat velit at non id hac
                  ipsum fusce vitae ornare. Purus eu feugiat vel cursus id
                  imperdiet scelerisque adipiscing. Auctor mauris at ultrices
                  felis. Scelerisque augue ligula et faucibus. Dictum non nunc
                  arcu nullam quam velit nunc, massa, nullam. Sed diam elementum
                  elit vel. Ut at cras porta bibendum dignissim.
                </Text>
                <Text style={Styles.modalTxtTwo}>
                  Turpigins venenatis id mauris, diam, pellentesque adipiscing
                  feugiat purus est. Scelerisque amet, ut enim vestibulum. Dui,
                  sit posuere vel nunc vitae. Ac turpis a, ac amet, scelerisque
                  posuere praesent ut fermentum. Aliquam dui vel, arcu dolor
                  eget integer malesuada habitasse.
                </Text>
              </View>
            </View> */}
          </View>
        </Modal>
      </ScrollView>

      <View
        style={{
          padding: 12,
          backgroundColor: '#FDFDFD',
          elevation: 5,
        }}>
        <CommonButton
          handleClick={referFriend}
          backgroundColor="#BDBDBD"
          txt="refer a friend"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
}

export default ReferFriend;

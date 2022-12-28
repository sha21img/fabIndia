import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import {Styles} from './styles';
import InputText from '../../../../Common/InputText';
import CommonButton from '../../../../Common/CommonButton';
import {Colors} from '../../../../../assets/Colors';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {logout} from '../../../../Common/Helper';
import {useDispatch} from 'react-redux';
function Membership() {
  const dispatch = useDispatch();
  const [text, setText] = useState({
    Name: '',
    mobile: '',
    email: '',
  });
  console.log('text11111', text);
  const getMemberEnroll = async () => {
    const data = await AsyncStorage.getItem('fabToken');
    const parseData = JSON.parse(data);

    const params = {
      user: {
        email: text.email,
        first_name: text.Name,
        // last_name: parseData.user.last_name,
      },
      enrolling_sponsor: parseData.sponsor_id,
      mobile: text.mobile,
    };
    console.log('paramsparams', params);

    //   profile_image: null,
    //   salutation: 'MR',
    //   member_name: 'test user',
    //   middle_name: 'sdk',
    //   alias: null,
    //   date_of_birth: '2000-05-15',
    //   gender: 'male',
    //   marital_status: null,
    //   wedding_anniversary: null,
    //   number_of_children: null,
    //   mother_tongue: null,
    //   nationality: null,
    //   pin: null,
    //   passport_number: null,
    //   creditcard_number: '1111111111111111',
    //   mobile: '9578246374',
    //   address_line1: null,
    //   address_line2: null,
    //   area: null,
    //   city: null,
    //   region: null,
    //   zipcode: null,
    //   country: null,
    //   ethnicity: null,
    //   annual_income: null,
    //   highest_education: null,
    //   company: null,
    //   job_title: null,
    //   favorite_store: null,
    //   favorite_restaurant: null,
    //   mode_of_communication: null,
    //   food_preference: null,
    //   favorite_drink: null,
    //   favorite_sport: null,
    //   favorite_food: null,
    //   hobbies: null,
    //   enrollment_touchpoint: 1,
    //   enrolling_sponsor: 1,
    //   enrolling_location: null,
    //   preferred_location: null,
    //   associate_id: null,
    //   facebook_id: null,
    //   twitter_id: null,
    //   receive_offers: true,
    //   membership_tenure: 0,
    //   enrollment_referrer: 'B3PVGBJ',
    //   extra_data: {
    //     gst_number: '64784855',
    //     opt_in_mobile: '1',
    //     opt_in_email: '1',
    //     age_range: '21-30',
    //   },
    // };
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
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  // useEffect(() => {
  //   console.log('plaaaaaaaaaa');
  //   getMemberEnroll();
  //   // generateSpecificMemberToken();
  // }, []);
  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        {/* <View style={Styles.nameTxtView}> */}
        <InputText
          label={'Name'}
          onChangeText={text =>
            setText(prev => {
              return {...prev, Name: text};
            })
          }
          value={text.Name}
          customStyle={{
            marginTop: 10,
            marginHorizontal: 15,
            paddingHorizontal: 0,
          }}
        />
        <InputText
          label={'Mobile number'}
          onChangeText={text =>
            setText(prev => {
              return {...prev, mobile: text};
            })
          }
          value={text.mobile}
          customStyle={{
            marginTop: 10,
            marginHorizontal: 15,
            paddingHorizontal: 0,
          }}
        />
        <InputText
          label={'Email address'}
          onChangeText={text =>
            setText(prev => {
              return {...prev, email: text};
            })
          }
          value={text.email}
          customStyle={{
            marginTop: 10,
            marginHorizontal: 15,
            paddingHorizontal: 0,
          }}
        />
      </ScrollView>
      <View
        style={{
          padding: 12,
          backgroundColor: '#FDFDFD',
          elevation: 5,
        }}>
        <CommonButton
          handleClick={getMemberEnroll}
          backgroundColor="#BDBDBD"
          txt="Join FabFamily"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
}

export default Membership;

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import {image} from '../../../../../../assets/images';
import {Styles} from './styles';
import axios from 'axios';
function YourProfile() {
  const [useDetail, setUserDetail] = useState({});
  const getProfileDetail = async () => {
    const response = await axios.get(
      `https://fabindia.apm12.gravty.io/bolapi/v1/members/data/TNQ4XYD/`,
      {
        headers: {
          Authorization: `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjo1MzQ3MDE3LCJ1c2VybmFtZSI6IlROUTRYWUQiLCJleHAiOjE2NzE4Njg3ODQsImVtYWlsIjoiZ3VwdGF2aWNreS5pbWdAZ21haWwuY29tIiwib3JpZ19pYXQiOjE2NzE4NTQzODQsImFjY2Vzc19tYXNrIjo2LCJwcm9ncmFtX2lkIjo2LCJleHBfbXMiOjE2NzE4Njg3ODQ2Mjd9.EFv0AxFKyolWTddsFLUaTmFPBr0eRhONRxCAqObzDeZKo5zl9sSOOXLnIQu1XXkq5FeOATsYvE2m82TOVrISMBVhc0IkE9EKZZCtJQD8iEsMDAE786ppefCv3OM7vwfhs73nX-Nd0u2JWUqXj79nu_YmP_CNMYZNJJtTcpUemH-G15a1QWx9GlpAPOzAnBwx9DUaByO67AOdJPbNOIQOwDwWB1l79ehgxtJqw3_vkkdLoqBfDK9ud-K61mcr5PLJcihbigersBj1xRm4lCNTVkAmLcPzRC339drDQto0jN6KVMMsW3B507oSQPx93t40xxGH9Wc19uPpN_VTL7BFuGnte_tai9KS-RYtA2ufauGFa8TUy7zq4sxyW4P7-Y3y9d5j8ApE5FN2wMaet8iNmt_smT_gb8D25E76gmz7Y0sJGKfEb3q_zKkB41pN8hHelKRMztBiVCnWHseQUJ4ZuUWWhuD6_zpvNwjDo1cGusNSZ7p4QADjrAnZmHHnvxwyfC3faT7vGjIuJDuflJnZaTRyZ7RXr9OsyDLhAA4TE08y7J0xGmxS5lSX2CKKM0PfQ4JKU2klB1FnCSjwJfUWWgq_yuhw2xw2UPE9VcPgb4JBRsHB9zXeL8J1bEXgP_VyYQCUDjcTA4pfxRVcbYq4e-V5Qd9nIqvPWEKSGPcGSgg`,
        },
      },
    );
    setUserDetail(response.data);
    console.log('poiuyf', response.data?.data?.user?.first_name);
  };
  useEffect(() => {
    getProfileDetail();
  }, []);
  return (
    <View>
      <ScrollView contentContainerStyle={Styles.container}>
        <View style={Styles.headerInnerView}>
          <Text style={Styles.headerTxtOne}>
            Hello,
            <Text style={Styles.headerTxtTwo}>
              {useDetail && useDetail?.data?.user?.first_name}
            </Text>
          </Text>
        </View>
        <Image style={Styles.stretch} source={image.fabfamilyflower} />

        <View style={Styles.detailsContainer}>
          <View style={Styles.detailsInnerView}>
            <View style={Styles.circle}>
              <Text style={Styles.circleTxt}>TS</Text>
            </View>
            <View style={Styles.detailsTxtView}>
              <Text style={Styles.name}>Tanya Singh</Text>
              <Text style={Styles.phoneNo}>+91 {useDetail?.data?.mobile}</Text>
              <Text style={Styles.phoneNo}>{useDetail?.data?.user?.email}</Text>
              <Text style={Styles.phoneNo}>
                {!!useDetail?.data?.gender && useDetail?.data?.gender}
              </Text>
              <Text style={Styles.phoneNo}>
                {!!useDetail?.data?.date_of_birth &&
                  useDetail?.data?.date_of_birth}
              </Text>
              <Text style={Styles.editProfile}>Edit Profile</Text>
            </View>
          </View>
          <Text style={Styles.tierTxt}>Tier</Text>
          <View style={{paddingHorizontal: 15}}>
            <ProgressBar
              progress={0.39}
              width={375}
              color="#750000"
              style={{
                unfilledColor: 'none',
                backgroundColor: 'white',
                borderWidth: 1,
                borderRadius: 5,
                borderColor: 'white',
              }}
            />
          </View>
          <View style={Styles.tierContainer}>
            <View style={Styles.goldView}>
              <Text style={Styles.goldTxt}>GOLD</Text>
            </View>
            <View style={Styles.platinumView}>
              <Text style={Styles.platinumTxt}>PLATINUM</Text>
            </View>
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style={Styles.upgradeTierTxtOne}>
              Shop for{' '}
              <Text style={Styles.upgradeTierTxtTwo}>
                ₹ 75000 to upgrade
                <Text style={Styles.upgradeTierTxtOne}>to next tier</Text>
              </Text>
            </Text>
          </View>
        </View>

        <View style={Styles.updateAddressView}>
          <Text style={Styles.updateAddressTxtone}>
            Update your address
            <Text style={Styles.updateAddressTxtTwo}>
              {' '}
              to get extra points!
            </Text>
          </Text>
        </View>
        <View style={Styles.pointsContainer}>
          <View style={Styles.pointsView}>
            <Text style={Styles.pointsTxt}>POINTS BALANCE</Text>
            <Text style={Styles.points}>321</Text>
          </View>
          <View style={Styles.pointsView}>
            <Text style={Styles.pointsTxt}>POINTS REDEEMED</Text>
            <Text style={Styles.points}>38</Text>
          </View>
          <View style={Styles.pointsView}>
            <Text style={Styles.pointsTxt}>EXPERIENCES REDEEMED</Text>
            <Text style={Styles.points}>0</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default YourProfile;

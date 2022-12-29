import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import {Colors} from '../../../../../../assets/Colors';
import {Images} from '../../../../../../assets/images';
import CloseIcon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Fonts from '../../../../../../assets/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
function YourReferrals(props, item) {
  const {referCode} = item;
  const getReferal = async () => {
    const token = await AsyncStorage.getItem('fabToken');
    const parseToken = JSON.parse(token);
    console.log('JSON.parse(token)', parseToken);
    console.log('referCodereferCodereferCode.parse(token)', referCode);

    const response = await axios
      .get(
        `https://api.apm20.gravty.io/v1/members/list/?page_size=100&enrollment_referrer=${referCode}`,
        {
          headers: {
            // Authorization: `JWT ${parseToken.token}`,
            'Content-Type': 'application/json',
            'x-api-key': 'ZIhuq8Igby1qOyhu1nnsb6JL5ibQJ2sf6V968DLk',
            Authorization: `JWT ${parseToken.token}`,
          },
        },
      )
      .then(response => {
        console.log(
          'poiuyf12345678 for referal detail in fabfamily',
          response.data,
        );
      })
      .catch(error => {
        console.log('referal detail error', error.response.data);
      });
  };
  useEffect(() => {
    getReferal();
  }, []);
  const [modalVisible, setModalVisible] = useState(false);
  const Options = [
    {
      Name: 'Facebook',
      id: 1,
      image: require('../../../../../../assets/images/facebook.png'),
    },
    {
      Name: 'Whatsapp',
      id: 2,
      image: require('../../../../../../assets/images/whatsapp.png'),
    },
    {
      Name: 'Messenger',
      id: 3,
      image: require('../../../../../../assets/images/messenger.png'),
    },
    {
      Name: 'Gmail',
      id: 4,
      image: require('../../../../../../assets/images/gmail.png'),
    },
    {
      Name: 'iMessage',
      id: 5,
      image: require('../../../../../../assets/images/imessage.png'),
    },
    {
      Name: 'Viber',
      id: 6,
      image: require('../../../../../../assets/images/viber.png'),
    },
    {
      Name: 'Instagram',
      id: 7,
      image: require('../../../../../../assets/images/instagram.png'),
    },
    {
      Name: 'Zoho Mail',
      id: 8,
      image: require('../../../../../../assets/images/zohomail.png'),
    },
    {
      Name: 'Outlook',
      id: 9,
      image: require('../../../../../../assets/images/outlook.png'),
    },
    {
      Name: 'Hike Messenger',
      id: 10,
      image: require('../../../../../../assets/images/hike.png'),
    },
  ];
  const data = [
    {
      name: 'Aadil Com',
      status: 'Order Placed',
      image: '',
    },
    {
      name: 'Akash Prakash',
      status: 'Pending',
      image: '',
    },
    {
      name: 'Dhara Mehta',
      status: 'Order Placed',
      image: '',
    },
    {
      name: 'Manish shah',
      status: 'Order Placed',
      image: '',
    },
    {
      name: 'Manisha shah',
      status: 'Order Placed',
      image: '',
    },
    {
      name: 'Sid lyer',
      status: 'Order Placed',
      image: '',
    },
    {
      name: 'Renna Banerji',
      status: 'Order Placed',
      image: '',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.mainView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.upperView}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.upperTxtOne}>
              Refer your friends
              <Text style={styles.upperTxtTwo}> to get extra points!</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainbox}>
          <View style={styles.referbox}>
            <Text style={styles.referBoxTxtOne}>REFERRAL CODE</Text>
            <Text style={styles.referBoxTxtTwo}>FAB5839797</Text>
          </View>
          <View style={styles.referbox2}>
            <View style={styles.singlerefer}>
              <Text style={styles.singlerefertxt}>TOTAL</Text>
              <Text style={styles.singlerefertxt}>POINTS EARNED </Text>
              <Text style={styles.singlerefertxt2}>321</Text>
            </View>
            <View style={styles.singlerefer}>
              <Text style={styles.singlerefertxt}>FRIENDS</Text>
              <Text style={styles.singlerefertxt}>REFERRED</Text>
              <Text style={styles.singlerefertxt2}>{data.length}</Text>
            </View>
          </View>
          <View>
            {data.map(el => {
              return (
                <View style={styles.userView}>
                  <View style={styles.usernameView}>
                    <Image
                      style={[styles.locationIcon]}
                      source={Images}
                      resizeMode="contain"
                    />
                    <Text style={styles.nameTxt}>{el.name}</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: el.status != 'Pending' ? '#96AD66' : '#FAA859',
                      }}>
                      {el.status}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <ScrollView>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.modalShadow}>
              <View style={styles.modalMainView}>
                <View style={styles.headingView}>
                  <Text style={styles.modalHeadingTxt}>Refer Using</Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <CloseIcon
                      name="close-circle-outline"
                      size={25}
                      color={Colors.textcolor}
                    />
                  </Pressable>
                </View>
                {Options.map((option, id) => (
                  <View key={id} style={styles.optionView}>
                    <Image style={styles.optionImg} source={option.image} />
                    <Text style={styles.optionTxt}>{option.Name}</Text>
                  </View>
                ))}
              </View>
            </View>
          </Modal>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
export default YourReferrals;

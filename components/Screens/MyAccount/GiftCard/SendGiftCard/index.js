import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import CommonButton from '../../../../Common/CommonButton';
import InputText from '../../../../Common/InputText';
import { Styles } from './styles';
import Toast from 'react-native-simple-toast';

function SendGiftCard(props) {
  const { walletInfo } = props;
  const amounts = ['₹ 1000', '₹ 3000', '₹ 5000', 'Other'];

  const [clickId, setClickId] = useState();
  const [userDetail, setUserDetail] = useState({
    email: '',
    confirmemail: '',
    amount: '',
    to: '',
    from: '',
    message: '',
  });
  const [isActive, setIsActive] = useState(false);
  const [giftCardDesigns, setGiftCardDesigns] = useState([]);
  const [giftCardAmount, setGiftCardAmount] = useState([]);

  const handleClick = (amount, key) => {
    setIsActive(current => !current);
    setClickId(key);
    if (amount != 'Other') {
      setUserDetail({ ...userDetail, amount: amount })
    }
    else {
      setUserDetail({ ...userDetail, amount: '' })
    }
  };

  const getGiftCardProducts = async () => {
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/getGiftCardProducts?lang=en&curr=INR`,
      {
        headers: {
          Authorization: `Bearer Q7S3XVxcpvLEtJDh1r8sKykMIf4`,
        },
      },
    );
    console.log('giftCardProducts==>', JSON.stringify(response.data));
    if (response && response.status === 200) {
      setGiftCardAmount(response.data.products)
    }
  };

  const getGiftCardDesigns = async () => {
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/getGiftCardDesigns?fields=FULL&lang=en&curr=INR`,
      {
        headers: {
          Authorization: `Bearer Q7S3XVxcpvLEtJDh1r8sKykMIf4`,
        },
      },
    );
    console.log('giftCardDesigns==>', JSON.stringify(response.data));
    if (response && response.status === 200) {
      setGiftCardDesigns(response.data.products)
    }
  };

  useEffect(() => {
    getGiftCardProducts();
    getGiftCardDesigns();
  }, []);

  const sendGiftCard = async () => {
    if (userDetail.email == '') {
      Toast.show('Please enter Recipient email', Toast.LONG);
    }
    else if (userDetail.confirmemail == '') {
      Toast.show('Please enter Confirm Recipient email', Toast.LONG);
    }
    else if (userDetail.amount == '') {
      Toast.show('Please enter Amount', Toast.LONG);
    }
    else if (userDetail.to == '') {
      Toast.show('Please enter To', Toast.LONG);
    }
    else if (userDetail.from == '') {
      Toast.show('Please enter From', Toast.LONG);
    }
    else {
      const response = await axios.post(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08266751/entries/configurator/textfield?fields=FULL&lang=en&curr=INR`,
        {
          "configurationInfos": [
            {
              "configurationLabel": "Recipient Email",
              "configurationValue": userDetail.confirmemail,
              "configuratorType": "TEXTFIELD",
              "status": "SUCCESS"
            },
            {
              "configurationLabel": "Amount",
              "configurationValue": userDetail.amount,
              "configuratorType": "TEXTFIELD",
              "status": "SUCCESS"
            },
            {
              "configurationLabel": "To",
              "configurationValue": userDetail.to,
              "configuratorType": "TEXTFIELD",
              "status": "SUCCESS"
            },
            {
              "configurationLabel": "From",
              "configurationValue": userDetail.from,
              "configuratorType": "TEXTFIELD",
              "status": "SUCCESS"
            },
            {
              "configurationLabel": "Personal message",
              "configurationValue": userDetail.message,
              "configuratorType": "TEXTFIELD",
              "status": "SUCCESS"
            }
          ],
          "product": {
            "code": "FABGCSKU1"
          },
          "quantity": 1,
          "fabProductPrice": 0,
          "fabProductDesign": {
            "code": "FABGCDESIGNSKU4"
          },
          "userId": "current",
          "cartId": "08266751"
        },
        {
          headers: {
            Authorization: `Bearer Q7S3XVxcpvLEtJDh1r8sKykMIf4`,
          },
        },
      );
      console.log('sendGiftCard==>', JSON.stringify(response.data));
      if (response && response.status === 200) {
        // TODO jume to cart page
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.headerView}>
        <Icon name="wallet-giftcard" size={34} color={Colors.primarycolor} />
        <Text style={Styles.balanceTxt}> Your total balance:</Text>
        <Text style={Styles.amountTxt}> ₹ {walletInfo?.totalBalance}</Text>
      </View>
      <View>
        <View style={Styles.enterDeatilsView}>
          <Text style={Styles.enterDetailsTxt}>Enter Details</Text>
        </View>

        <InputText
          label={'Recipient email'}
          onChangeText={text => setUserDetail({ ...userDetail, email: text })}
          value={userDetail.email}
          customStyle={Styles.textinput}
        />
        <InputText
          label={'Confirm recipient email'}
          onChangeText={text =>
            setUserDetail({ ...userDetail, confirmemail: text })
          }
          value={userDetail.confirmemail}
          customStyle={Styles.textinput}
        />

        <Text style={Styles.chooseAmtTxt}>Choose an amount</Text>

        <View style={Styles.amountTxtView}>
          <View style={Styles.amountTxtInnerView}>
            {amounts.map((amount, key) => (
              <View
                style={[key === clickId ? Styles.buttonActive : Styles.button]}>
                <TouchableOpacity
                  onPress={item => handleClick(amount, key)}
                  key={key}>
                  <Text
                    style={[
                      key === clickId
                        ? Styles.activeAmountTxt
                        : Styles.amountTxt,
                    ]}>
                    {amount}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
          <InputText
            label={'Enter other amount'}
            onChangeText={text => setUserDetail({ ...userDetail, amount: text })}
            value={userDetail.amount}
            customStyle={[Styles.textinput, { backgroundColor: '#FAFAFA' }]}
          />
        </View>
        <InputText
          label={'To'}
          onChangeText={text => setUserDetail({ ...userDetail, to: text })}
          value={userDetail.to}
          customStyle={Styles.textinput}
        />
        <InputText
          label={'From'}
          onChangeText={text => setUserDetail({ ...userDetail, from: text })}
          value={userDetail.from}
          customStyle={Styles.textinput}
        />
        <InputText
          placeholder="Add a personal message"
          placeholderTextColor="#979797"
          onChangeText={text => setUserDetail({ ...userDetail, message: text })}
          value={userDetail.message}
          numberOfLines={4}
          multiline={true}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          customStyle={Styles.textarea}
        />
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Send gift card"
          customViewStyle={Styles.commonbtn}
          handleClick={sendGiftCard}
        />

        <View style={Styles.bottombox}>
          <Text style={Styles.notetext}>Please note</Text>
          <Text style={Styles.bottomdescription}>
            The gift card cannot be cancelled,refunded or returned.Once
            purchased,the recipient email cannot be changed.Expiry date - 1 year
            from today.Only applicable to india user.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default SendGiftCard;

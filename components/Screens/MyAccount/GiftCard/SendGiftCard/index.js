import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import CommonButton from '../../../../Common/CommonButton';
import InputText from '../../../../Common/InputText';
import {Styles} from './styles';

function SendGiftCard() {
  const amounts = ['₹ 1000', '₹ 3000', '₹ 5000', 'Other'];

  const [clickId, setClickId] = useState();
  const [userDetail, setUserDetail] = useState({
    email: '',
    confirmemail: '',
    amount: '',
  });

  const [isActive, setIsActive] = useState(false);
  const handleClick = (item, key) => {
    setIsActive(current => !current);
    setClickId(key);
    console.log(item.target);
    console.log('key index: ', key);
    console.log();
  };

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.headerView}>
        <Icon name="wallet-giftcard" size={34} color={Colors.primarycolor} />
        <Text style={Styles.balanceTxt}> Your total balance:</Text>
        <Text style={Styles.amountTxt}> ₹ 0</Text>
      </View>
      <View>
        <View style={Styles.enterDeatilsView}>
          <Text style={Styles.enterDetailsTxt}>Enter Details</Text>
        </View>

        <InputText
          label={'Recipient email'}
          onChangeText={text => setUserDetail({...userDetail, email: text})}
          value={userDetail.email}
          customStyle={Styles.textinput}
        />
        <InputText
          label={'Confirm recipient email'}
          onChangeText={text =>
            setUserDetail({...userDetail, confirmemail: text})
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
                  onPress={item => handleClick(item, key)}
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
            onChangeText={text => setUserDetail({...userDetail, amount: text})}
            value={userDetail.amount}
            customStyle={[Styles.textinput, {backgroundColor: '#FAFAFA'}]}
          />
        </View>
        <InputText
          label={'To'}
          onChangeText={text => setUserDetail({...userDetail, amount: text})}
          value={userDetail.amount}
          customStyle={Styles.textinput}
        />
        <InputText
          label={'From'}
          onChangeText={text => setUserDetail({...userDetail, amount: text})}
          value={userDetail.amount}
          customStyle={Styles.textinput}
        />
        <InputText
          placeholder="Add a personal message"
          placeholderTextColor="#979797"
          onChangeText={text => setUserDetail({...userDetail, amount: text})}
          value={userDetail.amount}
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

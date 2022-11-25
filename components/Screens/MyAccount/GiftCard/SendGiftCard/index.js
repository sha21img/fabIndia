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
          customStyle={{
            marginTop: 20,
            marginHorizontal: 15,
            paddingHorizontal: 0,
          }}
        />
        <InputText
          label={'Confirm recipient email'}
          onChangeText={text =>
            setUserDetail({...userDetail, confirmemail: text})
          }
          value={userDetail.confirmemail}
          customStyle={{
            marginTop: 20,
            marginHorizontal: 15,
            paddingHorizontal: 0,
          }}
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
            customStyle={{
              marginTop: 10,
              paddingHorizontal: 0,
              backgroundColor: '#FAFAFA',
            }}
          />
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 16}}>
          <TextInput
            style={{
              fontSize: 18,
              textDecorationLine: 'underline',
              textDecorationColor: 'gray',
              borderBottomWidth: 1,
              borderBottomColor: '#EDEEEC',
            }}
            placeholder="To"
            placeholderTextColor="gray"
          />
        </View>

        <View style={{marginTop: 20, paddingHorizontal: 16}}>
          <TextInput
            style={{
              fontSize: 18,
              textDecorationLine: 'underline',
              textDecorationColor: 'gray',
              borderBottomWidth: 1,
              borderBottomColor: '#EDEEEC',
            }}
            placeholder="From"
            placeholderTextColor="gray"
          />
        </View>

        <View style={{marginTop: 60, marginBottom: 20, paddingHorizontal: 16}}>
          <TextInput
            style={{
              fontSize: 18,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderColor: '#EDEEEC',
              borderWidth: 1,
              textAlignVertical: 'top',
            }}
            placeholder="Add a personal message"
            placeholderTextColor="gray"
            numberOfLines={5}
            multiline={true}
          />
        </View>
        <View style={{paddingHorizontal: 16}}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 25,
              paddingVertical: 15,
              width: '100%',
              backgroundColor: '#750000',
              marginBottom: 20,
              borderRadius: 24,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white'}}>Send gift card</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 20, paddingHorizontal: 16}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Please note</Text>
          <Text>
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

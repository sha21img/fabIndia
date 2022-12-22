import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../../assets/Colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fonts from '../../../../assets/fonts';
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';
import {Styles} from './styles';
import axios from 'axios';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '../../../Common/Helper';
import {useDispatch} from 'react-redux';
export default function MyOrder() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [gender, setGender] = React.useState([
    {label: 'Past month ', value: 30},
    {label: 'Past 6 months', value: 180},
    {label: 'Last 1 year', value: 'Last 1 year'},
    {label: '2020', value: '2020'},
  ]);
  const [dayrange, setRange] = useState(30);
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState('30');

  const [companyOpen, setCompanyOpen] = React.useState(false);
  const [company, setComapny] = useState([
    {label: 'PUCIT', value: 'pucit'},
    {label: 'UCP', value: 'ucp'},
    {label: 'UET', value: 'uet'},
  ]);
  const [loading, setLoading] = React.useState(false);
  const [orders, setOrders] = useState([]);
  const onGenderOpen = React.useCallback(() => {
    setCompanyOpen(false);
  }, []);

  useEffect(() => {
    getOrders();
  }, [dayrange]);

  const getOrders = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios
      .get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/orders?currentPage=0&days=${dayrange}&fields=DEFAULT&pageSize=20`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        setOrders(response.data.orders);
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  return (
    <>
      <DropDownPicker
        containerStyle={Styles.dropdowncontainer}
        style={{
          borderColor: !genderOpen ? '#BDBDBD' : 'transparent',
          width: '50%',
          borderWidth: !genderOpen ? 1 : null,
        }}
        dropDownContainerStyle={Styles.dropdownoutercontainer}
        open={genderOpen}
        value={genderValue} //genderValue
        items={gender}
        setOpen={setGenderOpen}
        setValue={setGenderValue}
        setItems={setGender}
        placeholder="Select date range "
        onOpen={onGenderOpen}
        onChangeValue={item => {
          setRange(item);
        }}
        zIndex={3000}
        zIndexInverse={1000}
      />
      <ScrollView contentContainerStyle={Styles.container}>
        {orders.map(item => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('OrderStatus', {
                  screen: item.status,
                  orderID: item.code,
                })
              }
              style={Styles.mainbox}>
              <View style={Styles.innertopbox}>
                <Text style={Styles.datetxt}>
                  {moment(item?.placed).format('MMM-DD-YYYY')}
                </Text>
                <SimpleLineIcons
                  name="arrow-right"
                  color={Colors.textcolor}
                  size={15}
                />
              </View>
              <View style={Styles.middlebox}>
                <Text style={Styles.itemtxt}>{item.totalItems} items</Text>
                <Text style={Styles.pricetxt}>
                  {item?.total?.formattedValue}
                </Text>
                <Text style={Styles.orderidtxt}>Order ID: {item.code}</Text>
              </View>

              <View style={Styles.endbox}>
                <View style={Styles.progressbox}></View>
                <Text style={Styles.statustxt}>{item.statusDisplay}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
}

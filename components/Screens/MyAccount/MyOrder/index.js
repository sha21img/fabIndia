import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
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
import {BaseURL2, logout} from '../../../Common/Helper';
import {useDispatch} from 'react-redux';
import CommonButton from '../../../Common/CommonButton';
export default function MyOrder(props) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [gender, setGender] = React.useState([
    {label: 'Select date range ', value: 0},
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
  const [newOrders, setNewOrders] = useState([]);
  const [page, setPage] = useState(0);

  const onGenderOpen = React.useCallback(() => {
    setCompanyOpen(false);
  }, []);

  useEffect(() => {
    getOrders();
  }, [dayrange, props]);

  const getOrders = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios
      .get(
        `${BaseURL2}/users/current/orders?currentPage=${page}&days=${dayrange}&fields=DEFAULT&pageSize=20`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
            // Authorization: `${getToken.token_type} B7vKxGVlrWBGKVNFDlUci2ZfXTM`,
          },
        },
      )
      .then(response => {
        console.log(
          'getOrdersgetOrdersgetOrdersgetOrdersgetOrdersgetOrdersgetOrdersgetOrdersgetOrdersgetOrders',
          response.data,
        );
        setOrders(response.data);
        setNewOrders(response.data.orders);
        setPage(page + 1);
        if (newOrders.length > 0) {
          setNewOrders(prev => [...newOrders, ...response.data.orders]);
        } else {
          setNewOrders(response.data.orders);
        }
      })
      .catch(errors => {
        console.log('vicky,MyOrder', errors);

        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  const endReach = () => {
    if (orders?.pagination?.totalPages > page) {
      getOrders();
    }
  };
  return (
    <>
      {newOrders.length > 0 ? (
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
          <FlatList
            contentContainerStyle={Styles.container}
            data={newOrders}
            onEndReached={endReach}
            showsHorizontalScrollIndicator={false}
            onEndReachedThreshold={0.1}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('OrderStatus', {
                        screen: item.status,
                        orderID: item.code,
                        ...props,
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
                      <Text style={Styles.itemtxt}>
                        {item.totalItems} items
                      </Text>
                      <Text style={Styles.pricetxt}>
                        {item?.total?.formattedValue}
                      </Text>
                      <Text style={Styles.orderidtxt}>
                        Order ID: {item.code}
                      </Text>
                    </View>

                    {/* <View style={Styles.endbox}>
              <View style={Styles.progressbox}></View>
              <Text style={Styles.statustxt}>{item.statusDisplay}</Text>
            </View> */}
                  </TouchableOpacity>
                </>
              );
            }}
          />
        </>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: Colors.textcolor,
              fontFamily: Fonts.Assistant600,
              fontSize: 14,
            }}>
            No Orders Found
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: Colors.textcolor,
              fontSize: 14,
              fontFamily: Fonts.Assistant600,
            }}>
            we have no order records for this account
          </Text>
          <CommonButton
            txt="Start Shopping"
            customViewStyle={{
              backgroundColor: Colors.primarycolor,
              marginVertical: 20,
              width: '70%',
            }}
            // disable={!(!!comment && !!radio)}
            handleClick={() => props.navigation.navigate('Home')}
          />
        </View>
      )}
    </>
  );
}

import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../../assets/Colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fonts from '../../../../assets/fonts';
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';
export default function MyOrder() {
  const navigation = useNavigation();
  const [gender, setGender] = React.useState([
    {label: 'Past month ', value: 'Past month'},
    {label: 'Past 6 months', value: 'Past 6 months'},
    {label: 'Last 1 year', value: 'Last 1 year'},
    {label: '2020', value: '2020'},
  ]);
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);

  const [companyOpen, setCompanyOpen] = React.useState(false);
  const [company, setComapny] = useState([
    {label: 'PUCIT', value: 'pucit'},
    {label: 'UCP', value: 'ucp'},
    {label: 'UET', value: 'uet'},
  ]);
  const [loading, setLoading] = React.useState(false);
  const onGenderOpen = React.useCallback(() => {
    setCompanyOpen(false);
  }, []);
  return (
    <>
      <DropDownPicker
        containerStyle={{
          backgroundColor: '#F9F9F9',
          padding: 15,
          elevation: 5,
          zIndex: 999,
        }}
        style={{
          borderColor: !genderOpen ? '#BDBDBD' : 'transparent',
          width: '50%',
          borderWidth: !genderOpen ? 1 : null,
        }}
        dropDownContainerStyle={{
          borderColor: 'transparent',
          width: '50%',
          backgroundColor: 'white',
          margin: 15,
        }}
        open={genderOpen}
        value={genderValue} //genderValue
        items={gender}
        setOpen={setGenderOpen}
        setValue={setGenderValue}
        setItems={setGender}
        placeholder="Select date range "
        onOpen={onGenderOpen}
        onChangeValue={item => console.log('hihih', item)}
        zIndex={3000}
        zIndexInverse={1000}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#F9F9F9',
          paddingHorizontal: 15,
          paddingVertical: 20,
        }}>
        {/* <View style={{paddingHorizontal: 15}}> */}
        {[
          {
            date: '10 May 2021',
            leftitems: 5,
            price: '12,450.00',
            orderid: 'FAB-6457325',
            status: 'In progress',
            route: 'OrderInProgress',
          },
          {
            date: '10 May 2021',
            leftitems: 5,
            price: '12,450.00',
            orderid: 'FAB-6457325',
            status: 'Delivered',
            route: 'OrderDelivered',
          },
          {
            date: '10 May 2021',
            leftitems: 5,
            price: '12,450.00',
            orderid: 'FAB-6457325',
            status: 'Cancelled',
            route: '',
          },
        ].map(item => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.route)}
              style={{
                padding: 10,
                backgroundColor: '#FFFFFF',
                marginVertical: 8,
                elevation: 5,
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontFamily: Fonts.Assistant700,
                    fontSize: 16,
                    color: Colors.textcolor,
                  }}>
                  {item.date}
                </Text>
                <SimpleLineIcons
                  name="arrow-right"
                  color={Colors.textcolor}
                  size={15}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingTop: 10,
                  flexWrap: 'wrap',
                  //   alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginRight: 20,
                    marginBottom: 10,
                    fontFamily: Fonts.Assistant400,
                    fontSize: 14,
                    color: Colors.textcolor,
                  }}>
                  {item.leftitems} items
                </Text>
                <Text
                  style={{
                    marginRight: 20,
                    marginBottom: 10,
                    fontFamily: Fonts.Assistant600,
                    fontSize: 14,
                    color: Colors.textcolor,
                  }}>
                  ₹{item.price}
                </Text>
                <Text
                  style={{
                    marginRight: 10,
                    marginBottom: 10,
                    fontFamily: Fonts.Assistant400,
                    fontSize: 12,
                    color: Colors.primarycolor,
                  }}>
                  Order ID:{item.orderid}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 15,
                    width: 15,
                    borderRadius: 100,
                    borderColor: '#FAA859',
                    borderWidth: 1,
                  }}></View>
                <Text
                  style={{
                    fontFamily: Fonts.Assistant700,
                    fontSize: 14,
                    color: Colors.textcolor,
                    marginLeft: 5,
                  }}>
                  {item.status}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        {/* </View> */}
      </ScrollView>
    </>
  );
}

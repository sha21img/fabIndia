import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../../assets/Colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fonts from '../../../../assets/fonts';
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';
import {Styles} from './styles';
const data = [
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
    route: 'OrderCancelled',
  },
];
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
        onChangeValue={item => console.log('hihih', item)}
        zIndex={3000}
        zIndexInverse={1000}
      />
      <ScrollView contentContainerStyle={Styles.container}>
        {data.map(item => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('OrderStatus', {screen: item.status})
              }
              style={Styles.mainbox}>
              <View style={Styles.innertopbox}>
                <Text style={Styles.datetxt}>{item.date}</Text>
                <SimpleLineIcons
                  name="arrow-right"
                  color={Colors.textcolor}
                  size={15}
                />
              </View>
              <View style={Styles.middlebox}>
                <Text style={Styles.itemtxt}>{item.leftitems} items</Text>
                <Text style={Styles.pricetxt}>₹{item.price}</Text>
                <Text style={Styles.orderidtxt}>Order ID:{item.orderid}</Text>
              </View>

              <View style={Styles.endbox}>
                <View style={Styles.progressbox}></View>
                <Text style={Styles.statustxt}>{item.status}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
}

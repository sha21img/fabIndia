import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../assets/Colors';
import TrendingNow from './TrendingNow';
import {Styles} from './styles';
import Tags from './Tags';
import {useDebounce} from '../../../constant';
import axios from 'axios';
import Fonts from '../../../assets/fonts';
import NoResultFound from './NoResultFound';
import SearchResult from './SearchResult';

const data = [
  {name: 'Cotton sari'},
  {name: 'Bedsheets'},
  {name: 'Oxidised jewellery'},
  {name: 'Dining table'},
];

export default function Search(props) {
  const [text, setText] = React.useState('');
  const debouncedText = useDebounce(text);
  const [filterProduct, setFilterProduct] = useState([]);

  const getProductSearchData = async () => {
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/search?query=${text}&pageSize=5&lang=en&curr=INR`,
    );
    console.log('response for search', response.data.products);
    setFilterProduct(response.data.products);
  };
  useEffect(() => {
    if (!!text) {
      getProductSearchData();
    } else if (text == '') {
      setFilterProduct([]);
    }
  }, [text]);
  return (
    <>
      <View style={Styles.headercontainer}>
        <TouchableOpacity
          style={Styles.leftarrowbox}
          onPress={() => props.navigation.goBack()}>
          <SimpleLineIcons
            name="arrow-left"
            color={Colors.primarycolor}
            size={20}
          />
        </TouchableOpacity>
        <View style={Styles.headerinputbox}>
          <TextInput
            style={Styles.txtinput}
            placeholder="Search for products"
            placeholderTextColor={'#BDBDBD'}
            onChangeText={text => setText(text)}
            value={debouncedText}
          />
          <TouchableOpacity style={Styles.righticonbox}>
            <AntDesign name="search1" color={Colors.primarycolor} size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.scrollcontainer}>
        {filterProduct.length > 0 ? (
          filterProduct?.map(item => {
            return (
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('ProductDetailed', {
                    productId: item.code,
                    // filterProduct: filterProduct,
                    // ...props,
                  })
                }
                // onPress={() =>
                //   props.navigation.navigate('SearchResult', {
                //     productId: item.code,
                //     filterProduct: filterProduct,
                //     ...props,
                //   })
                // }
                style={{
                  paddingVertical: 15,
                  borderBottomWidth: 1,
                  borderBottomColor: '#EDEDED',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: Fonts.Assistant400,
                    color: Colors.textcolor,
                  }}>
                  {item.name}
                </Text>
                {/* <Text>{item.price.formattedValue}</Text> */}
              </TouchableOpacity>
            );
          })
        ) : filterProduct.length == 0 && text !== '' ? (
          <NoResultFound />
        ) : null}
        {/* <View style={Styles.recentsearchbox}>
          <Text style={Styles.recentsearchtxt}>Recent searches</Text>
          <Text style={Styles.cleartxt}>clear</Text>
        </View> */}
        {/* {data.map((item, index) => {
          return (
            <View
              key={Math.random() * 1000}
              style={[
                Styles.searchlistbox,
                {
                  borderBottomWidth: data.length - 1 ? 0.3 : 0,
                },
              ]}>
              <Text style={Styles.searchlisttxt}>{item.name}</Text>
              <Entypo name="cross" color="#979797" size={15} />
            </View>
          );
        })} */}
        {/* <Text style={Styles.discovertxt}>Discover more</Text>
        <View style={Styles.chipcontainer}>
          <Tags />
        </View> */}
        {/* <TrendingNow /> */}
      </ScrollView>
    </>
  );
}

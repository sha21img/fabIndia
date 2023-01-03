import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../../assets/Colors';
import { Styles } from './styles';
import { useDebounce } from '../../../constant';
import axios from 'axios';
import Fonts from '../../../assets/fonts';
import NoResultFound from './NoResultFound';
import { BaseURL2 } from '../../Common/Helper';

export default function Search(props) {
  const [text, setText] = React.useState('');
  const debouncedText = useDebounce(text);
  const [filterProduct, setFilterProduct] = useState([]);
  const [suggestedProduct, setSuggestedProduct] = useState([]);

  const getProductSearchData = async () => {
    const response = await axios.get(
      `${BaseURL2}/products/search?query=${text}&pageSize=5&lang=en&curr=INR`,
    );
    // console.log('response for search', response.data.products);
    setFilterProduct(response.data.products);
  };

  const getSuggestionData = async () => {
    const response = await axios.get(
      `${BaseURL2}/products/suggestions?term=${text}&max=5&lang=en&curr=INR`,
    );
    // console.log('suggestedProduct==>', response.data.suggestions);
    setSuggestedProduct(response.data.suggestions);
  };

  useEffect(() => {
    if (!!text) {
      getProductSearchData();
      getSuggestionData();
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
            onSubmitEditing={() =>
              props.navigation.navigate('LandingPageSaris_Blouses', {
                ...props,
                isSearch: true,
                title: text
              })
            }
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={Styles.righticonbox}
            onPress={() => {
              getProductSearchData();
              getSuggestionData();
            }}>
            <AntDesign name={"search1"} color={Colors.primarycolor} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.scrollcontainer}>
        {filterProduct.length > 0 ? (
          <>
            {suggestedProduct.length > 0 ?
              suggestedProduct.map((obj) => {
                return (
                  <TouchableOpacity
                    style={{ paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#EDEDED' }}
                    onPress={() =>
                      props.navigation.navigate('LandingPageSaris_Blouses', {
                        ...props,
                        isSearch: true,
                        title: obj.value,
                      })
                    }>
                    <Text style={{ fontSize: 14, fontFamily: Fonts.Assistant400, color: Colors.textcolor }}>{obj.value}</Text>
                  </TouchableOpacity>
                )
              })
              : null
            }

            {filterProduct?.map(item => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate('ProductDetailed', {
                      productId: item.code,
                      // filterProduct: filterProduct,
                      // ...props,
                    })
                  }
                  style={{
                    paddingVertical: 10,
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
                  <Text>{item.price.formattedValue}</Text>
                </TouchableOpacity>
              );
            })}
          </>
        ) : filterProduct.length == 0 && text == '' ? (
          <NoResultFound />
        ) : null}
      </ScrollView>
    </>
  );
}

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
import axios from 'axios';
import Fonts from '../../../assets/fonts';
import NoResultFound from './NoResultFound';
import { BaseURL2 } from '../../Common/Helper';
import NewArrivals from './NewArrivals';

export default function Search(props) {
  const [text, setText] = React.useState('');
  const [filterProduct, setFilterProduct] = useState([]);
  const [suggestedProduct, setSuggestedProduct] = useState([]);
  const [menNewArrivals, setMenNewArrivals] = useState([]);
  const [womenNewArrivals, setWomenNewArrivals] = useState([]);

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

  const getWomenNewArrivals = async () => {
    const fields = 'products(code,name,summary,optionId,configurable,configuratorType,multidimensional,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions(FULL),variantMatrix,sizeChart,url,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantProductOptions(FULL),newArrival,sale,tagName),facets,breadcrumbs,breadcrumbCategories(code,name,url),pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery';
    const query = ':relevance:allCategories:new-women-products'

    await axios.get(`${BaseURL2}/products/search?fields=${fields}&query=${query}&pageSize=5&lang=en&curr=INR`,
    ).then((res) => {
      // console.log('womenNewArrivals==>', JSON.stringify(res.data));
      setWomenNewArrivals(res?.data?.products);
    }).catch((err) => {
      console.log('err==>', err.response);
    })
  };

  const getMenNewArrivals = async () => {
    const fields = 'products(code,name,summary,optionId,configurable,configuratorType,multidimensional,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions(FULL),variantMatrix,sizeChart,url,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantProductOptions(FULL),newArrival,sale,tagName),facets,breadcrumbs,breadcrumbCategories(code,name,url),pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery';
    const query = ':relevance:allCategories:new-men-products'
    await axios.get(`${BaseURL2}/products/search?fields=${fields}&query=${query}&pageSize=5&lang=en&curr=INR`,
    ).then((res) => {
      // console.log('menNewArrivals==>', JSON.stringify(res.data));
      setMenNewArrivals(res?.data?.products);
    }).catch((err) => {
      console.log('err==>', err.response);
    })
  };

  useEffect(() => {
    getWomenNewArrivals()
    getMenNewArrivals()
  }, []);

  useEffect(() => {
    if (!!text) {
      getProductSearchData();
      getSuggestionData();
    } else if (text == '') {
      setFilterProduct([]);
      setSuggestedProduct([])
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
            value={text}
            onSubmitEditing={() =>
              props.navigation.navigate('LandingPageSaris_Blouses', {
                ...props,
                isSearch: true,
                title: text
              })
            }
          />
          <TouchableOpacity
            disabled={!text.length > 0}
            activeOpacity={0.8}
            style={Styles.righticonbox}
            onPress={() => {
              setText('')
            }}>
            <AntDesign name={text.length > 0 ? "closecircle" : "search1"} color={Colors.primarycolor} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.scrollcontainer}>
        {filterProduct.length > 0 ? (
          <>
            {suggestedProduct.length > 0 ?
              suggestedProduct.map((obj, index) => {
                return (
                  <TouchableOpacity
                    key={index.toString()}
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
                  key={item?.code}
                  onPress={() =>
                    props.navigation.navigate('ProductDetailed', {
                      productId: item.code
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
                    {item?.name}
                  </Text>
                  <Text>{item?.price?.formattedValue}</Text>
                </TouchableOpacity>
              );
            })}
          </>
        )
          : text == '' ?
            // <NoResultFound />
            <NewArrivals
              props={props}
              menNewArrivals={menNewArrivals}
              womenNewArrivals={womenNewArrivals}
            />
            :
            <View style={{ height: 500, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 16, color: Colors.textcolor }}>No results found</Text>
            </View>
        }
      </ScrollView>
    </>
  );
}

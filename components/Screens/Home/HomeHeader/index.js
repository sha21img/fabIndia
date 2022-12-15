import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Styles} from './styles';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InputText from '../../../Common/InputText';
import debounce from 'lodash.debounce';
import Share from 'react-native-share';
import {Colors} from '../../../../assets/Colors';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {cartDetail, wishlistDetail} from '../../../Common/Helper/Redux/actions';

export default function HomeHeader(props) {
  const [show, setShow] = useState(false);
  const {cartReducer} = useSelector(state => state);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const {homeheader = false, searchVisible = true} = props;
  const {homeheader = false, searchVisible = true, headertext = ''} = props;

  const [cartdetails, setCartDetails] = useState(null);
  const [totalquantity, setTotalquantity] = useState(0);
  const [wishlistQuantity, setWishlistQuantity] = useState(0);
  const [wishlistproduct, setWishlistproduct] = useState([]);

  useEffect(() => {
    getCartDetails();
  }, [totalquantity]);

  const getCartDetails = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart id', getCartID);
    const type = getToken.isCheck ? 'current' : 'anonymous';
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/${type}/carts/${getCartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
      // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
      // {},
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    // console.log(
    //   'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetails',
    //   response.data,
    // );
    let finalvalue = response?.data?.orderEntries?.reduce(
      (n, {quantity}) => n + quantity,
      0,
    );

    dispatch(cartDetail({data: response.data, quantity: finalvalue}));
    // console.log('quantityquantity', response.data);
    // setCartDetails(response.data);
    // setTotalquantity(finalvalue);
    // setWishlistQuantity(response.data.entries.length);
    if (response.data.name.includes('wishlist')) {
      const filterProduct = response.data.entries.map(item => {
        return {
          code: item.product.baseOptions[0].selected.code,
          item: item,
        };
      });
      dispatch(
        wishlistDetail({
          data: filterProduct,
          quantity: response.data.entries.length,
        }),
      );

      // console.log('filterProduct', filterProduct);
      // setWishlistproduct(filterProduct);
    }
  };

  // const getProductSearchData = async () => {
  //   const response = await axios.get(
  //     `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/search?query=${text}&pageSize=5&lang=en&curr=INR`,
  //   );
  //   console.log('response for search', response.data.products);
  //   setFilterProduct(response.data.products);
  // };
  // useEffect(() => {
  //   if (!!text && text.length > 3) {
  //     getProductSearchData();
  //   } else {
  //     setFilterProduct([]);
  //   }
  // }, [text]);
  // console.log('filterProductfilterProduct', filterProduct);
  const shareAll = () => {
    Share.open({
      message: `helloooooo`,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  const addWishlist = async data => {
    const isAddWishlist = cartReducer.WishListDetail.wishListData.find(
      (item, index) => {
        return item.code == data.product.code;
      },
    );
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getWishlistID = await AsyncStorage.getItem('WishlistID');
    console.log('this us cart id', getWishlistID);
    // if (isAddWishlist) {
    await axios
      .delete(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getWishlistID}/entries/${isAddWishlist.item.entryNumber}?lang=en&curr=INR`,
        // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
        // {quantity: 0, product: {code: isAddWishlist.code}},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        console.log(
          'response.data deletetetetetetettetetet to wishlist',
          response.data,
        );
        getCartDetails();
      })
      .catch(error => {
        console.log('error for remove000 wishlist', error);
      });
    // } else {
    //   const value = await AsyncStorage.getItem('cartID');
    //   console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
    //   console.log('addWishlist', data.code);
    //   await axios
    //     .post(
    //       'https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR',
    //       // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
    //       {quantity: 1, product: {code: data.code}},
    //       {
    //         headers: {
    //           Authorization: `bearer 2LUFsc7CwqiHcQ_ni3ak3IPG3as`,
    //         },
    //       },
    //     )
    //     .then(response => {
    //       console.log('response.data add to wishlist', response.data);
    //       getCartDetails();
    //     })
    //     .catch(error => {
    //       console.log('error for add wishlist', error);
    //     });
    // }
  };
  return (
    <>
      <View style={Styles.container}>
        {homeheader ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <SimpleLineIcons
              name="menu"
              color={Colors.primarycolor}
              size={20}
              onPress={() => props.navigation.openDrawer()}
            />
            <Image source={image.color_logo} style={Styles.imagestyle} />
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={{
                paddingHorizontal: 5,
                flexDirection: 'row',
              }}
              onPress={() => props.navigation.goBack()}>
              <SimpleLineIcons
                name="arrow-left"
                color={Colors.primarycolor}
                size={20}
              />
            </TouchableOpacity>
            <Text style={{paddingLeft: 10, width: '50%'}}>{headertext}</Text>
          </>
        )}

        <View style={Styles.detailContainer}>
          {searchVisible ? (
            <TouchableOpacity
              style={Styles.locationContainer}
              onPress={() => {
                console.log('jiji'),
                  props.navigation.navigate('InitialSearch', {
                    screen: 'Search',
                  });
              }}>
              <EvilIcons
                name="search"
                color={Colors.primarycolor}
                size={30}
                // onPress={() => {
                //   setShow(!show);
                // }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                shareAll();
              }}>
              <Ionicons
                name="share-social"
                color={Colors.primarycolor}
                size={25}
              />
            </TouchableOpacity>
          )}
          {/* <Ionicons name="location-sharp" color={'#792C27'} size={20} />
          <Text numberOfLines={1} style={Styles.locationText}>
            Powai, Mumbai
          </Text> */}
          <TouchableOpacity
            style={Styles.currencyContainer}
            onPress={() =>
              props.navigation.navigate('YourWishlist', {
                // wishlistproduct: wishlistproduct,
                handleClick: addWishlist,
              })
            }>
            <EvilIcons name="heart" color={Colors.primarycolor} size={30} />
            {cartReducer.WishListDetail.wishlistQuantity > 0 ? (
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'red',
                  width: 16,
                  height: 16,
                  borderRadius: 15 / 2,
                  right: 0,
                  top: -10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: 8,
                  }}>
                  {cartReducer.WishListDetail.wishlistQuantity}
                </Text>
              </View>
            ) : null}

            {/* <Text style={Styles.currencyIcon}>₹</Text>
          <Text style={Styles.currencyText}>INR</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.cartContainer}
            onPress={() => {
              props.navigation.navigate('CartPage');
            }}>
            <EvilIcons name="cart" size={30} color={Colors.primarycolor} />
            {totalquantity > 0 ? (
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'red',
                  width: 16,
                  height: 16,
                  borderRadius: 15 / 2,
                  right: 0,
                  top: -10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: 8,
                  }}>
                  {totalquantity}
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>
      {/* {show ? (
        <>
          <View
            style={{
              position: 'absolute',
              left: '10%',
              width: '80%',
              zIndex: 999,
              alignSelf: 'center',
              backgroundColor: 'white',
              elevation: 5,
              paddingHorizontal: 20,
              borderRadius: 40,
            }}>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TextInput
                placeholder="Search here..."
                onChangeText={text => setText(text)}
                value={debouncedText}
                style={{
                  width: '95%',
                }}
              />
              <FontAwesome
                name="close"
                color={Colors.primarycolor}
                size={25}
                onPress={() => {
                  setShow(!show);
                }}
              />
            </View>
            {filterProduct.length > 0 ? (
              filterProduct?.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('ProductDetailed', {
                        productId: item.code,
                      })
                    }
                    style={{paddingBottom: 10, paddingHorizontal: 15}}>
                    <Text>{item.name}</Text>
                    <Text>{item.price.formattedValue}</Text>
                  </TouchableOpacity>
                );
              })
            ) : filterProduct.length ? (
              <Text>No Product Found</Text>
            ) : null}
          </View>
        </>
      ) : null} */}
    </>
  );
}
{
  /* <View style={Styles.container}>
<View style={Styles.logoBox}>
  <Image source={image.color_logo} style={Styles.logo} />
</View>
<View style={Styles.detailContainer}>
  <TouchableOpacity style={Styles.locationContainer}>
    <Ionicons name="location-sharp" color={'#792C27'} size={20} />
    <Text numberOfLines={1} style={Styles.locationText}>
      Powai, Mumbai
    </Text>
  </TouchableOpacity>
  <TouchableOpacity style={Styles.currencyContainer}>
    <Text style={Styles.currencyIcon}>₹</Text>
    <Text style={Styles.currencyText}>INR</Text>
  </TouchableOpacity>
  <TouchableOpacity style={Styles.cartContainer}>
    <AntDesign name="shoppingcart" size={24} color={'#792C27'} />
  </TouchableOpacity>
</View>
</View> */
}

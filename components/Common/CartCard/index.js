import {View, Image, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BaseURL2, imageURL, imageURL2} from '../Helper';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function CartCard(props) {
  const {
    data = [],
    monogramClick = '',
    SizeQClick = '',
    EmiClick = '',
    RemoveClick = '',
    CustomClick = '',
    handleClick = null,
    deleteCartDetail = null,
  } = props;
  const [quantity, setQuantity] = useState(null);
  const {cartReducer} = useSelector(state => state);

  useEffect(() => {
    setupData();
  }, []);

  const setupData = () => {
    let quantity = data.entries.reduce((n, {quantity}) => n + quantity, 0);
    // console.log('quantityquantity', quantity);
    setQuantity(quantity);
  };
  const isHandleClick = async item => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);

    if (getToken.isCheck) {
      if (item.item.product.stock.stockLevelStatus == 'inStock') {
        handleClick(item.item);
      } else {
        Toast.showWithGravity('No item left !', Toast.LONG, Toast.TOP);
      }
    } else {
      Toast.showWithGravity('Please Login First', Toast.LONG, Toast.TOP);

      props.navigation.navigate('MyAccount', {
        screen: 'Login_Register',
      });
    }
  };
  const MoveToWishList = async item => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getWishlistID = await AsyncStorage.getItem('WishlistID');
    console.log('MoveToWishList', getWishlistID);
    console.log('lpkoijhugy', item.item.quantity, item.item.product.code);
    // deleteCartDetail(item.item);

    await axios
      .post(
        `${BaseURL2}/users/current/carts/${getWishlistID}/entries?lang=en&curr=INR`,
        {
          quantity: item.item.quantity,
          product: {
            code: item.item.product.code,
          },
        },
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        console.log('response.datawishlist', response.data);
        deleteCartDetail(item.item);
        Toast.showWithGravity('Moved to Wishlist ', Toast.LONG, Toast.TOP);

        // getCartDetails();
      })
      .catch(error => {
        console.log('error for remove000 wishlist', error);
        if (error.response.status == 401) {
          // logout(dispatch);
        }
      });
  };

  const cardListRender = item => {
    console.log('poiuytrewqasdfghjklmnbvcxz', item);
    const isActive = cartReducer.WishListDetail.wishListData.find(items => {
      return items.code == item.item.product.code;
    });
    console.log('item?.item?.product?.priceAfterDiscount?.value', item?.item);
    return (
      <>
        <View style={Styles.mainContainer} key={Math.random()}>
          {false ? (
            <View style={Styles.offerTextContainer}>
              <Text style={Styles.offerText}>
                <Text style={Styles.offerText1}>Buy 2 Get 2 </Text>for apparel,
                only on discounted...
              </Text>
            </View>
          ) : null}

          <View style={Styles.cartContainer}>
            <Image
              resizeMode="contain"
              style={[
                Styles.imagedimension,
                {
                  height:
                    item.item?.product?.baseOptions.length > 0 ? 170 : 'auto',
                },
              ]}
              source={{
                uri: `${imageURL2}/${item.item?.product?.images[0]?.url}`,
              }}
            />
            <View style={Styles.detailContainer}>
              <Text style={Styles.title}>{item?.item?.product?.name}</Text>

              {item.item?.product?.baseOptions.length > 0 ? (
                <View style={Styles.colorBox}>
                  <Text style={Styles.colorText}>
                    Color -{' '}
                    {
                      item.item?.product?.baseOptions[0]?.selected
                        ?.variantOptionQualifiers[0]?.value
                    }{' '}
                  </Text>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 50,
                      marginHorizontal: 3,
                    }}
                    source={{
                      uri: `${imageURL}${item.item?.product?.baseOptions[0]?.selected?.variantOptionQualifiers[0]?.swatchColorImageUrl}`,
                    }}
                  />
                </View>
              ) : null}
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 5,
                }}>
                {item.item?.product?.baseOptions.length > 0 ? (
                  <TouchableOpacity
                    style={Styles.sizeContainer}
                    onPress={() => SizeQClick(item?.item)}>
                    <Text style={Styles.sizeText}>
                      {item.item?.product?.baseOptions[0]?.selected
                        ?.variantOptionQualifiers[1]?.value == 'Free Size'
                        ? 'Free Size'
                        : `Size ${item.item?.product?.baseOptions[0]?.selected?.variantOptionQualifiers[1]?.value}`}
                    </Text>
                    <MaterialIcons name="keyboard-arrow-down" size={20} />
                  </TouchableOpacity>
                ) : null}
                <TouchableOpacity
                  style={Styles.quantityContainer}
                  onPress={() => SizeQClick(item?.item)}>
                  <Text style={Styles.QuantityText}>
                    Quantity {item?.item?.quantity}
                  </Text>
                  <MaterialIcons name="keyboard-arrow-down" size={20} />
                </TouchableOpacity>
              </View>
              <View style={Styles.currencyContainer}>
                <Text style={Styles.curr}>₹ {item?.item?.basePrice.value}</Text>
                <Text
                  style={[Styles.curr1, {textDecorationLine: 'line-through'}]}>
                  ₹ {item?.item?.product?.price?.value}
                </Text>
              </View>
              <Text style={Styles.saveText}>
                You save ₹{item?.item?.product?.totalDiscount?.value}!
              </Text>
              {/* <TouchableOpacity onPress={() => monogramClick()}>
                <Text style={Styles.typeText}>Monogrammed</Text>
              </TouchableOpacity> */}
              {/* <TouchableOpacity onPress={() => CustomClick()}>
                <Text style={Styles.typeText}>Customized</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => EmiClick()}>
                <Text style={Styles.typeText}>EMI selected</Text>
              </TouchableOpacity> */}
            </View>
          </View>

          <View style={Styles.btnContainer}>
            <TouchableOpacity
              onPress={() => RemoveClick(item?.item)}
              style={Styles.btn}>
              <Text style={Styles.btnText}>Remove</Text>
            </TouchableOpacity>
            {item.item?.product?.baseOptions.length > 0 ? (
              <View style={Styles.divider}></View>
            ) : null}
            {item.item?.product?.baseOptions.length > 0 ? (
              <TouchableOpacity
                style={Styles.btn}
                onPress={() => {
                  if (isActive) {
                    isHandleClick(item);
                  } else {
                    MoveToWishList(item);
                  }
                }}>
                <Text style={Styles.btnText}>
                  {isActive ? 'Remove from wishlist' : 'Move to wishlist'}
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </>
    );
  };
  return (
    <FlatList
      data={data.entries}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index}
      renderItem={cardListRender}
    />
  );
}

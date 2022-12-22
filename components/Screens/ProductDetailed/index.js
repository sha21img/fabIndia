import {
  View,
  Text,
  ScrollView,
  FlatList,
  Modal,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import React, { useEffect, useState } from 'react';
import Fonts from '../../../assets/fonts';
import Details from './Details';
import CloseIcon from 'react-native-vector-icons/Ionicons';
import Size_Color from './Size_Color';
import Footer from './Footer';
import CommonTopTab from '../../Common/CommonTopTab';
import { StoreDetails } from '../../../constant';
import { SliderBox } from 'react-native-image-slider-box';
import axios from 'axios';
import {logout, postData} from '../../Common/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import { Colors } from '../../../assets/Colors';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartDetail,
  wishlistDetail,
} from '../../Common/Helper/Redux/actions';
import Card4 from '../../Common/Card4';
import FastImage from 'react-native-fast-image';

export default function ProductDetailed(props) {
  const { productId, imageUrlCheck } = props?.route?.params;
  const [showcartbutton, setShowcartbutton] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [productdetail, setProductDetail] = useState({});
  const [cartID, setCartID] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [quantity, setQuantity] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(null);
  const [productImage, setProductImage] = React.useState([]);
  const [zoomImage, setZoomImage] = React.useState([]);
  const [productID, setProductID] = useState(productId);
  const [commonproduct, setCommonproduct] = useState([]);
  const [stockcheck, Setstockcheck] = useState(null);
  const [wishlistproductCode, setWishlistproductCode] = useState([]);
  const dispatch = useDispatch();
  const { cartReducer } = useSelector(state => state);

  useEffect(() => {
    setProductID(productId);
  }, []);

  const getproductDetailedData = async () => {
    const value = await AsyncStorage.getItem('cartID');
    setCartID(value);

    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}?fields=code,configurable,configuratorType,name,summary,optionId,stock(DEFAULT),price(formattedValue,value,DEFAULT),images(galleryIndex,FULL),baseProduct,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantMatrix(FULL),sizeChart,averageRating,description,canonicalUrl,availableForPickup,url,numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags,baseOptions,additionalDetails,DEFAULT,classifications,variantOptions,variantType&lang=en&curr=INR`,
    );
    // console.log('response.data04733333333333333333', response.data);
    setProductDetail(response.data);

    if (response.data?.baseOptions?.length > 0) {
      setShowAdd(false);
    } else {
      setShowAdd(true);
    }
    let images = [];
    let zoomImage = [];
    for (let i = 0; i < response.data.images.length; i++) {
      const item = response.data.images[i];
      if (item.format == 'product' && item.imageType == 'GALLERY') {
        images.push('https://apisap.fabindia.com/' + item.url);
        zoomImage.push({ url: 'https://apisap.fabindia.com/' + item.url });
      }
    }
    setProductImage(images);
    setZoomImage(zoomImage);
  };

  const bestSellers = async () => {
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/bestSeller/bestSellerProducts?fields=products(FULL)&productCode=${productId}&lang=en&curr=INR`,
    );
    setCommonproduct(response.data);
  };

  useEffect(() => {
    getproductDetailedData();
    bestSellers();
  }, []);

  const DetailsData1 = (props, item, productDetail) => {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: 'white',
          flexGrow: 1,
        }}>
        {!!productDetail?.classifications &&
          productDetail?.classifications[0].features.map((item, index) => {
            return (
              <View
                style={{
                  paddingVertical: 10,
                  borderTopWidth: 1,
                  borderTopColor: 'grey',
                  flexDirection: 'row',
                  backgroundColor: '#FFFFFF',
                  // marginVertical: 10,
                  borderBottomWidth:
                    productDetail?.classifications[0].features[
                      productDetail?.classifications[0].features.length - 1
                    ] == item
                      ? 1
                      : null,
                  borderBottomColor: 'grey',
                }}>
                <Text style={{ width: '40%' }}>{item.name}</Text>
                <Text style={{ width: '60%' }}>
                  {item.featureValues[0].value}
                </Text>
              </View>
            );
          })}
      </ScrollView>
    );
  };

  const DetailsData = (props, item, productDetail) => {
    return (
      <>
        <View style={{ padding: 15, backgroundColor: 'white', flexGrow: 1 }}>
          <Text
            style={{
              fontFamily: Fonts.Assistant400,
              fontSize: 16,
              lineHeight: 22,
            }}>
            {productdetail?.description}
          </Text>
        </View>
      </>
    );
  };

  const screenObj = {
    Description: DetailsData,
    Specifications: DetailsData1,
  };

  const dataMap = StoreDetails.map(item => ({
    detail: productdetail,
    title: item,
    card: screenObj[item],
  }));

  const getColorProductId = (data, stock) => {
    setProductID(data);
    Setstockcheck(stock);
    setShowAdd(true);
  };

  const getImageData = data => {
    getgetImageDataproductDetailed(data);
  };

  const getgetImageDataproductDetailed = async Id => {
    const value = await AsyncStorage.getItem('cartID');
    setCartID(value);

    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${Id}?fields=code,configurable,configuratorType,name,summary,optionId,stock(DEFAULT),price(formattedValue,value,DEFAULT),images(galleryIndex,FULL),baseProduct,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantMatrix(FULL),sizeChart,averageRating,description,canonicalUrl,availableForPickup,url,numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags,baseOptions,additionalDetails,DEFAULT,classifications,variantOptions,variantType&lang=en&curr=INR`,
    );

    let images = [];
    let zoomImage = [];
    for (let i = 0; i < response.data.images.length; i++) {
      const item = response.data.images[i];
      if (item.format == 'product' && item.imageType == 'GALLERY') {
        images.push('https://apisap.fabindia.com/' + item.url);
        zoomImage.push({ url: 'https://apisap.fabindia.com/' + item.url });
      }
    }
    setProductImage(images);
    setZoomImage(zoomImage);
  };
  const AddtoCart = async () => {
    // console.log('asdfasdfasdfasdfasdfasdfasdf', quantity, productID);
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const type = getToken.isCheck ? 'current' : 'anonymous';
    // console.log('getTokengetTokengetTokengetToken', getToken, getCartID);
    await axios
      .post(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/${type}/carts/${getCartID}/entries?lang=en&curr=INR`,
        {
          quantity: quantity,
          product: {
            code: productID,
          },
        },
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        // console.log('responseresponseresponse', response.data);
        getCartDetials1();
        setCartSuccess(response.data);
        Toast.showWithGravity('Added to Your Cart', Toast.LONG, Toast.TOP);
        setShowcartbutton(true);
        setQuantity(null);
      })
      .catch(errors => {
        Toast.showWithGravity(
          errors?.response?.data?.errors[0]?.message,
          Toast.LONG,
          Toast.TOP,
        );
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  const getCartDetials1 = async () => {
    const value = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const response = await axios.get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        dispatch(
          cartDetail({
            data: response.data,
            quantity: response.data.entries.length,
          }),
        );
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });

    // setCartDetails(response.data);
  };

  const isWishlisted = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    if (getToken.isCheck) {
      getWishListDetail();
    }
  };

  useEffect(() => {
    isWishlisted();
  }, []);
  const getWishListDetail = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getWishlistID = await AsyncStorage.getItem('WishlistID');

    const value = await AsyncStorage.getItem('cartID');
    const aa =
      'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue, value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)';
    const response = await axios.get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getWishlistID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        if (response.data.name.includes('wishlist')) {
          const res = response.data.entries.find((item, index) => {
            return { code: item.product.baseOptions[0].selected.code };
          });

          const filterProductId = response.data.entries.map(item => {
            return {
              code: item.product.baseOptions[0].selected.code,
              item: item,
            };
          });
          dispatch(
            wishlistDetail({
              data: filterProductId,
              quantity: response.data.entries.length,
            }),
          );
        }
      })
      .catch(error => {
        console.log('error for get wihslist detail', error);
        if (error.response.status == 401) {
          logout(dispatch);
        }
      });
  };

  const addWishlist = async data => {
    const isAddWishlist = cartReducer.WishListDetail.wishListData.find(
      (item, index) => {
        return item.code == data.code;
      },
    );
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getWishlistID = await AsyncStorage.getItem('WishlistID');
    // console.log('this us cart id', data.code);
    if (!!isAddWishlist) {
      const response = await axios
        .delete(
          `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getWishlistID}/entries/${isAddWishlist.item.entryNumber}?lang=en&curr=INR`,
          {
            headers: {
              Authorization: `${getToken.token_type} ${getToken.access_token}`,
            },
          },
        )
        .then(response => {
          getWishListDetail();
        })
        .catch(error => {
          console.log('error for remove000 wishlist', error);
          if (error.response.status == 401) {
            logout(dispatch);
          }
        });
    } else {
      const response = await axios
        .post(
          `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getWishlistID}/entries?lang=en&curr=INR`,
          { quantity: 1, product: { code: data.code } },
          {
            headers: {
              Authorization: `${getToken.token_type} ${getToken.access_token}`,
            },
          },
        )
        .then(response => {
          getWishListDetail();
        })
        .catch(error => {
          console.log('error for add wishlist', error);
          if (error.response.status == 401) {
            logout(dispatch);
          }
        });
    }
  };

  const sendCount = count => {
    // console.log(
    //   'countttttttttttttttttttttttttttttttttttttttttt00000000000000088888888888888888',
    //   count,
    // );
    setQuantity(count);
  };

  return (
    <>
      {productdetail && (
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}>

          <View style={{ marginBottom: 20, height: ((Dimensions.get('window').height) * 0.70) }}>
            <SliderBox
              circleLoop={true}
              images={productImage}
              ImageComponent={FastImage}
              inactiveDotColor="#90A4AE"
              dotColor={Colors.primarycolor}
              ImageComponentStyle={{ width: '100%', height: '100%' }}
              pagingEnabled={Platform.select({ android: true })}
              dotStyle={{ top: 25, width: 8, height: 8, borderRadius: 5, marginHorizontal: -10 }}
              onCurrentImagePressed={curr => {
                setModalVisible(true);
              }}
            />
          </View>

          <Details productdetail={productdetail} productId={productId} />
          
          {productdetail?.baseOptions?.length > 0 && (
            <Size_Color
              customStyle={{ marginTop: 20 }}
              productdetail={productdetail}
              productId={productId}
              imageUrlCheck={imageUrlCheck}
              getColorProductId={getColorProductId}
              getImageData={getImageData}
              sendCount={sendCount}
            />
          )}

          <View style={{ paddingHorizontal: 5 }}>
            <CommonTopTab data={dataMap} />
          </View>
          <View style={{ marginTop: 30, marginHorizontal: 15 }}>
            <Text
              style={{
                paddingBottom: 10,
                fontFamily: Fonts.PlayfairDisplay900Italic,
                fontSize: 20,
              }}>
              More in {commonproduct?.categoryData?.name}{' '}
            </Text>

            <FlatList
              data={commonproduct?.result?.products}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) => {
                return <Card4 items={item} {...props} />;
              }}
            />
          </View>
        </ScrollView>
      )}

      <Footer
        {...props}
        oos={true}
        handleClick={AddtoCart}
        handleWishListAdd={addWishlist}
        disabled={!!showAdd && stockcheck != 0 ? false : true}
        productdetail={productdetail}
        showcartbutton={showcartbutton}
        setShowcartbutton={setShowcartbutton}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        style={{backgroundColor: 'white'}}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{ width: '100%', flex: 1, backgroundColor: 'red' }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
            }}>
            <ImageViewer
              backgroundColor="white"
              // useNativeDriver
              imageUrls={zoomImage}
              // renderIndicator={() => null}
              render={() => {
                return <View style={{backgroundColor: 'red'}}></View>;
              }}
            />
            <TouchableOpacity
              style={{margin: 30, position: 'absolute', top: 0}}
              onPress={() => {
                setModalVisible(false);
              }}>
              <CloseIcon
                name="close-circle-outline"
                size={25}
                color={Colors.textcolor}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

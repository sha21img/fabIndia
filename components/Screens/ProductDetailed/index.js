import {
  View,
  Text,
  ScrollView,
  FlatList,
  Modal,
  TouchableOpacity,
  Platform,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import React, {useEffect, useState} from 'react';
import Fonts from '../../../assets/fonts';
import Details from './Details';
import CloseIcon from 'react-native-vector-icons/Ionicons';
import Size_Color from './Size_Color';
import Footer from './Footer';
import CommonTopTab from '../../Common/CommonTopTab';
import {StoreDetails} from '../../../constant';
import {SliderBox} from 'react-native-image-slider-box';
import axios from 'axios';
import {BaseURL2, logout, postData} from '../../Common/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {Colors} from '../../../assets/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {cartDetail, wishlistDetail} from '../../Common/Helper/Redux/actions';
import Card4 from '../../Common/Card4';
import FastImage from 'react-native-fast-image';
import RenderHtml from 'react-native-render-html';
import HomeHeader from '../Home/HomeHeader';

export default function ProductDetailed(props) {
  const {productId, imageUrlCheck} = props?.route?.params;
  const [showcartbutton, setShowcartbutton] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [productdetail, setProductDetail] = useState({});
  const [cartID, setCartID] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [SelectText, setSelectText] = useState(false);
  const [quantity, setQuantity] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(null);
  const [productImage, setProductImage] = React.useState([]);
  const [zoomImage, setZoomImage] = React.useState([]);
  const [productID, setProductID] = useState(productId);
  const [commonproduct, setCommonproduct] = useState([]);
  const [stockcheck, Setstockcheck] = useState(null);
  const [wishlistproductCode, setWishlistproductCode] = useState([]);
  const dispatch = useDispatch();
  const {cartReducer} = useSelector(state => state);
  const [selectedTab, setSelectedTab] = useState('Description');

  useEffect(() => {
    setProductID(productId);
  }, []);

  const getproductDetailedData = async () => {
    const value = await AsyncStorage.getItem('cartID');
    setCartID(value);

    const response = await axios.get(
      `${BaseURL2}/products/${productId}?fields=code,configurable,configuratorType,name,summary,optionId,stock(DEFAULT),price(formattedValue,value,DEFAULT),images(galleryIndex,FULL),baseProduct,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantMatrix(FULL),sizeChart,averageRating,description,canonicalUrl,availableForPickup,url,numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags,baseOptions,additionalDetails,DEFAULT,classifications,variantOptions,variantType&lang=en&curr=INR`,
    );

    setProductDetail(response.data);
    if (
      response.data?.baseOptions[0].options[0].variantOptionQualifiers[1]
        .value == 'Free Size'
    ) {
      // console.log("iffffffffffffffffffffffffffffffff0000000000000000000000000000000---------------------------------------------------------------------------------")
      setShowAdd(true);
    } else {
      setShowAdd(false);
    }
    // if (response.data?.baseOptions?.length > 0) {
    //   console.log("elseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee---------------------------------------------------------------------------------")

    //   setShowAdd(false);
    // } else {
    //   setShowAdd(true);
    // }
    let images = [];
    let zoomImage = [];
    for (let i = 0; i < response.data.images.length; i++) {
      const item = response.data.images[i];
      if (item.format == 'product' && item.imageType == 'GALLERY') {
        images.push('https://apisap.fabindia.com/' + item.url);
        zoomImage.push({url: 'https://apisap.fabindia.com/' + item.url});
      }
    }
    setProductImage(images);
    setZoomImage(zoomImage);
  };

  const bestSellers = async () => {
    const response = await axios.get(
      `${BaseURL2}/bestSeller/bestSellerProducts?fields=products(FULL)&productCode=${productId}&lang=en&curr=INR`,
    );
    setCommonproduct(response.data);
  };

  useEffect(() => {
    getproductDetailedData();
    bestSellers();
  }, []);

  const SpecificationsData = (props, item, productDetail) => {
    return (
      <ScrollView
        contentContainerStyle={{
          padding: 15,
          backgroundColor: 'white',
          flexGrow: 1,
        }}>
        {!!productdetail?.classifications &&
          productdetail?.classifications[0].features.map((item, index) => {
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
                    productdetail?.classifications[0].features[
                      productdetail?.classifications[0].features.length - 1
                    ] == item
                      ? 1
                      : null,
                  borderBottomColor: 'grey',
                }}>
                <Text style={{width: '40%'}}>{item.name}</Text>
                <Text style={{width: '60%'}}>
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
        <View style={{padding: 15, backgroundColor: 'white', flexGrow: 1}}>
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

  const AdditionalData = (props, item, productDetail) => {
    const {width} = useWindowDimensions();
    return (
      <>
        <View style={{padding: 15, backgroundColor: 'white', flexGrow: 1}}>
          <RenderHtml
            contentWidth={width}
            source={{html: productdetail?.additionalDetails}}
          />
        </View>
      </>
    );
  };

  const screenObj = {
    Description: DetailsData,
    Specifications: SpecificationsData,
    'Additional Details': AdditionalData,
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
      `${BaseURL2}/products/${Id}?fields=code,configurable,configuratorType,name,summary,optionId,stock(DEFAULT),price(formattedValue,value,DEFAULT),images(galleryIndex,FULL),baseProduct,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantMatrix(FULL),sizeChart,averageRating,description,canonicalUrl,availableForPickup,url,numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags,baseOptions,additionalDetails,DEFAULT,classifications,variantOptions,variantType&lang=en&curr=INR`,
    );

    let images = [];
    let zoomImage = [];
    for (let i = 0; i < response.data.images.length; i++) {
      const item = response.data.images[i];
      if (item.format == 'product' && item.imageType == 'GALLERY') {
        images.push('https://apisap.fabindia.com/' + item.url);
        zoomImage.push({url: 'https://apisap.fabindia.com/' + item.url});
      }
    }
    setProductImage(images);
    setZoomImage(zoomImage);
  };
  const AddtoCart = async () => {
    console.log(
      'asdfasdfasdfasdfasdfasdfasdfthyhyyuuyuyuyuyyuyuyu',
      productID,
      showAdd,
    );
    if (showAdd) {
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      const getCartID = await AsyncStorage.getItem('cartID');
      const type = getToken.isCheck ? 'current' : 'anonymous';
      // console.log('getTokengetTokengetTokengetToken', getToken, getCartID);
      await axios
        .post(
          `${BaseURL2}/users/${type}/carts/${getCartID}/entries?lang=en&curr=INR`,
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
    } else {
      setSelectText(true);
    }
  };
  const getCartDetials1 = async () => {
    const value = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const type = getToken.isCheck ? 'current' : 'anonymous';

    await axios
      .get(
        `${BaseURL2}/users/${type}/carts/${getCartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqq', response.data);

        let finalvalue = response?.data?.deliveryItemsQuantity;
        dispatch(cartDetail({data: response.data, quantity: finalvalue}));
      })
      .catch(errors => {
        console.log('111111111111111', errors);
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
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
    await axios
      .get(
        `${BaseURL2}/users/current/carts/${getWishlistID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        if (response.data.name.includes('wishlist')) {
          const res = response.data.entries.find((item, index) => {
            return {code: item.product.baseOptions[0].selected.code};
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
    if (showAdd) {
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
        await axios
          .delete(
            `${BaseURL2}/users/current/carts/${getWishlistID}/entries/${isAddWishlist.item.entryNumber}?lang=en&curr=INR`,
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
        await axios
          .post(
            `${BaseURL2}/users/current/carts/${getWishlistID}/entries?lang=en&curr=INR`,
            {quantity: 1, product: {code: data.code}},
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
    } else {
      setSelectText(true);
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
          contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
          <View
            style={{
              marginBottom: 20,
              height: Dimensions.get('window').height * 0.7,
            }}>
            <SliderBox
              // circleLoop={true}
              images={productImage}
              ImageComponent={FastImage}
              inactiveDotColor="#90A4AE"
              dotColor={Colors.primarycolor}
              ImageComponentStyle={{width: '100%', height: '100%'}}
              pagingEnabled={Platform.select({android: true})}
              dotStyle={{
                top: 25,
                width: 8,
                height: 8,
                borderRadius: 5,
                marginHorizontal: -10,
              }}
              onCurrentImagePressed={curr => {
                setModalVisible(true);
              }}
            />

            <View style={{position: 'absolute', top: 0, width: '100%'}}>
              <HomeHeader
                {...props}
                searchVisible={false}
                isTransparent={true}
              />
            </View>
          </View>

          <Details productdetail={productdetail} productId={productId} />

          {productdetail?.baseOptions?.length > 0 && (
            <Size_Color
              customStyle={{marginTop: 20}}
              productdetail={productdetail}
              productId={productId}
              imageUrlCheck={imageUrlCheck}
              getColorProductId={getColorProductId}
              getImageData={getImageData}
              sendCount={sendCount}
              SelectText={SelectText}
              setSelectText={setSelectText}
            />
          )}

          <View style={{paddingHorizontal: 5, flexDirection: 'row'}}>
            {StoreDetails.map(item => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setSelectedTab(item)}
                  style={{
                    marginLeft: 10,
                    borderBottomWidth: 2,
                    borderBottomColor:
                      selectedTab == item ? Colors.primarycolor : 'transparent',
                    paddingVertical: 3,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: Fonts.Assistant300,
                      color:
                        selectedTab == item
                          ? Colors.primarycolor
                          : Colors.textcolor,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {selectedTab == 'Description' ? (
            <DetailsData />
          ) : selectedTab == 'Specifications' ? (
            <SpecificationsData />
          ) : (
            <AdditionalData />
          )}

          {/* <View style={{paddingHorizontal: 5}}>
            <CommonTopTab data={dataMap} />
          </View> */}
          <View style={{marginTop: 30, marginHorizontal: 15}}>
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
              renderItem={({item}) => {
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
        disabled={!!!showAdd && stockcheck != 0 ? false : true}
        productdetail={productdetail}
        showcartbutton={showcartbutton}
        setShowcartbutton={setShowcartbutton}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
          }}>
          <ImageViewer imageUrls={zoomImage} />
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
      </Modal>
    </>
  );
}

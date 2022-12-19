import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CommonCarousel from '../../Common/CommonCarousel';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import Details from './Details';
import Size_Color from './Size_Color';
import Popular from './Popular';
import Footer from './Footer';
import Art_Artist from './Art_Artist';
import CommonTopTab from '../../Common/CommonTopTab';
import {StoreDetails} from '../../../constant';
import {SliderBox} from 'react-native-image-slider-box';
import Customize from './Customize';
import axios from 'axios';
import {getCartID, postData} from '../../Common/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {Colors} from '../../../assets/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {cartDetail, wishlistDetail} from '../../Common/Helper/Redux/actions';
import { useFocusEffect } from '@react-navigation/native';
const width = Dimensions.get('window').width;

export default function ProductDetailed(props) {
  const {productId,imageUrlCheck} = props?.route?.params;

  const [productdetail, setProductDetail] = useState({});
  const [cartID, setCartID] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const [cartSuccess, setCartSuccess] = useState(null);
  const [productImage, setProductImage] = React.useState([]);
  const [productID, setProductID] = useState(productId);
  const [wishlistproductCode, setWishlistproductCode] = useState([]);
  const dispatch = useDispatch();
  const {cartReducer} = useSelector(state => state);
  useEffect(() => {
    setProductID(productId);
  }, []);

  const getInitialCartID = async () => {
    const cartId = await AsyncStorage.getItem('cartID');
    console.log('cartId==>', cartId);
    cartId == null && getCartID();
  };

  useFocusEffect(
    React.useCallback(() => {
      getInitialCartID()
    }, [])
  );


  const getproductDetailedData = async () => {
    const value = await AsyncStorage.getItem('cartID');
    setCartID(value);

    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}?fields=code,configurable,configuratorType,name,summary,optionId,stock(DEFAULT),price(formattedValue,value,DEFAULT),images(galleryIndex,FULL),baseProduct,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantMatrix(FULL),sizeChart,averageRating,description,canonicalUrl,availableForPickup,url,numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags,baseOptions,additionalDetails,DEFAULT,classifications,variantOptions,variantType&lang=en&curr=INR`,
      // ` https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}?fields=code,configurable,configuratorType,name,summary,optionId,stock(DEFAULT),price(formattedValue,value,DEFAULT),images(galleryIndex,FULL),baseProduct,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantMatrix(FULL),sizeChart,averageRating,description,canonicalUrl,availableForPickup,url,numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags,baseOptions,additionalDetails,DEFAULT,classifications,variantOptions,variantType&lang=en&curr=INR`,
      // `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}?fields=name,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType&lang=en&curr=INR`,
      // `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}`,
    );
    console.log('response.data04733333333333333333', response.data);
    setProductDetail(response.data);
    if (response.data?.baseOptions?.length > 0) {
      setShowAdd(false);
    } else {
      setShowAdd(true);
    }
    let images = [];
    for (let i = 0; i < response.data.images.length; i++) {
      const item = response.data.images[i];
      images.push('https://apisap.fabindia.com/' + item.url);
    }
   
    setProductImage(images);
  };
  useEffect(() => {
    getproductDetailedData();
  }, []);

  // const getCartID = async () => {
  //   const response = await axios.post(
  //     `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts`,
  //     {},
  //     {
  //       headers: {
  //         Authorization: `Bearer deo4mFuPyvLg_84XL2FJfe2tRMg`,
  //       },
  //     },
  //   );
  //   console.log(
  //     'getCartIDgetCartIDgetCartIDgetCartIDgetCartIDgetCartIDgetCartIDgetCartIDgetCartIDgetCartID',
  //     response.data,
  //   );
  //   setCartID(response.data?.code);
  // };

  const WomenCarouselData = {
    banners:
      'FabHomepageSection14ABannerComponent FabHomepageSection14BBannerComponent',
    container: 'false',
    modifiedtime: '2022-07-27T16:17:04.554+05:30',
    name: 'FabBannerResponsiveCarouselComponent',
    parents:
      'FabHomepageSection14ABannerComponent FabHomepageSection14BBannerComponent',
    synchronizationBlocked: 'false',
    typeCode: 'FabBannerResponsiveCarouselComponent',
    uid: 'FabHomepageSection14CaroselComponent',
    uuid: 'eyJpdGVtSWQiOiJGYWJIb21lcGFnZVNlY3Rpb24xNENhcm9zZWxDb21wb25lbnQiLCJjYXRhbG9nSWQiOiJmYWJpbmRpYS1iMmNDb250ZW50Q2F0YWxvZyIsImNhdGFsb2dWZXJzaW9uIjoiT25saW5lIn0=',
  };
  const WomenCarouselText = () => {
    return <></>;
  };
  const DetailsData1 = (props, item, productDetail) => {
    console.log(
      'productDetail,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,ppppppppppppppppppppppppppppppppppp',
      productDetail,
    );
    return (
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: 'white',
          flexGrow: 1,
        }}>
        {!!productDetail.classifications &&
          productDetail.classifications[0].features.map((item, index) => {
            return (
              <View
                style={{
                  paddingVertical: 10,
                  borderTopWidth: 1,
                  borderTopColor: 'grey',
                  flexDirection: 'row',
                  backgroundColor: '#FFFFFF',
                  marginVertical: 10,
                  borderBottomWidth:
                    productDetail.classifications[0].features[
                      productDetail.classifications[0].features.length - 1
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
  const screenObj = {
    Description: DetailsData,
    Specification: DetailsData1,
  };
  const dataMap = StoreDetails.map(item => ({
    detail: productdetail,
    title: item,
    card: screenObj[item],
  }));
  const getColorProductId = data => {
    console.log('data5555555555555555555555555555555555555555555555', data);
    setProductID(data);
    setShowAdd(true);
  };
  const getImageData = data => {
    console.log("getImageDatagetImageDatagetImageDatagetImageDatagetImageDatagetImageDatagetImageDatagetImageDatagetImageDatagetImageData",data)
    getgetImageDataproductDetailed(data)
  //   const newImage = [];
  // console.log("datadatadatasetProductImagesetProductImagesetProductImagesetProductImage",data)
  //   const image = 'https://apisap.fabindia.com/' + data;
  //   newImage.push(image)
  //   console.log("imageimageimageimageimageimageimageimageimageimageimageimageimage",image)
  //   setProductImage(newImage);   
  };
  const getgetImageDataproductDetailed = async (Id) => {
    const value = await AsyncStorage.getItem('cartID');
    setCartID(value);

    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${Id}?fields=code,configurable,configuratorType,name,summary,optionId,stock(DEFAULT),price(formattedValue,value,DEFAULT),images(galleryIndex,FULL),baseProduct,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantMatrix(FULL),sizeChart,averageRating,description,canonicalUrl,availableForPickup,url,numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags,baseOptions,additionalDetails,DEFAULT,classifications,variantOptions,variantType&lang=en&curr=INR`,
      // ` https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}?fields=code,configurable,configuratorType,name,summary,optionId,stock(DEFAULT),price(formattedValue,value,DEFAULT),images(galleryIndex,FULL),baseProduct,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantMatrix(FULL),sizeChart,averageRating,description,canonicalUrl,availableForPickup,url,numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags,baseOptions,additionalDetails,DEFAULT,classifications,variantOptions,variantType&lang=en&curr=INR`,
      // `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}?fields=name,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType&lang=en&curr=INR`,
      // `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}`,
    );

    // console.log(
    //   'productdetail.variantMatrix[0].',
    //   response.data?.variantMatrix[0]?.variantOption?.variantOptionQualifiers[0]
    //     ?.image?.url,
    // );
    let images = [];
    for (let i = 0; i < response.data.images.length; i++) {
      const item = response.data.images[i];
      images.push('https://apisap.fabindia.com/' + item.url);
    }
    // const newImage = response.data?.variantMatrix.map(item => {
    //   return (
    //     'https://apisap.fabindia.com/' +
    //     item.variantOption?.variantOptionQualifiers[0]?.image?.url
    //   );
    // });
    setProductImage(images);
  };
  const AddtoCart = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const type = getToken.isCheck ? 'current' : 'anonymous';
    console.log('login type', type);
    console.log('cart id', getToken);
    console.log('cart id', getCartID);

    await axios
      .post(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/${type}/carts/${getCartID}/entries?lang=en&curr=INR`,
        {
          quantity: 1,
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
      })
      .catch(error => {
        console.log(
          'add to cart )))))))))))))))))))))))))))))))))))))))))))))))))',
          JSON.stringify(error.response),
        );
        Toast.showWithGravity(error.response.data.errors[0].message, Toast.LONG, Toast.TOP);
      });
  };
  const getCartDetials1 = async () => {
    const value = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const type = getToken.isCheck ? 'current' : 'anonymous';
    console.log('this us cart id', getCartID);
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/${type}/carts/${getCartID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    console.log(
      'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetails',
      JSON.stringify(response.data),
    );
    dispatch(
      cartDetail({
        data: response.data,
        quantity: response.data.entries.length,
      }),
    );
    // setCartDetails(response.data);
  };
  useEffect(() => {
    getCartDetails();
  }, []);
  const getCartDetails = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart id', getCartID);
    const getWishlistID = await AsyncStorage.getItem('WishlistID');

    const value = await AsyncStorage.getItem('cartID');
    console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
    const aa =
      'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue, value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)';
    await axios
      .get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getWishlistID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
        // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832?fields=${aa}&lang=en&curr=INR`,
        // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/?fileds=${aa}?lang=en&curr=INR`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        console.log(
          'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetails',
          response.data.name,
        );
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
          console.log(
            'respppppppppppppppppppppppppppppppppppppppppppppppppppp',
            filterProductId,
          );
          // setWishlistproductCode(filterProductId);
        }
      })
      .catch(error => {
        console.log('error for get crt detail', error);
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
    console.log('this us cart id', data.code);
    if (!!isAddWishlist) {
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
    } else {
      await axios
        .post(
          `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getWishlistID}/entries?lang=en&curr=INR`,
          // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
          {quantity: 1, product: {code: data.code}},
          {
            headers: {
              Authorization: `${getToken.token_type} ${getToken.access_token}`,
            },
          },
        )
        .then(response => {
          console.log('response.data add to wishlist', response.data);
          getCartDetails();
        })
        .catch(error => {
          console.log('error for add wishlist', error);
        });
    }
  };

  console.log("productIdproductIdproductIdproductIdproductIdproductIdproductIdproductIdproductIdproductIdproductIdproductIdproductIdproductIdproductIdproductIdproductIdproductId",productId)
  return (
    <>
      {productdetail && (
        <ScrollView
          contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
          {/* <SliderBox
        autoplay={true}
        circleLoop={true}
        sliderBoxHeight={212}
        images={carouselData}
        inactiveDotColor="#F3ECE8"
        dotColor={Colors.primarycolor}
      /> */}
          <SliderBox
            resizeMode="contain"
            autoplay={true}
            circleLoop={true}
            sliderBoxHeight={381}
            images={productImage}
            inactiveDotColor="#F3ECE8"
            dotColor={Colors.primarycolor}
          />
          {/* <CommonCarousel
            data={WomenCarouselData}
            width={width}
            height={380}
            customStyle={{
              backgroundColor: '#F6F6F6',
            }}
          /> */}
          <Details productdetail={productdetail} productId={productId} />
          {productdetail?.baseOptions?.length > 0 && (
            <Size_Color
              customStyle={{marginTop: 20}}
              productdetail={productdetail}
              productId={productId}
              imageUrlCheck={imageUrlCheck}
              getColorProductId={getColorProductId}
              getImageData={getImageData}
            />
          )}
          {/* <Customize
            heading="Get your linen monogrammed!"
            description="Add a personal touch to your bath linen with a
monogram. Ideal as a gift for a loved one, or 
an addition to your home."
            btnText="Add a monogram"
          /> */}
          <View style={{paddingHorizontal: 5}}>
            <CommonTopTab data={dataMap} />
          </View>
          {/* <Popular
            heading="Style it right!"
            description="This cotton kurta is super comfortable, breathable
and versatile. Team it with a pair of white PJs for the perfect work-from-home outfit, or with a pair of white jeans, silver danglers and juttis for a casual day at the office."
            data={[0, 0, 0, 0]}
            customStyle={{marginVertical: 10}}
          />
          <Art_Artist />
          <Popular
            customStyle={{marginVertical: 10}}
            heading="Frequently bought together"
            data={[0, 0, 0, 0]}
          />
          <Popular
            customStyle={{marginVertical: 10}}
            heading="More in Short kurtas"
            data={[0, 0, 0, 0]}
          />
          <Popular
            customStyle={{marginVertical: 10}}
            heading="More in Hand Block Print Short Kurtas"
            data={[0, 0, 0, 0]}
          /> */}
        </ScrollView>
      )}
      <Footer
        {...props}
        oos={true}
        handleClick={AddtoCart}
        handleWishListAdd={addWishlist}
        disabled={!!showAdd ? false : true}
        productdetail={productdetail}
        // wishlistproductCode={wishlistproductCode}
      />
    </>
  );
}

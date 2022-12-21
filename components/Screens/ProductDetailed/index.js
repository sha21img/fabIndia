import {
  View,
  Text,
  ScrollView,
  FlatList,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import React, {useEffect, useState} from 'react';
import CommonCarousel from '../../Common/CommonCarousel';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import Details from './Details';
import CloseIcon from 'react-native-vector-icons/Ionicons';
import Size_Color from './Size_Color';
import Popular from './Popular';
import Footer from './Footer';
import Art_Artist from './Art_Artist';
import CommonTopTab from '../../Common/CommonTopTab';
import {StoreDetails} from '../../../constant';
import {SliderBox} from 'react-native-image-slider-box';
import Customize from './Customize';
import axios from 'axios';
import {postData} from '../../Common/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {Colors} from '../../../assets/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  cartDetail,
  Sharedataadd,
  wishlistDetail,
} from '../../Common/Helper/Redux/actions';
import Card from '../../Common/Card';
import Card4 from '../../Common/Card4';
const width = Dimensions.get('window').width;

export default function ProductDetailed(props) {
  const {productId, imageUrlCheck} = props?.route?.params;
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
  const {cartReducer} = useSelector(state => state);
  useEffect(() => {
    setProductID(productId);
  }, []);
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
    let zoomImage = [];
    for (let i = 0; i < response.data.images.length; i++) {
      const item = response.data.images[i];
      if (item.format == 'product' && item.imageType == 'GALLERY')
        images.push('https://apisap.fabindia.com/' + item.url);
      zoomImage.push({url: 'https://apisap.fabindia.com/' + item.url});
    }

    //

    console.log(
      'zoomImagezoomImagezoomImagezoomImagezoomImagezoomImagezoomImagezoomImagezoomImagezoomImagezoomImagezoomImagezoomImage',
      zoomImage,
    );
    setProductImage(images);

    setZoomImage(zoomImage);
  };

  const bestSellers = async () => {
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/bestSeller/bestSellerProducts?fields=products(FULL)&productCode=${productId}&lang=en&curr=INR`,
      // ` https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}?fields=code,configurable,configuratorType,name,summary,optionId,stock(DEFAULT),price(formattedValue,value,DEFAULT),images(galleryIndex,FULL),baseProduct,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantMatrix(FULL),sizeChart,averageRating,description,canonicalUrl,availableForPickup,url,numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,tags,baseOptions,additionalDetails,DEFAULT,classifications,variantOptions,variantType&lang=en&curr=INR`,
      // `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}?fields=name,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType&lang=en&curr=INR`,
      // `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}`,
    );
    console.log(
      'bestSellersbestSellersbestSellersbestSellers',
      response.data?.result?.products,
    );
    setCommonproduct(response.data);
  };
  useEffect(() => {
    getproductDetailedData();
    bestSellers();
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
                  // marginVertical: 10,
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
    //   const newImage = [];
    // console.log("datadatadatasetProductImagesetProductImagesetProductImagesetProductImage",data)
    //   const image = 'https://apisap.fabindia.com/' + data;
    //   newImage.push(image)
    //   console.log("imageimageimageimageimageimageimageimageimageimageimageimageimage",image)
    //   setProductImage(newImage);
  };
  const getgetImageDataproductDetailed = async Id => {
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
      if (item.format == 'product' && item.imageType == 'GALLERY')
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
    console.log('asdfasdfasdfasdfasdfasdfasdf', quantity, productID);
    // const body = {
    //   quantity: 1,
    //   product: {
    //     code: productId,
    //   },
    // };
    // const response = await postData(
    //   `fabindiab2c/users/current/carts/${cartID}/entries?lang=en&curr=INR`,
    //   body,
    // );
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const type = getToken.isCheck ? 'current' : 'anonymous';
    console.log('getTokengetTokengetTokengetToken', getToken, getCartID);
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
        console.log('responseresponseresponse', response.data);
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
    );

    dispatch(
      cartDetail({
        data: response.data,
        quantity: response.data.entries.length,
      }),
    );
    // setCartDetails(response.data);
  };
  const isWishlisted = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    if (getToken.isCheck) {
      getCartDetails();
    }
  };
  useEffect(() => {
    isWishlisted();
  }, []);
  const getCartDetails = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    const getWishlistID = await AsyncStorage.getItem('WishlistID');

    const value = await AsyncStorage.getItem('cartID');
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
          getCartDetails();
        })
        .catch(error => {
          console.log('error for add wishlist', error);
        });
    }
  };

  const sendCount = count => {
    console.log(
      'countttttttttttttttttttttttttttttttttttttttttt00000000000000088888888888888888',
      count,
    );
    setQuantity(count);
  };

  const imagesarray = [
    {
      url: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png',
    },
    {
      url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    },
  ];

  console.log(
    'productImageproductImageproductImageproductImageproductImage',
    productImage,
  );
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
            onCurrentImagePressed={curr => {
              console.log('curr', curr);
              setModalVisible(true);
            }}
            resizeMode="stretch"
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
              sendCount={sendCount}
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
                // console.log("itemsitems",items)
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
        style={{backgroundColor:'white'}}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{width: '100%', flex: 1, backgroundColor: 'red'}}>
          <View
            style={{
              // marginTop: 'auto',
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
            }}>
        
            <ImageViewer
            backgroundColor='white'
            // useNativeDriver
              imageUrls={zoomImage}
              // renderIndicator={() => null}
              render={()=>{
                return <View style={{backgroundColor:'red'}} ></View>
              }}
            />
                <TouchableOpacity
              style={{margin: 30,position:'absolute',top:0}}
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

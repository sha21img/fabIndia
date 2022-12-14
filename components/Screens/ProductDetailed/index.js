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
import {postData} from '../../Common/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {Colors} from '../../../assets/Colors';
const width = Dimensions.get('window').width;

export default function ProductDetailed(props) {
  const [productdetail, setProductDetail] = useState({});
  const [cartID, setCartID] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(null);
  const [productImage, setProductImage] = React.useState([]);
  const [productID, setProductID] = useState(null);
  const [wishlistproductCode, setWishlistproductCode] = useState([]);

  const {productId} = props?.route?.params;

  const getproductDetailedData = async () => {
    const value = await AsyncStorage.getItem('cartID');
    setCartID(value);

    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}`,
    );
    console.log('response.data04733333333333333333', response.data);
    setProductDetail(response.data);
    console.log(
      'productdetail.variantMatrix[0].',
      response.data?.variantMatrix[0]?.variantOption?.variantOptionQualifiers[0]
        ?.image?.url,
    );
    const newImage = response.data?.variantMatrix.map(item => {
      return (
        'https://apisap.fabindia.com/' +
        item.variantOption?.variantOptionQualifiers[0]?.image?.url
      );
    });
    setProductImage(newImage);
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
  const DetailsData = item => {
    return (
      <>
        <View style={{padding: 15, backgroundColor: 'white'}}>
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
    Specification: DetailsData
  };
  const dataMap = StoreDetails.map(item => ({
    title: item,
    card: screenObj[item],
  }));
  const getColorProductId = data => {
    console.log('data5555555555555555555555555555555555555555555555', data);
    setProductID(data);
  };
  const AddtoCart = async () => {
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
    console.log(
      'productIDproductIDproductIDproductIDproductIDproductIDproductIDproductIDproductIDproductIDproductIDr',
      productID,
    );
    const response = await axios.post(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08266751/entries?lang=en&curr=INR`,
      {
        quantity: 1,
        product: {
          code: productID,
        },
      },
      {
        headers: {
          Authorization: `Bearer W0hBU03OuX1wkL0vAyA4Zlnpo4Q`,
        },
      },
    );
    console.log(
      'AddtoCartAddtoCartAddtoCartAddtoCartAddtoCartAddtoCartAddtoCartAddtoCartAddtoCart',
      response.data,
    );

    setCartSuccess(response.data);
    Toast.showWithGravity('Added to Your Cart', Toast.LONG, Toast.TOP);
  };
  useEffect(() => {
    getCartDetails();
  }, []);
  const getCartDetails = async () => {
    const value = await AsyncStorage.getItem('cartID');
    console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
    const aa =
      'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue, value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)';
    await axios
      .get(
        'https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08266751?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR',
        // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832?fields=${aa}&lang=en&curr=INR`,
        // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/?fileds=${aa}?lang=en&curr=INR`,
        // {},
        {
          headers: {
            Authorization: `Bearer W0hBU03OuX1wkL0vAyA4Zlnpo4Q`,
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
          console.log(
            'respppppppppppppppppppppppppppppppppppppppppppppppppppp',
            filterProductId,
          );
          setWishlistproductCode(filterProductId);
        }
      })
      .catch(error => {
        console.log('error for get crt detail', error);
      });
  };
  const addWishlist = async data => {
    const isAddWishlist = wishlistproductCode.find((item, index) => {
      return item.code == data.code;
    });
    if (isAddWishlist) {
      await axios
        .delete(
          `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries/${isAddWishlist.item.entryNumber}?lang=en&curr=INR`,
          // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
          // {quantity: 0, product: {code: isAddWishlist.code}},
          {
            headers: {
              Authorization: `Bearer S01JlKH43k-AVTnjfq_Wb8L9Jps`,
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
      const value = await AsyncStorage.getItem('cartID');
      console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
      console.log('addWishlist', data.code);
      await axios
        .post(
          'https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR',
          // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
          {quantity: 1, product: {code: data.code}},
          {
            headers: {
              Authorization: `Bearer S01JlKH43k-AVTnjfq_Wb8L9Jps`,
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
          <Size_Color
            customStyle={{marginTop: 20}}
            productdetail={productdetail}
            productId={productId}
            getColorProductId={getColorProductId}
          />
          {/* <Customize
            heading="Get your linen monogrammed!"
            description="Add a personal touch to your bath linen with a
monogram. Ideal as a gift for a loved one, or 
an addition to your home."
            btnText="Add a monogram"
          /> */}
          <View style={{paddingHorizontal:5}}>

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
        oos={true}
        handleClick={AddtoCart}
        handleWishListAdd={addWishlist}
        disabled={!!productID ? false : true}
        productdetail={productdetail}
        wishlistproductCode={wishlistproductCode}
      />
    </>
  );
}

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
import Customize from './Customize';
import axios from 'axios';
import {postData} from '../../Common/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;

export default function ProductDetailed(props) {
  const [productdetail, setProductDetail] = useState({});
  const [cartID, setCartID] = useState(null);
  const [cartSuccess, setCartSuccess] = useState(null);
  const {productId} = props.route.params;
  console.log(
    'productIdproductIdproductIdproductIdproductIdproductIdproductId',
    productId,
  );

  const getproductDetailedData = async () => {
    const value = await AsyncStorage.getItem('cartID')
    setCartID(value)

    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/${productId}`,
    );
    console.log('response.data04733333333333333333', response.data);
    setProductDetail(response.data);
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
    Specification: DetailsData,
    'Additional Details': DetailsData,
  };
  const dataMap = StoreDetails.map(item => ({
    title: item,
    card: screenObj[item],
  }));

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
console.log('cartIDcartIDcartIDcartIDcartIDcartIDcartIDcartIDcartIDcartIDcartIDcartIDcartIDcartID',cartID)
    const response = await axios.post(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${cartID}/entries?lang=en&curr=INR`,
      {
        quantity: 1,
        product: {
          code: productId,
        },
      },
      {
        headers: {
          Authorization: `Bearer deo4mFuPyvLg_84XL2FJfe2tRMg`,
        },
      },
    );
    console.log(
      'AddtoCartAddtoCartAddtoCartAddtoCartAddtoCartAddtoCartAddtoCartAddtoCartAddtoCart',
      response.data,
    );
    setCartSuccess(response.data);
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
          <CommonCarousel
            data={WomenCarouselData}
            width={width}
            height={380}
            customStyle={{
              backgroundColor: '#F6F6F6',
            }}
          />
          <Details productdetail={productdetail} productId={productId} />
          <Size_Color
            customStyle={{marginTop: 20}}
            productdetail={productdetail}
            productId={productId}
          />
          {/* <Customize
            heading="Get your linen monogrammed!"
            description="Add a personal touch to your bath linen with a
monogram. Ideal as a gift for a loved one, or 
an addition to your home."
            btnText="Add a monogram"
          /> */}
          <CommonTopTab data={dataMap} />
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
      <Footer oos={true} handleClick={AddtoCart} />
    </>
  );
}

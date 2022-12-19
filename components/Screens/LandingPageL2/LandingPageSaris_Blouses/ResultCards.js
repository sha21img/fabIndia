import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../../../Common/Card';
import Card1 from '../../../Common/Card1';
import {getComponentData, postData} from '../../../Common/Helper';
import axios from 'axios';
import SortBox from './SortBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {wishlistDetail} from '../../../Common/Helper/Redux/actions';

export default function ResultCards(props) {
  const {cartReducer} = useSelector(state => state);
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [dataMain, setdataMain] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [wishlistproductCode, setWishlistproductCode] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const {code, sortValue, openSort, status, title, isSearch} = props;
  console.log(
    'code+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++',
    code,
    sortValue,
  );
  const {data = []} = props;
  const getProductData = async () => {
    const fields =
      'products(code,name,summary,optionId,configurable,configuratorType,multidimensional,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions(FULL),variantMatrix,sizeChart,url,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantProductOptions(FULL),newArrival,sale,tagName),facets,breadcrumbs,breadcrumbCategories(code,name,url),pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery';
    var response;
    if (!!isSearch) {
      console.log('Searchoiouytrewsdrfghjkopoiuytrdsedxcfvbh');
      response = await axios.get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/search?fields=${fields}&query=${title}
        &pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
      );
    } else {
      console.log('wergthyui.l,kmjnhbsgmpokijuhgvfcdxsza');
      response = await axios.get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/search?fields=${fields}&${
          status ? `${code}` : `query=:relevance:allCategories:${code}`
        }&pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
      );
    }
    // fabindiab2c/products/search?query=:relevance:allCategories:${code}&pageSize=10&lang=en&curr=INR&currentPage=${page}`);
    setdataMain(response.data);
    setProductCount(response.data.pagination.totalResults);
    setFilterProducts(response.data.products);
    if (filterProducts.length) {
      setFilterProducts([...filterProducts, ...response.data.products]);
    } else {
      setFilterProducts(response.data.products);
    }
  };

  const getSortProductData = async () => {
    const fields =
      'products(code,name,summary,optionId,configurable,configuratorType,multidimensional,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions(FULL),variantMatrix,sizeChart,url,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantProductOptions(FULL),newArrival,sale,tagName),facets,breadcrumbs,breadcrumbCategories(code,name,url),pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery';

    var response;
    if (!!isSearch) {
      response = await axios.get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/search?fields=${fields}&query=${title}
        &pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
      );
    } else {
      response = await axios.get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/products/search?fields=${fields}&${
          status ? `${code}` : `query=:relevance:allCategories:${code}`
        }&pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
      );
    }
    setdataMain(response.data);
    setFilterProducts(response.data.products);
  };
  useEffect(() => {
    !!sortValue && getSortProductData();
  }, [sortValue]);
  const isWishlisted = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    if (getToken.isCheck) {
      getCartDetails();
    }
  };
  useEffect(() => {
    isWishlisted();
    getProductData();
    // https://apisap.fabindia.com/occ/v2/fabindiab2c/
    // products/search?query=:relevance:allCategories:new-women-accessories&pageSize=10&lang=en&curr=INR&currentPage
  }, [page]);
  const endReach = () => {
    if (dataMain?.pagination?.totalPages > page) {
      setPage(page + 1);

      // getProductData();
    }
  };
  useEffect(() => {}, []);
  const getCartDetails = async () => {
    const value = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart iooooooooooooooood11', getCartID);
    const getWishlistID = await AsyncStorage.getItem('WishlistID');

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
          response.data,
        );
        if (!!response?.data?.name) {
          if (response?.data?.name?.includes('wishlist')) {
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
    console.log('this us cart idfor add wi', getToken);
    if (isAddWishlist) {
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
      const value = await AsyncStorage.getItem('cartID');
      console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
      console.log('addWishlist', data.code, getWishlistID);
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

    // console.log('addwishlist data response', response.data);
    // https://apisap.fabindia.com/occ/v2/
    // fabindiab2c/users/anonymous/carts/378a862e-301d-4
    // 1ae-b2b2-015610c56c01/entries?lang=en&curr=INR
    // const body = {
    //   quantity: 1,
    //   product: {
    //     code: data.code,
    //   },
    // };
    // const response = await postData(
    //   `fabindiab2c/users/current/carts/${value}/entries?lang=en&curr=INR`,
    //   body,
    // );
    // console.log('responseppppppppppp', response);
  };
  const getCardData = item => {
    return (
      <>
        <Card1
          // wishlistproductCode={wishlistproductCode}
          handleClick={addWishlist}
          customViewStyle={{marginVertical: 7}}
          {...props}
          item={item.item}
        />
      </>
    );
  };
  return (
    <>
      <FlatList
        // ListHeaderComponent={() => (
        //   <SortBox
        //     openSort={openSort}
        //     dataMain={filterProducts}
        //     productCount={productCount}
        //     //  openFilter={openFilter}
        //   />
        // )}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{
          paddingHorizontal: 15,
          flexGrow: 1,
          backgroundColor: '#FFFFFF',
          paddingBottom: 20,
        }}
        numColumns={2}
        data={filterProducts}
        onEndReached={endReach}
        showsHorizontalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        keyExtractor={(item, index) => index}
        renderItem={getCardData}
      />
      <SortBox
        openSort={openSort}
        dataMain={filterProducts}
        productCount={productCount}
        //  openFilter={openFilter}
      />
    </>
  );
}

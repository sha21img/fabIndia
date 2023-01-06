import {
  View,
  Text,
  FlatList,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card1 from '../../../Common/Card1';
import {
  BaseURL2,
  getComponentData,
  logout,
  postData,
  refreshToken,
} from '../../../Common/Helper';
import axios from 'axios';
import SortBox from './SortBox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {wishlistDetail} from '../../../Common/Helper/Redux/actions';
import HomeHeader from '../../Home/HomeHeader';
import Filter from '../../../Common/Filter';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../../assets/Colors';
import Toast from 'react-native-simple-toast';
import Entypo from 'react-native-vector-icons/Entypo';
import LoadingComponent from '../../../Common/LoadingComponent';

export default function ResultCards(props) {
  const {cartReducer} = useSelector(state => state);
  const [isActive, setIsActive] = useState([]);
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [dataMain, setdataMain] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [wishlistproductCode, setWishlistproductCode] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [sortValue, setSortValue] = useState('');
  const [isCheck, setIsCheck] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const {code, status, title, isSearch, isAdmin2} = props;
  const {data = []} = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  console.log('11111111111111111111111111111111111111111111111', code);
  var isFilterVIsible;

  const getProductData = async data => {
    const fields =
      'products(code,name,summary,optionId,configurable,configuratorType,multidimensional,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions(FULL),variantMatrix,sizeChart,url,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantProductOptions(FULL),newArrival,sale,tagName),facets,breadcrumbs,breadcrumbCategories(code,name,url),pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery';
    var response;
    if (isAdmin2 == 'isAdmin2') {
      console.log(
        'ifififififififififififififififififififififiif',
        `${BaseURL2}/products/search?fields=${fields}&query=${data}&pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
      );
      if (data) {
        response = await axios.get(
          `${BaseURL2}/products/search?fields=${fields}&query=${data}&pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
        );
      } else {
        response = await axios.get(
          `${BaseURL2}/products/search?fields=${fields}&query=${code}&pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
        );
      }
    } else {
      console.log('elseleslelesleelse');
      if (!!isSearch) {
        response = await axios.get(
          `${BaseURL2}/products/search?fields=${fields}&query=${title}
      &pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
        );
      } else if (data) {
        response = await axios.get(
          `${BaseURL2}/products/search?fields=${fields}&query=${data}&pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
        );
      } else {
        response = await axios.get(
          `${BaseURL2}/products/search?fields=${fields}&${
            status ? `${code}` : `query=:relevance:allCategories:${code}`
          }&pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
        );
      }
    }

    console.log('1234567890', response.data.facets);
    const isFilterVIsible = response.data.facets.filter(item => {
      return item.values.filter(it => {
        return it.selected == true;
      });
      // return item.
    });
    setIsActive(isFilterVIsible);
    console.log(
      'ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
      isFilterVIsible,
    );

    // fabindiab2c/products/search?query=:relevance:allCategories:${code}&pageSize=10&lang=en&curr=INR&currentPage=${page}`);
    setdataMain(response.data);
    setProductCount(response.data.pagination.totalResults);
    setTotalCount(response.data.pagination.totalResults);
    setFilterProducts(response.data.products);
    if (filterProducts.length > 0 && !data && !isRefreshing) {
      setFilterProducts([...filterProducts, ...response.data.products]);
    } else {
      setFilterProducts(response.data.products);
    }
    setIsLoading(false);
    setIsRefreshing(false);
  };
  const openSort = () => setModalVisible(true);
  const openFilter = () => setFilterModalVisible(true);

  const getSortProductData = async () => {
    const fields =
      'products(code,name,summary,optionId,configurable,configuratorType,multidimensional,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions(FULL),variantMatrix,sizeChart,url,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantProductOptions(FULL),newArrival,sale,tagName),facets,breadcrumbs,breadcrumbCategories(code,name,url),pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery';

    var response;
    if (isAdmin2 == 'isAdmin2') {
      console.log(
        'ifififififififififififififififififififififiif-=-=-=- sort-=-=',
        isAdmin2,
      );
      response = await axios.get(
        `${BaseURL2}/products/search?fields=${fields}&query=${code}&pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
      );
    } else {
      console.log('elseleslelesleelse-=-=-=-sort-==-');

      if (!!isSearch) {
        response = await axios.get(
          `${BaseURL2}/products/search?fields=${fields}&query=${title}
        &pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
        );
      } else {
        response = await axios.get(
          `${BaseURL2}/products/search?fields=${fields}&${
            status ? `${code}` : `query=:relevance:allCategories:${code}`
          }&pageSize=10&lang=en&curr=INR&currentPage=${page}&sort=${sortValue}`,
        );
      }
    }
    // console.log('data===>', JSON.stringify(response.data))
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
  }, [page]);

  const endReach = () => {
    if (dataMain?.pagination?.totalPages > page) {
      setPage(page + 1);
    }
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    setPage(0);
  };

  const getCartDetails = async () => {
    const value = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    // console.log('this us cart iooooooooooooooood11', getCartID);
    const getWishlistID = await AsyncStorage.getItem('WishlistID');

    const response = await axios
      .get(
        `${BaseURL2}/users/current/carts/${getWishlistID}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,deliveryAddress(FULL),entries(totalPrice(formattedValue),product(images(FULL),price(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),stock(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),subTotalWithoutDiscount(formattedValue,DEFAULT),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,%20value),user,saveTime,name,description,paymentTransactions,totalAmountToPay(DEFAULT),totalAmountPaid(DEFAULT)&lang=en&curr=INR`,
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
        // console.log(
        //   'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetails',
        //   response.data.name,
        // );
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
        console.log('error for get cqrt detail', error);
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
    // console.log('this us cart idfor add wi', getToken);
    if (isAddWishlist) {
      const response = await axios
        .delete(
          `${BaseURL2}/users/current/carts/${getWishlistID}/entries/${isAddWishlist.item.entryNumber}?lang=en&curr=INR`,
          // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
          // {quantity: 0, product: {code: isAddWishlist.code}},
          {
            headers: {
              Authorization: `${getToken.token_type} ${getToken.access_token}`,
            },
          },
        )
        .then(response => {
          // console.log(
          //   'response.data deletetetetetetettetetet to wishlist',
          //   response.data,
          // );

          getCartDetails();
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
          `${BaseURL2}/users/current/carts/${getWishlistID}/entries?lang=en&curr=INR`,
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
        .catch(errors => {
          // console.log('woiuytfgh', errors.response.status);
          if (errors.response.status == 401) {
            refreshToken();
          }
          Toast.showWithGravity(
            errors?.response?.data?.errors[0]?.message,
            Toast.LONG,
            Toast.TOP,
          );
          if (errors.response.status == 401) {
            logout(dispatch);
          }
        });
    }
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

  const handleClick = data => {
    getProductData(data);
  };
  // useEffect(() => {
  //   console.log('liuytresdfklkjytdfghjklkjhgv');
  //   isFilterVIsible =
  //     dataMain.length > 0 &&
  //     dataMain.facets.filter(item => {
  //       console.log('................................', item);
  //       return item.values.map(it => {
  //         return it.selected == true;
  //       });
  //       // return item.
  //     });
  // }, []);

  console.log('isFilterVIsibleisFilterVIsible', isFilterVIsible);
  return (
    <>
      <HomeHeader {...props} headertext={title} totalCount={totalCount} />
      <View style={{flex: 1, backgroundColor: Colors.WHITE}}>
        <FlatList
          numColumns={2}
          data={filterProducts}
          onEndReached={endReach}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.8}
          keyExtractor={(item, index) => index}
          renderItem={getCardData}
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          ItemSeparatorComponent={() => {
            return <View style={{height: 10}} />;
          }}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={{
            paddingBottom: 8,
            paddingHorizontal: 16,
            backgroundColor: Colors.WHITE,
          }}
          ListEmptyComponent={() => {
            return !isLoading ? (
              <View
                style={{
                  height: 500,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 16, color: Colors.textcolor}}>
                  No results found
                </Text>
              </View>
            ) : null;
          }}
        />

        {filterProducts.length > 0 ? (
          <SortBox
            openSort={openSort}
            dataMain={filterProducts}
            productCount={productCount}
            totalCount={totalCount}
            openFilter={openFilter}
            //  openFilter={openFilter}
          />
        ) : null}

        {isLoading ? <LoadingComponent /> : null}

        <Modal
          animationType="slide"
          transparent={true}
          visible={filterModalVisible}
          onRequestClose={() => {
            setFilterModalVisible(!filterModalVisible);
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              paddingHorizontal: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 20,
              }}>
              <Text
                style={{
                  color: Colors.textcolor,
                  fontSize: 18,
                  fontFamily: Fonts.Assistant600,
                }}>
                FILTERS
              </Text>
              {isActive.length > 0 && (
                <TouchableOpacity
                  onPress={() => {
                    handleClick(code), setFilterModalVisible(false);
                  }}>
                  <Text
                    style={{
                      color: Colors.primarycolor,
                      fontSize: 18,
                      fontFamily: Fonts.Assistant600,
                    }}>
                    CLEAR ALL
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <Filter
              setFilterModalVisible={setFilterModalVisible}
              filterModalVisible={filterModalVisible}
              data={dataMain.facets}
              handleClick={handleClick}
              setIsCheck={setIsCheck}
              isCheck={isCheck}
            />
          </View>
          {/* <View style={styles.mainContainer}>
          <Text>jihugy</Text>
        </View> */}
        </Modal>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.mainContainer}>
            <View style={styles.centeredView}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.headingBox}>
                  <View style={{width: '50%'}}>
                    <Text style={styles.heading}>SORT BY</Text>
                  </View>
                  <TouchableOpacity
                    style={{width: '50%'}}
                    onPress={() => setModalVisible(!modalVisible)}>
                    {/* <Entypo
                    name="circle-with-cross"
                    color={Colors.primarycolor}
                    size={24}
                  /> */}
                    <Text style={styles.heading}>CLOSE</Text>
                  </TouchableOpacity>
                </View>

                {[
                  {title: `What's New`, value: 'creationtime-desc'},
                  {title: `Price: Low to High`, value: 'price-asc'},
                  {title: `Price: High to Low`, value: 'price-desc'},
                  {title: `Bestseller`, value: 'productCountBestSeller-desc'},
                ].map(item => {
                  return (
                    <>
                      <TouchableOpacity
                        style={styles.titleBox}
                        onPress={() => {
                          setIsChecked(item.title);
                          setSortValue(item.value);
                          setModalVisible(!modalVisible);
                        }}>
                        {/* <CheckBox
                        checkBoxColor={Colors.primarycolor}
                        onClick={() => {
                          // setIsChecked(!isChecked);
                          setSortValue(item.value);
                          setModalVisible(!modalVisible);
                        }}
                        isChecked={sortValue == item.value ? true : false}
                      /> */}
                        <Text style={styles.title}>{item.title}</Text>
                        {isChecked == item.title && (
                          <Entypo
                            name="check"
                            color={Colors.textcolor}
                            size={24}
                          />
                        )}
                      </TouchableOpacity>
                    </>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  centeredView: {
    marginTop: 'auto',
    width: '100%',
    backgroundColor: 'white',
  },
  headingBox: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  heading: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
    // width: '50%',
    textAlign: 'center',
  },
  titleBox: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    // borderBottomColor: '#EDEDED',
    paddingVertical: 15,
    justifyContent: 'space-between',
    // borderBottomWidth: 2,
  },
  title: {
    fontSize: 16,
    lineHeight: 16,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
    paddingLeft: 10,
  },
});

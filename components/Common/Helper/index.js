import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {wishlistDetail} from './Redux/actions';
import Toast from 'react-native-simple-toast';
import cartReducer from './Redux/reducer';

// const BaseURL =
//   'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/occ/v2/';
const ComponentBaseURL = 'https://apisap.fabindia.com/occ/v2/';
const BaseURL = 'https://apisap.fabindia.com/occ/v2/';

// Prod
// export const BaseURL2 = 'https://apisap.fabindia.com/occ/v2/fabindiab2c/';
// export const AuthBaseUrl2 = 'https://apisap.fabindia.com/authorizationserver/';
// export const imageURL = 'https://apisap.fabindia.com/';

// Testing
export const BaseURL2 =
  'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/occ/v2/fabindiab2c/';
export const AuthBaseUrl2 =
  'https://apisap.fabindiahome.com/authorizationserver/';
export const imageURL = 'https://apisap.fabindiahome.com/';

const AuthAuthor = 'bearer nCVKPnrYg-ZgHMn0djWh1YSFCX0';

const generatTokenWithout = async dispatch => {
  await axios
    .post(
      `${AuthBaseUrl2}/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
    )
    .then(
      response => {
        const tokenGenerate = {...response.data, isCheck: false};
        console.log('tokenGeneratetokenGeneratetokenGenerate', tokenGenerate);
        AsyncStorage.setItem('generatToken', JSON.stringify(tokenGenerate));
        getCartID(dispatch);
      },
      error => {
        console.log('response-=-=-=-=-=-error', error);
      },
    );
};

const addWishlist = async (data, dispatch) => {
  // const isAddWishlist = cartReducer.wishlistDetail.wishListData.find(
  //   (item, index) => {
  //     return item.code == data.code;
  //   },
  // );
  console.log('codeeee', data);
  const get = await AsyncStorage.getItem('generatToken');
  const getToken = JSON.parse(get);
  const getWishlistID = await AsyncStorage.getItem('WishlistID');
  console.log('this us cart idfor add wi', getToken);
  console.log('this usgetWishlistIDgetWishlistID', getWishlistID);

  // if (isAddWishlist) {
  //   const response = await axios
  //     .delete(
  //       `${BaseURL2}/users/current/carts/${getWishlistID}/entries/${isAddWishlist.item.entryNumber}?lang=en&curr=INR`,
  //       // `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08248832/entries?lang=en&curr=INR`,
  //       // {quantity: 0, product: {code: isAddWishlist.code}},
  //       {
  //         headers: {
  //           Authorization: `${getToken.token_type} ${getToken.access_token}`,
  //         },
  //       },
  //     )
  //     .then(response => {
  //       console.log('response.dataaaaaaaaaaaaaaaaa', response.data);
  //       // getCartDetails();
  //     })
  //     .catch(error => {
  //       console.log('error for remove000 wishlist', error);
  //       if (error.response.status == 401) {
  //         logout(dispatch);
  //       }
  //     });
  // } else {
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
      console.log('wwwwwwwwwwwwwwwwwwwwww', response.data);
      // getCartDetails();
    })
    .catch(errors => {
      console.log('qqqqqqqqqqqqqqqqqqqqqq', errors);

      Toast.showWithGravity(
        errors?.response?.data?.errors[0]?.message,
        Toast.LONG,
        Toast.TOP,
      );
      if (errors.response.status == 401) {
        logout(dispatch);
      }
    });
  // }
};

const logout = async dispatch => {
  const res = await AsyncStorage.removeItem('generatToken');
  console.log('delete', res);
  dispatch(
    wishlistDetail({
      wishListData: [],
      wishlistQuantity: 0,
    }),
  );
  // dispatch(cartDetail({data: [], quantity: 0}));
  const cartid = await AsyncStorage.removeItem('cartID');
  console.log('delete', res);
  // props.navigation.navigate('Login_Register');
  await generatTokenWithout(dispatch);
};

// const postData = async (url, body) => {
//   const get = await AsyncStorage.getItem('generatToken');
//   const getToken = JSON.parse(get);
//   const Token = `${getToken?.token_type} ${getToken?.access_token}`;
//   const response = await fetch(`${BaseURL}/${url}`, {
//     method: 'POST',
//     headers: {
//       Authorization: `${Token}`,
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify(body),
//   });
//   try {
//     const result1 = await response.json();
//     return result1;
//   } catch (e) {
//     console.error(e);
//   }
// };
const getData = async path => {
  // const Token = localStorage.getItem('token');
  const response = await fetch(`${BaseURL2}/${path}`, {
    method: 'GET',
    // mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  try {
    const result2 = await response.json();
    return result2;
  } catch (e) {
    console.error(e);
  }
};
const getComponentData = async path => {
  // const Token = localStorage.getItem('token');
  const response = await fetch(`${BaseURL2}/${path}`, {
    method: 'GET',
    // mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  try {
    const result2 = await response.json();
    return result2;
  } catch (e) {
    console.error(e);
  }
};
// const patchComponentData = async path => {
//   const get = await AsyncStorage.getItem('generatToken');
//   const getToken = JSON.parse(get);
//   // const Token = localStorage.getItem('token');
//   const response = await fetch(`${BaseURL}/${path}`, {
//     method: 'PATCH',
//     // mode: 'cors',
//     headers: {
//       Authorization: `${getToken?.token_type} ${getToken?.access_token}`,
//       'Content-Type': 'application/json',
//     },
//   });
//   try {
//     const result2 = await response.json();
//     return result2;
//   } catch (e) {
//     console.error(e);
//   }
// };

const UnAuthPostData = async (url, data, dispatch) => {
  const get = await AsyncStorage.getItem('generatToken');
  const getToken = JSON.parse(get);
  console.log('getToken', getToken);
  const response = await fetch(`${BaseURL2}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${getToken?.token_type} ${getToken?.access_token}`,
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const result2 = await response.json();
    return result2;
  } catch (error) {
    if (error?.response?.status == 401) {
      logout(dispatch);
    }
  }
};
const getCartID = async dispatch => {
  const get = await AsyncStorage.getItem('generatToken');
  const getToken = JSON.parse(get);
  console.log('get token    cart id', getToken);
  const type = getToken.isCheck ? 'current' : 'anonymous';
  const response = await axios
    .post(
      `${BaseURL2}/users/${type}/carts`,
      {},
      {
        headers: {
          Authorization: `${getToken?.token_type} ${getToken?.access_token}`,
        },
      },
    )
    .then(async response => {
      console.log('response.dataashishhhhcartid', response.data);
      if (response.status == 201) {
        console.log('this si Cart Id', response.data?.code);
        if (type == 'anonymous') {
          await AsyncStorage.setItem('cartID', response.data?.guid);
        } else {
          await AsyncStorage.setItem('cartID', response.data?.code);
        }
      }
    })
    .catch(err => {
      if (err.response.status == 401) {
        logout(dispatch);
      }
    });
};
const setWishID = async response => {
  // console.log('setW``````````````````````````````````````````ishID', response);
  if (response.status == 200) {
    const data = response.data.carts;
    const filter = data.filter(item => {
      return item.name;
    });
    console.log(
      'setW```````````>>>>>>>>>>>>>>>>>>>>>>>>>>>``````````````````````````````ishID',
      filter[0].code,
    );

    await AsyncStorage.setItem('WishlistID', filter[0].code);
  }
};
const getWishID = async dispatch => {
  const get = await AsyncStorage.getItem('generatToken');
  const getToken = JSON.parse(get);
  console.log('getToken-=as-fd=-asd=f-=sdaf-11111', getToken);
  const response = await axios
    .get(
      `${BaseURL2}/users/current/carts?fields=carts(DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL),variantOptions(FULL),variantMatrix,priceAfterDiscount(formattedValue,DEFAULT),variantProductOptions(FULL),totalDiscount(formattedValue,DEFAULT)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue,%20value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue,DEFAULT),user,saveTime,name,description)&lang=en&curr=INR`,
      {
        headers: {
          Authorization: `${getToken?.token_type} ${getToken?.access_token}`,
        },
      },
    )
    .then(response => {
      setWishID(response);
    })
    .catch(errors => {
      console.log('2354345435', errors);
      if (errors.response.status == 401) {
        logout(dispatch);
      }
    });
};
const postDataAuth = async (url, formData) => {
  const response = await axios({
    method: 'post',
    url: `${AuthBaseUrl2}/${url}`,
    data: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Referer: 'https://www.fabindia.com/',
      Accept: 'application/json, text/plain, */*',
      // Accept: 'multipart/form-data',
    },
  });
  try {
    const result1 = await response.data;
    return result1;
  } catch (e) {
    console.error(e);
  }
};

const getAsyncStorage = async key => {
  const res = await AsyncStorage.getItem(key);
  return res;
};

const deleteAsyncStorage = async key => {
  const res = await AsyncStorage.removeItem(key);
};
const tokenGenerationFabFamily = async () => {
  const params = {
    username: 'durgesh.yadav@fabindia.net',
    password: 'AIlqeFI4K',
    // username: email,
    // password: password,
  };
  await axios
    .post(`https://api.apm20.gravty.io/v1/login/`, params, {
      headers: {
        'x-api-key': 'ZIhuq8Igby1qOyhu1nnsb6JL5ibQJ2sf6V968DLk',
        'Content-Type': 'application/json',
      },
    })
    .then(async response => {
      console.log(',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,', response.data);
      await AsyncStorage.setItem('fabToken', JSON.stringify(response.data));
    })
    .catch(errors => {
      console.log('errors for token generation', errors);
    });
};
const refreshToken = async () => {};
export {
  // postData,
  getData,
  getComponentData,
  UnAuthPostData,
  getCartID,
  postDataAuth,
  getAsyncStorage,
  deleteAsyncStorage,
  // patchComponentData,
  getWishID,
  refreshToken,
  logout,
  tokenGenerationFabFamily,
  addWishlist,
};

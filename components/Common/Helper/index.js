import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {wishlistDetail} from './Redux/actions';
// const BaseURL =
//   'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/occ/v2/';
const ComponentBaseURL = 'https://apisap.fabindia.com/occ/v2/';
const BaseURL = 'https://apisap.fabindia.com/occ/v2/';
const BaseURL1 = 'https://apisap.fabindia.com/occ/v2/fabindiab2c/';
export const BaseURL2 = 'https://apisap.fabindiahome.com/occ/v2/fabindiab2c/';

const AuthBaseUrl = 'https://apisap.fabindia.com/authorizationserver/';
export const AuthBaseUrl2 =
  'https://apisap.fabindiahome.com/authorizationserver/';

const AuthAuthor = 'bearer nCVKPnrYg-ZgHMn0djWh1YSFCX0';

export const imageURL = 'https://apisap.fabindia.com/';

const generatTokenWithout = async () => {
  await axios
    .post(
      `${AuthBaseUrl2}/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
    )
    .then(
      response => {
        const tokenGenerate = {...response.data, isCheck: false};
        console.log('tokenGeneratetokenGeneratetokenGenerate', tokenGenerate);
        AsyncStorage.setItem('generatToken', JSON.stringify(tokenGenerate));
      },
      error => {
        console.log('response-=-=-=-=-=-error', error);
      },
    );
};
const logout = async dispatch => {
  const res = await AsyncStorage.removeItem('generatToken');
  console.log('delete', res);
  dispatch(
    wishlistDetail({
      data: [],
      quantity: 0,
    }),
  );
  const cartid = await AsyncStorage.removeItem('cartID');
  console.log('delete', res);
  // props.navigation.navigate('MyAccount', {
  //   screen: 'Login_Register',
  // });
  await generatTokenWithout();
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

const UnAuthPostData = async (url, data) => {
  const get = await AsyncStorage.getItem('generatToken');
  const getToken = JSON.parse(get);
  console.log('getToken for login', getToken);

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
const getCartID = async () => {
  const get = await AsyncStorage.getItem('generatToken');
  const getToken = JSON.parse(get);
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
      console.log('inininiiniinin', err);
      if (err.response.status == 401) {
        logout(dispatch);
      }
    });
};
const setWishID = async response => {
  if (response.status == 200) {
    const data = response.data.carts;
    const filter = data.filter(item => {
      return item.name;
    });

    await AsyncStorage.setItem('WishlistID', filter[0].code);
  }
};
const getWishID = async () => {
  const get = await AsyncStorage.getItem('generatToken');
  const getToken = JSON.parse(get);
  console.log('getToken-=as-fd=-asd=f-=sdaf-', getToken);
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
};

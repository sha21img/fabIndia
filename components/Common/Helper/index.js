import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// const BaseURL =
//   'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/occ/v2/';
const ComponentBaseURL = 'https://apisap.fabindia.com/occ/v2/';
const BaseURL = 'https://apisap.fabindia.com/occ/v2/';
const BaseURL1 = 'https://apisap.fabindia.com/occ/v2/fabindiab2c/';
const AuthAuthor = 'bearer nCVKPnrYg-ZgHMn0djWh1YSFCX0';
export const imageURL = 'https://apisap.fabindia.com/';
const postData = async (url, body) => {
  const Token = 'bearer ElhKLe-VvjSmB_TEwcjzHZUyubU';
  const response = await fetch(`${BaseURL}/${url}`, {
    method: 'POST',
    headers: {
      Authorization: `${Token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  });
  try {
    const result1 = await response.json();
    return result1;
  } catch (e) {
    console.error(e);
  }
};
const getData = async path => {
  // const Token = localStorage.getItem('token');
  const response = await fetch(`${BaseURL1}/${path}`, {
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
  const response = await fetch(`${BaseURL1}/${path}`, {
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
const UnAuthPostData = async (url, formData) => {
  const response = await fetch(`${BaseURL1}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer ElhKLe-VvjSmB_TEwcjzHZUyubU',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  });
  try {
    const result2 = await response.json();
    return result2;
  } catch (e) {
    console.log(e);
  }
};
const getCartID = async () => {
  const response = await axios.post(
    `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts`,
    {},
    {
      headers: {
        Authorization: `Bearer wR50iP-l8bXyINCqKDIUECr7hzw`,
      },
    },
  );
  console.log(
    'getCardID+++++++++++++++++++++++++++++++++++++++++++++++?????????????????????????????????????????????????????????',
    response.data,
  );

  await AsyncStorage.setItem('cartID', JSON.stringify(response.data?.code));
};
export {postData, getData, getComponentData, UnAuthPostData, getCartID};

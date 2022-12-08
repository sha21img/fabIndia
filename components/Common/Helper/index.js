import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// const BaseURL =
//   'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/occ/v2/';
const ComponentBaseURL = 'https://apisap.fabindia.com/occ/v2/';
const BaseURL = 'https://apisap.fabindia.com/occ/v2/';
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
  const response = await fetch(`${BaseURL}/${path}`, {
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
  const response = await fetch(`${BaseURL}/${path}`, {
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
const axiosPostData = async (url, formData) => {
  // const Token = localStorage.getItem('token');
  return axios
    .post(`${BaseURL}/${url}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `${Token}`,
      },
    })
    .then(res => {
      return res;
    })
    .catch(err => {
      console.log(err);
      // if (err.response.status === 401) {
      // } else if (err.response.status !== 200) {
      // }
    });
};
const getCartID = async () => {
  const response = await axios.post(
    `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts`,
    {},
    {
      headers: {
        Authorization: `Bearer deo4mFuPyvLg_84XL2FJfe2tRMg`,
      },
    },
  );
  await AsyncStorage.setItem('cartID', response.data?.code)
  
};
export {postData, getData, getComponentData};

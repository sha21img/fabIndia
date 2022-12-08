import React from 'react';
import axios from 'axios';
// const BaseURL =
//   'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/occ/v2/';
const ComponentBaseURL = 'https://apisap.fabindia.com/occ/v2/';
const BaseURL = 'https://apisap.fabindia.com/occ/v2/';
const AuthAuthor = 'bearer nCVKPnrYg-ZgHMn0djWh1YSFCX0';
export const imageURL = 'https://apisap.fabindia.com/';
const postData = async (url, body) => {
  const Token = localStorage.getItem('token');
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
const UnAuthPostData = async (url, formData) => {
  const response = await fetch(`${BaseURL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'bearer vubr1nFAcx5g3rrAbyPt1gQW9Pk',
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
export {postData, getData, getComponentData, UnAuthPostData};

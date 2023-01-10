import React, {useState, useEffect} from 'react';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyAddresses from '../index';
import EditAddress from '../EditAddress';
import {BaseURL2, logout} from '../../../../Common/Helper';
import {useDispatch} from 'react-redux';
import LoadingComponent from '../../../../Common/LoadingComponent';

export default function CheckAddress(props) {
  const {setCurrentPosition, cartdetails} = props;
  const [checkaddress, setcheckAddress] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    getCheckAddress();
  }, [props]);
  const getCheckAddress = async () => {
    const value = await AsyncStorage.getItem('cartID');
    console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await axios
      .get(
        `${BaseURL2}/users/current/addresses`,
        // {},
        {
          headers: {
            Authorization: `${getToken.token_type} ${getToken.access_token}`,
          },
        },
      )
      .then(response => {
        setcheckAddress(response.data);
        setIsLoading(false);
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          setIsLoading(false);
          logout(dispatch);
        }
      });
  };

  return (
    <>
      {checkaddress?.addresses?.length ? (
        <MyAddresses
          {...props}
          checkaddress={checkaddress}
          getCheckAddress={getCheckAddress}
          amount={props?.totalPrice}
          totalquantity={props?.totalquantity}
          cartdetails={cartdetails}
          setCurrentPosition={setCurrentPosition}
        />
      ) : (
        <EditAddress {...props} setCurrentPosition={setCurrentPosition} />
      )}
    {isLoading ? <LoadingComponent /> : null}

    </>
  );
}

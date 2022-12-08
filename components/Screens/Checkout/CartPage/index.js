import React, {useState, useEffect} from 'react';
import EmptyCart from '../EmptyCart';
import CartList from '../CartList';
import axios from 'axios';

export default function CartPage(props) {
  const [cartID, setCartID] = useState(null);
  const[cartdetails,setCartDetails] =useState(null)

  useEffect(() => {
    getCartID();
  }, []);

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
    console.log(
      'getCartIDgetCartIDgetCartIDgetCartIDgetCartIDgetCartIDgetCartIDgetCartIDgetCartIDgetCartID',
      response.data,
    );
    setCartID(response.data?.code);
    getCartDetails(response.data?.code);
  };
  const getCartDetails = async(data) => {
    const response = await axios.post(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${data}/entries?lang=en&curr=INR`,
      {},
      {
        headers: {
          Authorization: `Bearer deo4mFuPyvLg_84XL2FJfe2tRMg`,
        },
      },
    );
    console.log(
      'getCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetailsgetCartDetails',
      response.data,
    );
    setCartDetails(response.data)
  };
  return false ? <EmptyCart /> : <CartList {...props} />;
}

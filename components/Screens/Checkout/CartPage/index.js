import React, {useState} from 'react';
import EmptyCart from '../EmptyCart';
import CartList from '../CartList';
export default function CartPage(props) {
  return false ? <EmptyCart /> : <CartList {...props} />;
}

import React, {useState} from 'react';
import EmptyCart from '../EmptyCart';
import CartList from '../CartList';
export default function CartPage() {
  return false ? <EmptyCart /> : <CartList />;
}

// import { COUNTER_CHANGE } from '../constants';
export function cartDetail(payload) {
  return {
    type: 'CART_DETAIL',
    payload: payload,
  };
}

export function wishlistDetail(payload) {
  return {
    type: 'WISHLIST_DETAIL',
    payload: payload,
  };
}
export function Sharedataadd(payload) {
  
  return {
    type: 'SHARE_DETAIL',
    payload: payload,
  };
}

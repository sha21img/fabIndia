// import { COUNTER_CHANGE } from '../constants';
const initialState = {
  CartDetail: {
    cartData: [],
    cartQuantity: 0,
  },
  WishListDetail: {
    wishListData: [],
    wishlistQuantity: 0,
  },
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CART_DETAIL':
      return {
        ...state,
        CartDetail: {
          cartData: action.payload.data,
          cartQuantity: action.payload.quantity,
        },
      };
    case 'WISHLIST_DETAIL':
      return {
        ...state,
        WishListDetail: {
          wishListData: action.payload.data,
          wishlistQuantity: action.payload.quantity,
        },
      };
    default:
      return state;
  }
};
export default cartReducer;

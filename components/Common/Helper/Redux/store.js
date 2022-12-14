import {createStore, combineReducers} from 'redux';
import cartReducer from './reducer';
const rootReducer = combineReducers({cartReducer: cartReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;

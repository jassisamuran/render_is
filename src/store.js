import { createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productCreateReducer, productCreateReviewReducer, productDeleteReducer, productDetailsReducers, productListReducers, productTopRatedReducer, productUpdateReducer } from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers';
import { userDeleteReducer, userDetailsReducers, userListReducer, userLoginReducers, userRegisterReducers, userUpdateProfileReducers } from './reducers/userReducers';
import { orderCreateReducer, orderDeliveredReducer, orderDetailsReducer, orderListMyReducer, orderListReducer, orderPayReducer } from './reducers/orderReducer';

const reducer=combineReducers({
   
    productDetails:productDetailsReducers,
    productList:productListReducers,
    productDelete:productDeleteReducer,
    productCreate:productCreateReducer,
    productUpdate:productUpdateReducer,
    productReviewCreate:productCreateReviewReducer,
    prouductTop:productTopRatedReducer,
    cart:cartReducers,
    userLogin:userLoginReducers,
    userRegister:userRegisterReducers,
    userDetails:userDetailsReducers,
    userUpdateProfile:userUpdateProfileReducers,
    userList:userListReducer,
    userDelete:userDeleteReducer,
    orderCreate:orderCreateReducer,
    orderDetail:orderDetailsReducer,
    orderPay:orderPayReducer,
    orderListMy:orderListMyReducer,
    orderList:orderListReducer,
    orderDeliver:orderDeliveredReducer,
  
})
const cartItemFromstorage=localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')):[]


const userInfoFromstorage=localStorage.getItem('userInfo')?
JSON.parse(localStorage.getItem('userInfo')):null


const shippingAddressFromstorage=localStorage.getItem('shippingAddress')?
JSON.parse(localStorage.getItem('shippingAddress')):{}

const intialState={
    cart:{cartItems:cartItemFromstorage,
    shippingAddress:shippingAddressFromstorage,},
    userLogin:{userInfo:userInfoFromstorage},
    
}
const middleware=[thunk]
const store =createStore(reducer,intialState,
    composeWithDevTools(applyMiddleware(...middleware)))
export default store
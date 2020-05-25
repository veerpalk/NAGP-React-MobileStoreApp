import  mobileReducer from './mobileReducer'
import cartReducer from './cartReducer'
import orderReducer from './orderReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    mobileReducer: mobileReducer,
    cartReducer: cartReducer,
    orderReducer: orderReducer
})

export default rootReducer
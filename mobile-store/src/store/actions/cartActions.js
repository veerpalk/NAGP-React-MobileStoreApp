import {ADD_ITEM_TO_CART,FETCH_CART_SUCCESS , ADD_QUANTITY, REDUCE_QUANTITY, REMOVE_ITEM_FROM_CART} from '../../common/constants/constants'

export const addToCart = (mobile) =>{
    return(dispatch, getState)=>{
        //make async call to db
        dispatch({
            type: ADD_ITEM_TO_CART,
            mobile: mobile
        });

    }
} 

export const fetchCart = ()=>{
    return(dispatch, getState)=>{
        //make async call to db
        dispatch({
            type: FETCH_CART_SUCCESS
        });
    }
}




export const addQuantity = index => {
    return {
      type: ADD_QUANTITY,
      index,
    };
  };

  export const reduceQuantity = index => {
    return {
      type: REDUCE_QUANTITY,
      index,
    };
  };

export const removeItemFromCart = index =>{
  return{
    type: REMOVE_ITEM_FROM_CART,
    index
  }
}

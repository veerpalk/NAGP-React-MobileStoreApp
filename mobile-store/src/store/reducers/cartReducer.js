import { ADD_ITEM_TO_CART, FETCH_CART_SUCCESS,ADD_QUANTITY, REDUCE_QUANTITY, REMOVE_ITEM_FROM_CART} from '../../common/constants/constants'

const initState = {
    cart: [],
}
const cartReducer = (state = initState, action) => {
const {index}=action;
    switch (action.type) {
        case ADD_ITEM_TO_CART:
            {
                return { cart: [...state.cart, { mobile: action.mobile, quantity: 1 }] }
            }
        case FETCH_CART_SUCCESS:
            {
                return state
            }
        case ADD_QUANTITY:
            return {
                cart: state.cart.map((item, i) => {

                    let quantityItem = item.quantity;
                    if(quantityItem<=10)
                    {
                        quantityItem = quantityItem+1;
                    }
                    if (i == index)
                        return { ...item, 
                            quantity: quantityItem }
                    return item;
                })
            }

        case REDUCE_QUANTITY:
            return {
                cart: state.cart.map((item, i) => {
                    let quantityItem = item.quantity;
                    if(quantityItem>1)
                    {
                        quantityItem = quantityItem-1;
                    }
                    if (i == index)
                        return { ...item, quantity: quantityItem }
                    return item;
                })
            }
        case REMOVE_ITEM_FROM_CART:
            const remainingCart = state.cart.filter((item,i) => i !== index)
            return{
                ...state,
                cart: remainingCart
                }


        default: return state
    }
}

export default cartReducer
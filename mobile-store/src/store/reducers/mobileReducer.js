import {FETCH_MOBILES_SUCCESS, FETCH_MOBILES_REQUEST, FETCH_MOBILES_FAILURE , 
  MOBILES_SORT_BY_PRICE_HIGH_TO_LOW, MOBILES_SORT_BY_PRICE_LOW_TO_HIGH} from '../../common/constants/constants'


const initState = {
   loading: false,
   mobiles: [],
   filteredMobiles: [],
   error: ''
}
const mobileReducer = (state = initState, action) => {
    switch(action.type){
        case FETCH_MOBILES_REQUEST: return{
          ...state,
          loading: true
        }
        case FETCH_MOBILES_SUCCESS: return{
          loading: false,
          mobiles: action.payload,
          filteredMobiles:action.payload,
          error: ''
        }
        case FETCH_MOBILES_FAILURE: return{
          loading: false,
          mobiles: [],
          error: action.payload
        }
        case MOBILES_SORT_BY_PRICE_HIGH_TO_LOW:  return{
          ...state,
          loading: false,
          filteredMobiles:state.mobiles.sort((a, b)=>{
            return a.price<b.price? 1:-1
          }),
        }

        case MOBILES_SORT_BY_PRICE_LOW_TO_HIGH:  {
          return Object.assign({}, state, {
            filteredMobiles: state.mobiles.sort((a, b)=>{
              return a.price> b.price? 1:-1
            })
          });
          }


        default: return state
    }
}

export default mobileReducer
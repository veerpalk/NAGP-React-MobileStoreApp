import axios from "axios"
import {FETCH_MOBILES_SUCCESS,FETCH_MOBILES_REQUEST,FETCH_MOBILES_FAILURE, MOBILES_SORT_BY_PRICE_HIGH_TO_LOW, MOBILES_SORT_BY_PRICE_LOW_TO_HIGH} from '../../common/constants/constants'
import mobiles from "../../mobileDb.json";


export const fetchMobiles = () => {
    return function (dispatch) {
        dispatch(fetchMobilesRequest)
        // axios.get('http://localhost:3001/mobiles')
        //     .then(response => {
        //         dispatch(fetchMobilesSuccess(response.data))
        //     })
        //     .catch(err => {
        //         dispatch(fetchMobilesFailure(err.message))
        //     })

        dispatch(fetchMobilesSuccess(mobiles.mobiles))
    }
}

export const sortMobilesHighToLow = () =>{
    return{
        type: MOBILES_SORT_BY_PRICE_HIGH_TO_LOW
    }
}
export const sortMobilesLowToHigh = () =>{
    return{
        type: MOBILES_SORT_BY_PRICE_LOW_TO_HIGH
    }
}

// export const addMobile = (mobile) => {
//     return (dispatch, getState) => {
//         //make async call to db
//         dispatch({
//             type: 'ADD_MOBILE',
//             mobile: mobile
//         });

//     }
// }

const fetchMobilesRequest = () => {
    return {
        type: FETCH_MOBILES_REQUEST
    }
}

const fetchMobilesSuccess = mobiles => {
    return {
        type: FETCH_MOBILES_SUCCESS,
        payload: mobiles
    }
}

const fetchMobilesFailure = error => {
    return {
        type: FETCH_MOBILES_FAILURE,
        payload: error
    }
}
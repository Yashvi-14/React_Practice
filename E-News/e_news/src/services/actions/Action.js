//send data from react component to redux store

import { ADD_To_CART ,REMOVE_To_CART} from '../constants';

export const addToCart = (data) => {
    return {
        type: ADD_To_CART,
        data: data
    };
};


export const removeToCart=(data)=>{
    return{
        type:REMOVE_To_CART,
        // data:data
    }
}
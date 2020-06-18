import * as ActionTypes from './ActionTypes';

export const Product = (state=({
    isLoading: true,
    errMess: null,
    product: {}
}),action)=>{
    switch(action.type) {
        case ActionTypes.ADD_PROD:
            return {...state, isLoading: false, errMess: null, product: action.payload};

        case ActionTypes.PROD_LOADING:
            return {...state, isLoading: true, errMess: null, product: {}}

        case ActionTypes.PROD_FAILED:
            return {...state, isLoading: false, errMess: action.payload,product: {}};

        default:
            return state;
    }
}
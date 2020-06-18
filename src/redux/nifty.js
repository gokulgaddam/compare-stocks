import * as ActionTypes from './ActionTypes';

export const Nifty = (state=({
    isLoading: true,
    errMess: null,
    product: {}
}),action)=>{
    switch(action.type) {
        case ActionTypes.ADD_NIFTY:
            return {...state, isLoading: false, errMess: null, product: action.payload};

        case ActionTypes.NIFTY_LOADING:
            return {...state, isLoading: true, errMess: null, product: {}}

        case ActionTypes.NIFTY_FAILED:
            return {...state, isLoading: false, errMess: action.payload,product: {}};

        default:
            return state;
    }
}
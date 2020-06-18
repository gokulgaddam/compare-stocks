import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Product} from './product';
import {Nifty} from './nifty';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            product: Product,
            nifty: Nifty
           

        }),
        applyMiddleware(thunk, logger)
    )

    return store;
}
import * as ActionTypes from './ActionTypes';
import axios from 'axios';




export const fetchProduct = (value) =>(dispatch ) => {
  dispatch(prodLoading(true));

 

let url='https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+value.replace(/['"]+/g, '')+'&apikey=LUDIHN9BDZSS0TWU';

    return axios.get(url)
         .then(res =>{
  //  console.log(res.data["Time Series (Daily)"]);
   dispatch(addProd(res.data["Time Series (Daily)"]));
} )

}


export const prodLoading = () => ({
    type: ActionTypes.PROD_LOADING
})

export const prodFailed = (errmess) => ({
    type: ActionTypes.PROD_FAILED,
    payload: errmess
});

export const addProd = (prod)=> ({
    type: ActionTypes.ADD_PROD,
    payload: prod
})

export const fetchNifty = () =>(dispatch ) => {
   dispatch(niftyLoading(true));
  
  console.log('i am here')
      return axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=NFTY&apikey=LUDIHN9BDZSS0TWU')
           .then(res =>{
    
    dispatch(addNifty(res.data["Time Series (Daily)"]));
  } )
  
  }
  
  
  export const niftyLoading = () => ({
      type: ActionTypes.NIFTY_LOADING
  })
  
  export const niftyFailed = (errmess) => ({
      type: ActionTypes.NIFTY_FAILED,
      payload: errmess
  });
  
  export const addNifty = (prod)=> ({
      type: ActionTypes.ADD_NIFTY,
      payload: prod
  })




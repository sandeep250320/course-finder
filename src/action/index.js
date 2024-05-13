import { GET_CARDS,CARDS_ERROR } from "./actionTypes";
import axios from 'axios'
import dummydata from '../components/Sdata'

export const getCards = () =>async dispatch=>{

try {
    const res =  dummydata;
    console.log("res",res);
    dispatch( {
        type: GET_CARDS,
        payload : res
    })
}

catch(error){
    dispatch( {
        type : CARDS_ERROR,
        payload: error,
    })
}

}

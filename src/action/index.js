import { GET_CARDS,CARDS_ERROR } from "./actionTypes";
import axios from 'axios'

export const getCards = () =>async dispatch=>{

try {
    const res =  await axios.get('https://nut-case.s3.amazonaws.com/coursessc.json')
    dispatch( {
        type: GET_CARDS,
        payload : res.data.slice(0,500)
    })
}

catch(error){
    dispatch( {
        type : CARDS_ERROR,
        payload: error,
    })
}

}

import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET} from './action-types'
import axios from 'axios'

// export const addFav = (characters) =>{
//     return{
//         type: ADD_FAV,
//         payload: characters
//     }
// }

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint, character)

         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error.message);
      }
 }
}

// export const removeFav = (id) =>{
//     return{
//         type: REMOVE_FAV,
//         payload: id
//     }
// }

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try {
         const {data} = await  axios.delete(endpoint)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
      });
      } catch (error) {
         console.log(error.message);
      };
    };
 };


 export const filterCards = (gender) =>{
   return ({
      type: FILTER,
      payload: gender,
});
 }

 export const orderCards = (orden) =>{
   return ({
      type: ORDER,
      payload: orden,
});
 }

 export const resetFav = () => {
   return {
     type: RESET,
   };
 };
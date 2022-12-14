import axios from "axios";
import {  useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import {
  GET_DETAIL,
  GET_COURSES,
  POST_COURSES,
  GET_CATEGORIES,
  ORDER_BY_RATING,
  ORDER_BY_PRICE,
  ORDER_BY_PUBLISHED,
  ADDFILTER,
  GET_FILTER_CATEGORY,
  FILTER_DIFFICULTY,
  FILTER_DURATION,
  FILTER_CATEGORY,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
} from "../action-types";

export function getCourses(name) {

  return async (dispatch) => {
    let response = await axios.get(
      `http://localhost:3001/courses?name=${name}`
    );
    dispatch({
      type: GET_COURSES,
      payload: response.data,
    });
  };

}


export function getDetail(id) {
  return async (dispatch) => {
    let response = await axios.get(`http://localhost:3001/courses/${id}`);

    dispatch({
      type: GET_DETAIL,
      payload: response.data,
    });
  };
}

export function getCategory(){
    return async (dispatch) =>{
        let categories = await axios.get('http://localhost:3001/categories')
        return dispatch({
            type: GET_CATEGORIES,
            payload: categories.data
        })
    }
}

export function getFilterCategory(id){
  
  if(id=== 'all'){
    return async (dispatch)=>{
      const response = await axios.get(`http://localhost:3001/filter/category`)
      dispatch({
        type:GET_FILTER_CATEGORY,
        payload : response.data //array de cursos
      })
    }
  }

  return async (dispatch)=>{
    const response = await axios.get(`http://localhost:3001/filter/category/?id=${id}`)
    dispatch({
      type:GET_FILTER_CATEGORY,
      payload : response.data //array de cursos
    })
  }
}

export function posCourses(data){
  return async (dispatch) =>{
      dispatch({
          type: POST_COURSES,
          payload:data,
      })
  }
}


export function orderByRating(payload) {
    return {
        type: ORDER_BY_RATING,
        payload
    };
}

export function orderByPrice(payload) {
    return {
        type: ORDER_BY_PRICE,
        payload
    };
}

export function orderByPublished(payload) {
    return {
        type: ORDER_BY_PUBLISHED,
        payload
    };
}

export function createNewCategory(payload) {
  return async function (dispatch) {
    let json = await axios.post('http://localhost:3001/categories', payload);
    return json;
  }
}

export function AllFilterDuration(payload){ // ==> llega un obj {duration:'1A50'}
 
  return async (dispatch)=>{
    dispatch({
    type: ADDFILTER,
    payload: payload,
   });
 }
}

export function AllFilterDifficulty(payload){ // ==> llega un obj {duration:'1A50'}
 
  return async (dispatch)=>{
    dispatch({
    type: 'ADDFILTERDIFICULTY',
    payload: payload,
   });
 }
}

// export function GetFilter (){

//   const duration = useSelector(state=> state.filterDuration)
//   const difficulty = useSelector(state=> state.filterDifficulty)

//   // console.log(difficulty.difficulty)
//   console.log(duration.duration)

//   return async (dispatch)=>{
//     const response = await axios.get(`http://localhost:3001/filter/?duration${duration.duration}`) // ==>no se como conseguir todos los query juntos 
//     console.log('data', response.data)
//     dispatch({
//       type: 'GET_FILTER',
//       payload: response.data,
//     });
//   }
// }

export function filterDifficulty(difficulty){
  return {
    type: FILTER_DIFFICULTY,
    payload: difficulty
  }
}
export function filterDuration(duration){
  return {
    type: FILTER_DURATION,
    payload : duration
  }
}
export function filterCategory(category){
  return {
    type: FILTER_CATEGORY,
    payload : category
  }
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id
  };
}

export function deleteFromCart(id, all = false){
  return async (dispatch)=>{
    if(all) {
      dispatch({
          type: REMOVE_ALL_FROM_CART,
          payload: id
      })
    } else {
     dispatch({
         type: REMOVE_ONE_FROM_CART,
         payload: id
     })
    }
  }
}

export function clearCart(){
  return {
    type: CLEAR_CART,
  }
}

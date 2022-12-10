import axios from "axios";
import {  useSelector } from "react-redux"
import {
  GET_DETAIL,
  GET_COURSES,
  GET_CATEGORIES,
  ORDER_BY_RATING,
  ORDER_BY_PRICE,
  ORDER_BY_PUBLISHED,
  ADDFILTER
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

export function posCourses(data){
  return async (dispatch) =>{
      dispatch({
          type: "POST_COURSES",
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

export function GetFilter (){

  const duration = useSelector(state=> state.filterDuration)
  const difficulty = useSelector(state=> state.filterDifficulty)


  return async (dispatch)=>{
    const response = await axios.get(`http://localhost:3001/filter?${difficulty}&${duration}`) 
    dispatch({
      type: 'GET_FILTER',
      payload: response.data,
    });
  }
}
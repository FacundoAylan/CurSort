import axios from "axios";
import { GET_DETAIL, GET_COURSES, GET_CATEGORIES } from "../action-types";

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

// export function filterCategory(payload) {
//     return {
//       type: "FILTER_CATEGORY",
//       payload: payload,
//     };
//   }



export function orderByName(payload) {
    return {
        type: 'ORDER_BY_NAME',
        payload
    };
}


export function orderByRating(payload) {
    return {
        type: 'ORDER_BY_RATING',
        payload
    };
}


export function orderByPrice(payload) {
    return {
        type: 'ORDER_BY_PRICE',
        payload
    };
}

export function orderByPublished(payload) {
    return {
        type: 'ORDER_BY_PUBLISHED',
        payload
    };
}

export function postCourses(payload){
  return async function (dispatch){
    const post = await axios.post("http://localhost:3001/courses/", payload);
    return post;
  }
}


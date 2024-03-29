import axios from "axios";
import { useSelector } from "react-redux";
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
  CLEAN_FILTERS,
  GET_WARNING,
  SET_USER,
  GET_USER,
  SET_LOGUIN,
  GET_LOGUIN,
  GET_USERS,
  GET_ADMIN_COURSES,
  GET_ORDERS,
  EDIT_COURSE,
  CLEAR_COURSE_DETAIL,
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

export function getCategory() {
  return async (dispatch) => {
    let categories = await axios.get("http://localhost:3001/categories");
    return dispatch({
      type: GET_CATEGORIES,
      payload: categories.data,
    });
  };
}

export function getFilterCategory(id) {
  if (id === "all") {
    return async (dispatch) => {
      const response = await axios.get(`http://localhost:3001/filter/category`);

      dispatch({
        type: GET_FILTER_CATEGORY,
        payload: response.data, //array de cursos
      });
    };
  }

  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:3001/filter/category/?id=${id}`
    );
    dispatch({
      type: GET_FILTER_CATEGORY,
      payload: response.data, //array de cursos
    });
  };
}

export function posCourses(data) {
  return async (dispatch) => {
    dispatch({
      type: POST_COURSES,
      payload: data,
    });
  };
}

export function orderByRating() {
  return {
    type: ORDER_BY_RATING,
  };
}

export function orderByPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
}

export function orderByPublished(payload) {
  return {
    type: ORDER_BY_PUBLISHED,
    payload,
  };
}

export function createNewCategory(payload) {
  return async function (dispatch) {
    let json = await axios.post("http://localhost:3001/categories", payload);
    return json;
  };
}

export function AllFilterDuration(payload) {
  // ==> llega un obj {duration:'1A50'}

  return async (dispatch) => {
    dispatch({
      type: ADDFILTER,
      payload: payload,
    });
  };
}

export function AllFilterDifficulty(payload) {
  // ==> llega un obj {duration:'1A50'}

  return async (dispatch) => {
    dispatch({
      type: "ADDFILTERDIFICULTY",
      payload: payload,
    });
  };
}

export function filterDifficulty(difficulty) {
  return {
    type: FILTER_DIFFICULTY,
    payload: difficulty,
  };
}
export function filterDuration(duration) {
  return {
    type: FILTER_DURATION,
    payload: duration,
  };
}
export function filterCategory(category) {
  return {
    type: FILTER_CATEGORY,
    payload: category,
  };
}

export function addToCart(id) {
  return {
    type: ADD_TO_CART,
    payload: id,
  };
}

export function deleteFromCart(id, all = false) {
  return async (dispatch) => {
    if (all) {
      dispatch({
        type: REMOVE_ALL_FROM_CART,
        payload: id,
      });
    } else {
      dispatch({
        type: REMOVE_ONE_FROM_CART,
        payload: id,
      });
    }
  };
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  };
}

export function contact(payload) {
  return async function (dispatch) {
    let json = await axios.post(
      "http://localhost:3001/contact/send-email",
      payload
    );
    return json;
  };
}

export function cleanFilters() {
  return {
    type: CLEAN_FILTERS,
  };
}

export function getWarning() {
  return {
    type: GET_WARNING,
  };
}

export function postComment(value) {
  return async (dispatch) => {
    let response = await axios.post(
      `http://localhost:3001/courses/review`,
      value
    );

    dispatch({
      type: "POST_REVIEWS",
      payload: response.data,
    });
  };
}

export function setUserLocalStore(payload) {
  return {
    type: SET_USER,
    payload,
  };
}

export function getUserLocalStore() {
  return {
    type: GET_USER,
  };
}

export function setLoguinLocalStore(payload) {
  return {
    type: SET_LOGUIN,
    payload,
  };
}

export function getLoguinLocalStore() {
  return {
    type: GET_LOGUIN,
  };
}
//develop se dejo por las dudas
export function getUsers() {
  return async (dispatch) => {
    let response = await axios.get("http://localhost:3001/users/getUsers");
    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  };
}

//develop

export function getAdminCourses(name) {
  return async (dispatch) => {
    let response = await axios.get(
      `http://localhost:3001/courses?name=${name}`
    );
    dispatch({
      type: GET_ADMIN_COURSES,
      payload: response.data,
    });
  };
}

// pasado por juan
export function putUser(payload) {
  return async function (dispatch) {
    const responseUser = await axios.put("http://localhost:3001/users/edit",payload
    );
    dispatch({
      type: "EDIT_USER",
      payload: responseUser.data,
    });
  };
}

export function putCourse(payload) {
  return async function (dispatch) {
    const res = await axios.put("http://localhost:3001/courses", payload
    );
    dispatch({
      type: EDIT_COURSE,
      payload: res.data,
    });
  };
}

export function getOrders() {
  return async (dispatch) => {
    let order = await axios.get("http://localhost:3001/checkout/orders");
    return dispatch({
      type: GET_ORDERS,
      payload: order.data,
    });
  };
}

export function getUserEmail(email) {
  return async (dispatch) => {
    let userEmail = await axios.get(
      `http://localhost:3001/users/userEmail?email=${email}`
    );
    return dispatch({
      type: "GET_USER_EMAIL",
      payload: userEmail.data,
    });
  };
}

export function clearCourseDetail() {
  return {
    type: CLEAR_COURSE_DETAIL,
  };
}

// const getUserEmail= async function (email){
//   const userEmail = await axios.get(`http://localhost:3001/users/userEmail?email=${email}`)
//   return userEmail.data
// }

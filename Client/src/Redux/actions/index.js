import axios from "axios";

export function getCourses(name) {

  return async (dispatch) => {
    let response = await axios.get(
      `http://localhost:3001/courses?name=${name}`
    );
    dispatch({
      type: "GET_COURSES",
      payload: response.data,
    });
  };

}

export function getDetail(id) {
  return async (dispatch) => {
    let response = await axios.get(`http://localhost:3001/courses/${id}`);

    dispatch({
      type: "GET_DETAIL",
      payload: response.data,
    });
  };
}

export function getCategory(){
    return async (dispatch) =>{
        let categories = await axios.get('http://localhost:3001/categories')
        dispatch({
            type: "GET_CATEGORIES",
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
// export function filterCategory(payload) {
//     return {
//       type: "FILTER_CATEGORY",
//       payload: payload,
//     };
//   }


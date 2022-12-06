import axios from 'axios';

export function getCourses(name) {
  console.log(name)
    return async (dispatch) => {
        let response = await axios.get(`http://localhost:3001/courses?name=${name}`)
        dispatch({
            type: "GET_COURSES",
            payload: response.data
        })

    }


}

export function getDetail(id) {

    return async (dispatch) => {
        let response = await axios.get(`http://localhost:3001/courses/${id}`)

        dispatch({
            type: "GET_DETAIL",
            payload: response.data
        })

    }


}

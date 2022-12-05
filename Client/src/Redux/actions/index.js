import axios from 'axios';

const getCourses = (name) => {

        return async (dispatch) => {
            let response = await axios.get(`http://localhost:3001/course?name=${name}`)

            dispatch({
                type: "GET_COURSES",
                payload: response.data
            })

        }


    }

const getDetail = (id) => {

        return async (dispatch) => {
            let response = await axios.get(`http://localhost:3001/course/${id}`)

            dispatch({
                type: "GET_DETAIL",
                payload: response.data
            })

        }


    }
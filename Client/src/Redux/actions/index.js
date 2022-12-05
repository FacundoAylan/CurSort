import axios from 'axios';

const actions = {
    getCourses : (name) => {

        return async (dispatch) => {
            let response = await axios.get(`http://localhost:3001/courses?name=${name}`)

            dispatch({
                type: "GET_COURSES",
                payload: response.data
            })

        }


    },

getDetail : (id) => {

        return async (dispatch) => {
            let response = await axios.get(`http://localhost:3001/courses/${id}`)

            dispatch({
                type: "GET_DETAIL",
                payload: response.data
            })

        }


    }
}


export default actions;
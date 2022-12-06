import axios from 'axios';

export function getCourses() {

    return async (dispatch) => {
        let response = await axios.get('http://localhost:3001/courses/')
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
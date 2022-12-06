let initialState = {
    courseDetail: {},
    allCourses: [],
    courses: [],
    // categories: []
    warnings: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COURSES':
            return {
                ...state,
                allCourses: action.payload,
                courses: action.payload
            }

        case 'GET_DETAIL':
            return {
                ...state,
                courseDetail: {
                    id: action.payload.id,
                    name: action.payload.name,
                    instructor: action.payload.instructor,
                    duration: action.payload.duration,
                    description: action.payload.description,
                    rating: action.payload.rating,
                    image: action.payload.image,
                    difficulty: action.payload.difficulty,
                    price: action.payload.price
                }
            }

        default: return state
    }
}

export default rootReducer;
import { GET_DETAIL, GET_COURSES, GET_CATEGORIES } from "../action-types";

let initialState = {
    courseDetail: {},
    allCourses: [],
    courses: [],
    warnings: '',
    categories: []
    
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        allCourses: action.payload,
        courses: action.payload,
      };

    case GET_DETAIL:
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
          price: action.payload.price,
        },
      };
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
            
    case "ORDER_BY_RATING":
      let orderRating =
        action.payload === "asc"
          ? state.courses.sort((a, b) => {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : state.courses.sort((a, b) => {
              if (a.rating > b.rating) {
                return -1;
              }
              if (b.rating > a.rating) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        courses: action.payload === "all" ? state.allCourses : orderRating,
      };
    case "ORDER_BY_PRICE":
      let orderPrice =
        action.payload === "asc"
          ? state.courses.sort((a, b) => {
              if (a.price > b.price) {
                return 1;
              }
              if (b.price > a.price) {
                return -1;
              }
              return 0;
            })
          : state.courses.sort((a, b) => {
              if (a.price > b.price) {
                return -1;
              }
              if (b.price > a.price) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        courses: action.payload === "all" ? state.allCourses : orderPrice,
      };
    case "ORDER_BY_PUBLISHED":
        let orderPublished =
            action.payload === "asc"
                ? state.courses.sort((a, b) => {
                    if (a.createdAt > b.createdAt) {
                        return 1;
                    }
                    if (b.createdAt > a.createdAt) {
                        return -1;
                    }   
                    return 0;
                })
                : state.courses.sort((a, b) => {
                    if (a.createdAt > b.createdAt) {
                        return -1;
                    }
                    if (b.createdAt > a.createdAt) {
                        return 1;
                    }
                    return 0;
                });
        return {
            ...state,
            courses: action.payload === "all" ? state.allCourses : orderPublished,
        };

    default:
      return state;
  }
};



export default rootReducer;
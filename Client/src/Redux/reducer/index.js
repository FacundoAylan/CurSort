import { filter } from "@chakra-ui/react";
import {
  GET_DETAIL,
  GET_COURSES,
  GET_CATEGORIES,
  ADDFILTER,
  GET_FILTER_CATEGORY,
  FILTER_DIFFICULTY,
  FILTER_DURATION,
  FILTER_CATEGORY,

  ORDER_BY_PRICE,
  ORDER_BY_PUBLISHED,
  ORDER_BY_RATING,

  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  CLEAN_FILTERS,
  GET_WARNING,
  GET_USERS

  GET_USER,
  SET_USER,
  SET_LOGUIN,
  GET_LOGUIN,
} from "../action-types";

let initialState = {
  courseDetail: {},
  allCourses: [],
  courses: [], //este se renderiza
  warnings: "",
  categories: [],
  filterCurses: [],
  cart: [],
  local: JSON.parse(window.localStorage.getItem("cart")) || [],
  user: {},
  loguin: JSON.parse(window.localStorage.getItem("loguin")) || false,


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
          reviews:action.payload.reviews
        },
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case ORDER_BY_RATING:
      let orderRating = 
        state.courses.sort((a, b) => {
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
        courses: orderRating,
      };
    case ORDER_BY_PRICE:
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
        courses: orderPrice,
      };

    case ORDER_BY_PUBLISHED:
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
        courses: orderPublished,
      };
    case ADDFILTER:
      return {
        ...state,
        filterDuration: action.payload,
      };
    case "ADDFILTERDIFICULTY":
      return {
        ...state,
        filterDifficulty: action.payload,
      };
    case "GET_FILTER":
      return {
        ...state,
        courses: action.payload,
      };
    case GET_FILTER_CATEGORY:
      return {
        ...state,
        courses: action.payload,
      };

    case FILTER_DIFFICULTY:
      const FilteredDifficulty = state.courses.filter((curse) => action.payload === curse.difficulty);
      if( FilteredDifficulty.length > 0){
        return {
          ...state,
          courses: FilteredDifficulty,
        };
      }else{
        return {
          ...state,
          warnings: 'no match found',
        };
      }

    case FILTER_DURATION:

    if (action.payload === "1A50") {
        let filter =state.courses.filter((course) => course.duration >= 1 && course.duration <= 50);
        if(filter.length >0 ){
          return {
            ...state,
            courses: filter,
          };
        }else{
          return {
            ...state,
            warnings: 'no match found',
          };
        }
      } else if (action.payload === "51A100") {
        let filter = state.courses.filter((course) => course.duration >= 51 && course.duration <= 100);
        if(filter.length >0 ){
          return {
            ...state,
            courses: filter,
          };
        }else{
          return {
            ...state,
            warnings: 'no match found',
          };
        }
      } else if (action.payload === "100") {
        let filter = state.courses.filter((course) => course.duration >= 100);
        if(filter.length >0 ){
          return {
            ...state,
            courses: filter,
          };
        }else{
          return {
            ...state,
            warnings: 'no match found',
          };
        }
      }
      //este return creo que esta demas, pero me tira un warning
      return {
        ...state,
        courses: state.courses,
      };

    case FILTER_CATEGORY:
      let filteredCategory = state.courses.filter((course) =>
          course.categories.includes(action.payload)
        );
        if (action.payload === "all"){
          return {
            ...state,
            courses: state.allCourses,
          };
        }else if(filteredCategory.length > 0) {
            return {
              ...state,
              courses: filteredCategory,
            };
        }else{
          return {
            ...state,
            warnings: 'no match found',
          };
        }
  

    case ADD_TO_CART:
      const newItem = state.allCourses.find(
        (item) => item.id === Number(action.payload)
      );

      const itemRepeated = state.local?.find(
        (item) => item.id === newItem.id
      );

      if(!itemRepeated) {
        window.localStorage.setItem('cart', JSON.stringify([...state.local, { ...newItem, quantity: 1 }]))
        //console.log('cart', JSON.parse(window.localStorage.getItem('cart')))
      }

      return itemRepeated
        ? {
            ...state,
          }
        : { ...state, local: [JSON.parse(window.localStorage.getItem('cart'))].flat()};

    case REMOVE_ONE_FROM_CART:
      const data =  JSON.parse(window.localStorage.getItem('cart')).flat()
      //console.log('data', data)
      const itemToDelete = data.find(
        (item) => item.id === action.payload
      );

      //console.log('itemToDelete', itemToDelete)
      
      if(itemToDelete) {
        window.localStorage.setItem('cart', JSON.stringify(data.filter((item) => item.id !== Number(action.payload))))
        state.local = JSON.parse(window.localStorage.getItem('cart'))
        //console.log('state', state.local)
      }

      return itemToDelete.quantity > 1
        ? {
            ...state,
            local: state.local.map((item) =>
              item.id === Number(action.payload)
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            local: state.local.filter((item) => item.id !== Number(action.payload)),
          };
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== Number(action.payload)),
      };
    case CLEAR_CART:

      return {
        ...state,
        local: [],
      }
    case CLEAN_FILTERS:
      return {
        ...state,
        courses: state.allCourses
      };
    case GET_WARNING:
      return {
        ...state,
        warnings: '',
      };

    case SET_USER:
      return {
        ...state,
        user: [window.localStorage.setItem('user', JSON.stringify(action.payload))]
      };
    case GET_USER:
      return {
        ...state,
        user: JSON.parse(window.localStorage.getItem('user')),
      };
    case SET_LOGUIN:
      return {
        ...state,
        loguin: window.localStorage.setItem('loguin', JSON.stringify(action.payload))
      };
    case GET_LOGUIN:
      return {
        ...state,
        loguin: window.localStorage.getItem('loguin'),

    case GET_USERS:
      return {
        ...state,
        users : action.payload

      };
    default:
      return state;
  }
};

export default rootReducer;

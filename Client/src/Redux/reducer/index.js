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

} from "../action-types";

let initialState = {
  courseDetail: {},
  allCourses: [],
  courses: [], //este se renderiza
  warnings: "",
  categories: [],
  filterCurses: [],
  cart: [],
};

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
        categories: action.payload,
      };
    case ORDER_BY_RATING:
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
        courses: action.payload === "all" ? state.allCourses : orderPrice,
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
        courses: action.payload === "all" ? state.allCourses : orderPublished,
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
      const FilteredDifficulty =
        action.payload === "all"
          ? state.allCourses
          : state.courses.filter(
              (curse) => action.payload === curse.difficulty
            );
      return {
        ...state,
        courses: FilteredDifficulty,
      };

    case FILTER_DURATION:
      if (action.payload === "all") {
        return {
          type: FILTER_DURATION,
          courses: state.allCourses,
        };
      } else if (action.payload === "1A50") {
        return {
          ...state,
          courses: state.courses.filter(
            (course) => course.duration >= 1 && course.duration <= 50
          ),
        };
      } else if (action.payload === "51A100") {
        return {
          ...state,
          courses: state.courses.filter(
            (course) => course.duration >= 51 && course.duration <= 100
          ),
        };
      } else if (action.payload === "100") {
        return {
          ...state,
          courses: state.courses.filter((course) => course.duration >= 100),
        };
      }
      //este return creo que esta demas, pero me tira un warning
      return {
        ...state,
        courses: state.courses,
      };

    case FILTER_CATEGORY:
      let filteredCategory =
        action.payload === "all"
          ? state.allCourses
          : state.courses.filter((course) =>
              course.categories.includes(action.payload)
            );
      return {
        ...state,
        courses: filteredCategory,
      };

    case ADD_TO_CART:
      const newItem = state.allCourses.find(
        (item) => item.id === Number(action.payload)
      );

      const itemRepeated = state.cart?.find(
        (item) => item.id === newItem.id
      );

      return itemRepeated
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };

    case "REMOVE_ONE_FROM_CART":
      const itemToDelete = state.cart.find(
        (item) => item.id === action.payload
      );
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === Number(action.payload)
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== Number(action.payload)),
          };
    case "REMOVE_ALL_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== Number(action.payload)),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default rootReducer;

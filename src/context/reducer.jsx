import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  HANDLE_CHANGE,
  GET_CAR_SUCCESS,
  GET_CAR_BEGIN,
  SET_RENT_CAR,
  SET_DIF_DAY,
  SET_TOTAL_PRICE,
  GET_ORDER_BEGIN,
  GET_ORDER_SUCCESS,
  GET_ORDER_ERROR,
  MAKE_ORDER_BEGIN,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_ERROR,
  GET_USER_ORDER_BEGIN,
  GET_USER_ORDER_SUCCESS,
  GET_USER_ORDER_ERROR,
  CLEAR_CAR_SELECTED,
  CLEAR_FILTER,
  SEND_REFRESH_BEGIN,
  SEND_REFRESH_SUCCESS,
  EMPTY_PERSON_ID,
  CHANGE_PROFILE_BEGIN,
  CHANGE_PROFILE_SUCCESS,
  CHANGE_PROFILE_ERROR,
  DELETE_ORDER_BEGIN,
  DELETE_ORDER_SUCCESS,
  INSERT_CAR_BEGIN,
  INSERT_CAR_SUCCESS,
  INSERT_CAR_ERROR,
  GET_CAR_ERROR,
  DELETE_CAR_BEGIN,
  DELETE_CAR_SUCCESS,
  DELETE_CAR_ERROR,
  SET_CAR_SELECTED,
  CANCEL_CAR_EDIT,
  UPDATE_CAR_BEGIN,
  UPDATE_CAR_SUCCESS,
  APPROVING_ORDER_BEGIN,
  APPROVING_ORDER_SUCCESS,
  SET_FILTERED_ORDER
} from "./action";
import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: action.payload.type,
      alertText: action.payload.msg,
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: "false",
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    const { accessToken, user, alertText } = action.payload;
    return {
      ...state,
      isLoading: false,
      accessToken: accessToken,
      user: user,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      accessToken: null,
    };
  }
  if (action.type === GET_CAR_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_CAR_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      cars: action.payload.cars,
      totalCars: action.payload.totalCars,
    };
  }
  if (action.type === SET_RENT_CAR) {
    const car = state.cars.find((car) => car._id === action.payload.id);

    return {
      ...state,
      isRenting: true,
      rentCarId: car._id,
      carSelected: car,
    };
  }
  if (action.type === SET_DIF_DAY) {
    return {
      ...state,
      differenceInDays: action.payload.day,
    };
  }
  if (action.type === SET_TOTAL_PRICE) {
    return {
      ...state,
      totalPrice: action.payload.price,
    };
  }
  if (action.type === GET_ORDER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_ORDER_SUCCESS) {
    return {
      ...state,
      orders: action.payload.orders,
      isLoading: false,
    };
  }
  if (action.type === MAKE_ORDER_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: true,
      alertText: "Making car rental order...",
      alertType: "working",
    };
  }
  if (action.type === MAKE_ORDER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: "Rented your car already",
      alertType: "success",
    };
  }
  if (action.type === MAKE_ORDER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertText: action.payload.msg,
      alertType: "danger",
    };
  }
  if (action.type === GET_USER_ORDER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_USER_ORDER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user_orders: action.payload.user_orders,
    };
  }
  if (action.type === GET_USER_ORDER_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === CLEAR_CAR_SELECTED) {
    return {
      ...state,
      carSelected: null,
      showAlert: false,
      alertText: "",
      alertType: "",
      start_date: "",
      return_date: "",
      differenceInDays: 0,
      totalPrice: 0,
    };
  }
  if (action.type === CLEAR_FILTER) {
    return {
      ...state,
      carPrice: "all",
      carLocation: "all",
      carSeat: "all",
      carSystem: "all",
      search:""
    };
  }
  if (action.type === SEND_REFRESH_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SEND_REFRESH_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === EMPTY_PERSON_ID) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "You must specify your phone-number!", 
    };
  }
  if (action.type === CHANGE_PROFILE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === CHANGE_PROFILE_SUCCESS) {
    const { user, accessToken } = action.payload;
    return {
      ...state,
      isLoading: false,
      user: user,
      accessToken: accessToken,
    };
  }
  if (action.type === DELETE_ORDER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === DELETE_ORDER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === INSERT_CAR_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === INSERT_CAR_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.msg,
    };
  }
  if (action.type === INSERT_CAR_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_CAR_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === DELETE_CAR_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === DELETE_CAR_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === DELETE_CAR_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === SET_CAR_SELECTED) {
    const { car } = action.payload;
    return {
      ...state,
      carSelected: car,
    };
  }
  if (action.type === CANCEL_CAR_EDIT) {
    return {
      ...state,
      carSelected: null,
      showAlert:false,
      alertText:"",
      alertType:"",
    };
  }
  if (action.type === UPDATE_CAR_BEGIN) {
    return {
      ...state,
      isLoading:true
    };
  }
  if (action.type === UPDATE_CAR_SUCCESS) {
    return {
      ...state,
      isLoading:false
    };
  }
  if(action.type === APPROVING_ORDER_BEGIN){
    return {
      ...state,
      isLoading:true
    }
  }
  if(action.type === APPROVING_ORDER_SUCCESS){
    return {
      ...state,
      isLoading:false
    }
  }
  if(action.type === SET_FILTERED_ORDER){
    return {
      ...state,
      filteredOrder:action.payload.filteredOrder
    }
  }
};

export default reducer;

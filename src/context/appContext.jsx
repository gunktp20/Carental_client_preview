import React, { useContext, useEffect, useReducer } from "react";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  HANDLE_CHANGE,
  GET_CAR_BEGIN,
  GET_CAR_SUCCESS,
  GET_CAR_ERROR,
  SET_RENT_CAR,
  SET_DIF_DAY,
  SET_TOTAL_PRICE,
  GET_ORDER_BEGIN,
  GET_ORDER_SUCCESS,
  MAKE_ORDER_BEGIN,
  MAKE_ORDER_SUCCESS,
  MAKE_ORDER_ERROR,
  GET_USER_ORDER_BEGIN,
  GET_USER_ORDER_SUCCESS,
  CLEAR_CAR_SELECTED,
  CLEAR_FILTER,
  SEND_REFRESH_BEGIN,
  SEND_REFRESH_SUCCESS,
  EMPTY_PERSON_ID,
  CHANGE_PROFILE_BEGIN,
  CHANGE_PROFILE_SUCCESS,
  DELETE_ORDER_BEGIN,
  DELETE_ORDER_SUCCESS,
  INSERT_CAR_BEGIN,
  INSERT_CAR_ERROR,
  INSERT_CAR_SUCCESS,
  DELETE_CAR_BEGIN,
  DELETE_CAR_SUCCESS,
  DELETE_CAR_ERROR,
  SET_CAR_SELECTED,
  CANCEL_CAR_EDIT,
  UPDATE_CAR_BEGIN,
  UPDATE_CAR_SUCCESS,
  UPDATE_CAR_ERROR,
  APPROVING_ORDER_BEGIN,
  APPROVING_ORDER_SUCCESS,
  SET_FILTERED_ORDER
} from "./action";
import reducer from "./reducer";
import Axios from "axios";

const user = localStorage.getItem("user");
const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");

const initialState = {
  user: user ? JSON.parse(user) : null,
  accessToken: accessToken,
  showAlert: false,
  alertText: "",
  alertType: "",
  isLoading: false,
  showSidebar: false,
  totalCars: 0,
  cars: [],
  carLocationOptions: [
    "Bangkok",
    "Chiang Mai",
    "Samut Sakhon",
    "Phetchaburi",
    "Samut Prakan",
    "Ayutthaya",
    "Hua Hin",
    "Pattaya",
    "Chonburi",
  ],
  carSeatOptions: [4, 6],
  carSystemOptions: ["Automatic", "Manual"],
  carPriceOptions: [900, 1000, 1300, 1500],
  carPrice: "all",
  carLocation: "all",
  carSeat: "all",
  carSystem: "all",
  rentCarId: null,
  carSelected: null,
  start_date: null,
  return_date: null,
  differenceInDays: 0,
  totalPrice: 0,
  orders: [],
  user_orders: [],
  search: "",
  filteredOrder:null,
};

const URL = import.meta.env.VITE_BASE_URL;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = Axios.create({
    baseURL: URL,
  });

  const refreshFetch = Axios.create({
    baseURL: URL,
  });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.accessToken}`;

      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      if (err.response.status === 401) {
        sendRefreshToken();
      }
      return Promise.reject(err);
    }
  );

  refreshFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${refreshToken}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  refreshFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      if (err.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(err);
    }
  );

  const displayAlert = (msg, type) => {
    dispatch({ type: DISPLAY_ALERT, payload: { msg, type } });
    clearAlert();
  };

  const handleSearch = (event) => {
    const { name, value } = event.target;
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, accessToken, refreshToken }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await Axios.post(
        `${URL}/api/v1/auth/${endPoint}`,
        currentUser
      );
      //console.log(data);
      const { user, accessToken, refreshToken } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, accessToken, alertText },
      });
      addUserToLocalStorage({ user, accessToken, refreshToken });
    } catch (err) {
      //console.log(err);
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
    clearAlert();
  };

  const sendRefreshToken = async () => {
    dispatch({ type: SEND_REFRESH_BEGIN });
    try {
      const { data } = await refreshFetch.post(`${URL}/api/v1/auth/refresh`);
      const { user, accessToken, refreshToken } = data;
      addUserToLocalStorage({ user, accessToken, refreshToken });
      dispatch({
        type: SEND_REFRESH_SUCCESS,
        payload: { user, accessToken },
      });
    } catch (err) {
      //console.log(err);
    }
  };

  const getCars = async () => {
    dispatch({ type: GET_CAR_BEGIN });
    const { carLocation, carSeat, carSystem, carPrice } = state;
    try {
      const { data } = await authFetch.get(
        `${URL}/api/v1/car?price=${carPrice}&location=${carLocation}&seat=${carSeat}&system=${carSystem}`
      );
      dispatch({
        type: GET_CAR_SUCCESS,
        payload: { cars: data.cars, totalCars: data.totalCars },
      });
    } catch (err) {
      dispatch({ type: GET_CAR_ERROR });
    }
  };

  const getOrders = async () => {
    dispatch({ type: GET_ORDER_BEGIN });
    try {
      const { data } = await authFetch.get(`${URL}/api/v1/order`);
      dispatch({
        type: GET_ORDER_SUCCESS,
        payload: { orders: data.orders },
      });
    } catch (err) {
      //console.log(err);
    }
  };

  const getUserOrder = async () => {
    dispatch({ type: GET_USER_ORDER_BEGIN });
    try {
      const { data } = await authFetch.get(`${URL}/api/v1/order/user`);
      dispatch({
        type: GET_USER_ORDER_SUCCESS,
        payload: { user_orders: data.orderRentedCar },
      });
    } catch (err) {
      //console.log(err);
    }
  };

  const makeOrderCar = async (event) => {
    event.preventDefault();
    dispatch({ type: MAKE_ORDER_BEGIN });
    const { carSelected, start_date, return_date } = state;
    try {
      const { data } = await authFetch.post(`${URL}/api/v1/order`, {
        car: carSelected._id,
        date_start: start_date,
        date_return: return_date,
      });
      dispatch({ type: MAKE_ORDER_SUCCESS });
      getOrders();
    } catch (err) {
      //console.log(err);
      dispatch({
        type: MAKE_ORDER_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
  };

  const getCarById = (id) => {
    const cars = state.cars.filter((car) => {
      return car._id === id;
    });
    dispatch({ type: SET_CAR_SELECTED, payload: { car: cars[0] } });
  };

  const cancelCarEdit = () => {
    dispatch({ type: CANCEL_CAR_EDIT });
  };

  const insertPhoneNumber = async ({ phoneNumber }) => {
    dispatch({ type: CHANGE_PROFILE_BEGIN });
    try {
      const { data } = await authFetch.put(`${URL}/api/v1/user/phone-number`, {
        phoneNumber: phoneNumber,
      });
      const { user, accessToken, refreshToken } = data;
      //console.log(accessToken);
      dispatch({
        type: CHANGE_PROFILE_SUCCESS,
        payload: { user, accessToken },
      });
      addUserToLocalStorage({ user, accessToken, refreshToken });
    } catch (err) {
      //console.log(err);
    }
  };

  const insertNewCar = async (newCar) => {
    dispatch({ type: INSERT_CAR_BEGIN });
    try {
      await authFetch.post(`${URL}/api/v1/car`, newCar);
      dispatch({
        type: INSERT_CAR_SUCCESS,
        payload: { msg: "Created you car already." },
      });
      getCars();
      clearAlert();
    } catch (err) {
      dispatch({
        type: INSERT_CAR_ERROR,
        payload: { msg: err.response.data.msg },
      });
    }
  };

  const updateCar = async (car_id, newData) => {
    dispatch({ type: UPDATE_CAR_BEGIN });
    try {
      await authFetch.put(`${URL}/api/v1/car/${car_id}`, newData);
      dispatch({
        type: UPDATE_CAR_SUCCESS,
      });
      getCars();
    } catch (err) {
      //console.log(err);
    }
  };

  const deleteOrderById = async (order_id) => {
    dispatch({ type: DELETE_ORDER_BEGIN });
    try {
      await authFetch.delete(`${URL}/api/v1/order/${order_id}`);
      dispatch({ type: DELETE_ORDER_SUCCESS });
      getUserOrder();
    } catch (err) {
      //console.log(err);
    }
  };

  const deleteOrderByAdmin = async (order_id) => {
    dispatch({ type: DELETE_ORDER_BEGIN });
    try {
      await authFetch.delete(`${URL}/api/v1/order/${order_id}`);
      dispatch({ type: DELETE_ORDER_SUCCESS });
      getOrders();
    } catch (err) {
      //console.log(err);
    }
  };

  const approveOrderById = async (order_id) => {
    dispatch({ type: APPROVING_ORDER_BEGIN });
    try {
      await authFetch.put(`${URL}/api/v1/order/${order_id}`);
      dispatch({ type: APPROVING_ORDER_SUCCESS });
      getOrders();
    } catch (err) {
      //console.log(err);
    }
  };

  const deleteCarById = async (car_id) => {
    dispatch({ type: DELETE_CAR_BEGIN });
    try {
      await authFetch.delete(`${URL}/api/v1/car/${car_id}`);
      dispatch({ type: DELETE_CAR_SUCCESS });
      getCars();
    } catch (err) {
      dispatch({ type: DELETE_CAR_ERROR });
    }
  };

  const setFilteredOrder = async (filteredOrder) =>{
      dispatch({type:SET_FILTERED_ORDER,payload:{filteredOrder:filteredOrder}})
  }

  const clearCarSelected = () => {
    dispatch({ type: CLEAR_CAR_SELECTED });
  };

  const setRentCar = (id) => {
    dispatch({ type: SET_RENT_CAR, payload: { id } });
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const setDifferenceInDays = (day) => {
    dispatch({ type: SET_DIF_DAY, payload: { day: day } });
  };
  const setTotalPrice = (price) => {
    dispatch({ type: SET_TOTAL_PRICE, payload: { price: price } });
  };

  const emptyPersonID = () => {
    dispatch({ type: EMPTY_PERSON_ID });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  useEffect(() => {
    if (user && accessToken) getCars();
    if (state.carSelected) getOrders();
  }, [state.carSelected]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        setupUser,
        toggleSidebar,
        logoutUser,
        handleChange,
        getCars,
        setRentCar,
        setDifferenceInDays,
        setTotalPrice,
        getOrders,
        makeOrderCar,
        getUserOrder,
        clearCarSelected,
        clearFilter,
        emptyPersonID,
        insertPhoneNumber,
        deleteOrderById,
        insertNewCar,
        deleteCarById,
        getCarById,
        cancelCarEdit,
        updateCar,
        approveOrderById,
        deleteOrderByAdmin,
        handleSearch,
        setFilteredOrder
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };

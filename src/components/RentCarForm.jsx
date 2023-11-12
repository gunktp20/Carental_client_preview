import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/RentCarForm";
import { CarInfo, Alert } from "./index";
import { useAppContext } from "../context/appContext";
import { FaLocationArrow } from "react-icons/fa";
import { BiSolidCog } from "react-icons/bi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FcMoneyTransfer } from "react-icons/fc";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function RentCarForm() {
  const {
    handleChange,
    carSelected,
    return_date,
    start_date,
    setDifferenceInDays,
    setTotalPrice,
    totalPrice,
    displayAlert,
    showAlert,
    differenceInDays,
    makeOrderCar,
    user,
    clearCarSelected,
    emptyPersonID,
    isLoading,
  } = useAppContext();

  const navigate = useNavigate();
  const handleChangeDate = (e) => {
    const date = new Date(e.target.value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateFormated = [month, day, year].join("/");

    handleChange({ name: e.target.name, value: dateFormated });
  };

  const getDifferenceDays = (start_date, return_date) => {
    var date1 = new Date(start_date);
    var date2 = new Date(return_date);

    var Difference_In_Time = date2.getTime() - date1.getTime();

    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    setDifferenceInDays(Difference_In_Days);

    // console.log(Difference_In_Days);

    const { price } = carSelected;
    var totalPrice = price * Difference_In_Days;

    if (Difference_In_Days === 0) {
      totalPrice = price;
    }
    setTotalPrice(totalPrice);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!user.phoneNumber) {
      navigate("/profile");
      emptyPersonID();
      return
    }

    const toDay = new Date();
    const dateStart = new Date(start_date);
    const dateReturn = new Date(return_date);

    const isDateValid = () => {
      var difTimeStart = dateStart.getTime() - toDay.getTime();
      var difDayStart = difTimeStart / (1000 * 3600 * 24);

      if (difDayStart <= -1) {
        return false;
      }

      var difTimeReturn = dateReturn.getTime() - toDay.getTime();
      var difDayReturn = difTimeReturn / (1000 * 3600 * 24);

      if (difDayReturn <= -1) {
        return false;
      }

      return true;
    };

    if (!start_date || !return_date) {
      return displayAlert("Please provide all value !", "danger");
    }

    if (differenceInDays < 0) {
      return displayAlert("Please provide valid information !", "danger");
    }

    const dateValid = isDateValid();

    if (!dateValid) {
      return displayAlert("Please provide valid date !", "danger");
    }

    makeOrderCar(event);
  };

  useEffect(() => {
    if (start_date && return_date) {
      getDifferenceDays(start_date, return_date);
    }
  }, [return_date, start_date]);
  return (
    <Wrapper>
      <button
        className="back-btn"
        onClick={(event) => {
          clearCarSelected(event);
        }}
        disabled={isLoading}
      >
        <HiMiniArrowUturnLeft />
        Back
      </button>
      <form className="form">
        <div className="car-selected">
          <img src={carSelected.image}></img>
          <div className="car-detail">
            <div className="car-info">
              <CarInfo
                icon={<FaLocationArrow />}
                text={`${carSelected.location}`}
              />
              <CarInfo icon={<BiSolidCog />} text={carSelected.system} />
              <CarInfo
                icon={<BsFillPersonCheckFill />}
                text={`${carSelected.seat} seater`}
              />
              <CarInfo
                icon={<FcMoneyTransfer />}
                text={carSelected.price}
                fontWeight="bold"
              />
            </div>
            <div className="car-form">
              <div>
                <label htmlFor="start_date">Start Date</label>
                <input
                  id="start_date"
                  name="start_date"
                  type="date"
                  onChange={(event) => handleChangeDate(event)}
                ></input>
              </div>
              <div>
                <label htmlFor="return_date">Return Date</label>
                <input
                  id="return_date"
                  name="return_date"
                  type="date"
                  onChange={(event) => handleChangeDate(event)}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="rent-section">
          <div className="price">
            {totalPrice > 0 && return_date && start_date ? totalPrice : "0"}
          </div>
          <button
            className="rent-btn"
            onClick={(event) => {
              onSubmit(event);
            }}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Rent Now"}
          </button>
          <div className="warning">{showAlert && <Alert />}</div>
        </div>
      </form>
    </Wrapper>
  );
}

export default RentCarForm;

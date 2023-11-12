import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/InsertCarForm";
import { FormRow, Alert } from "./index";
import { useAppContext } from "../context/appContext";

const initialState = {
  car_id: "",
  brand: "",
  model: "",
  system: "",
  seat: 4,
  image: "",
  price: 500,
  location: "",
};

function InsertCarForm() {
  const {
    displayAlert,
    showAlert,
    insertNewCar,
    isLoading,
    carSelected,
    cancelCarEdit,
    updateCar,
  } = useAppContext();

  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const { car_id, brand, model, system, seat, image, price, location } =
      values;
    if (
      !car_id ||
      !brand ||
      !model ||
      !system ||
      !seat ||
      !image ||
      !price ||
      !location
    ) {
      return displayAlert("Please provide all values !", "danger");
    }
    const newCarInfo = values;

    if (carSelected) {
      return updateCar(carSelected._id, newCarInfo);
    } else {
      return insertNewCar(newCarInfo);
    }
  };

  useEffect(() => {
    if (carSelected) setValues(carSelected);
    if(!carSelected) setValues(initialState);
  }, [carSelected]);

  return (
    <Wrapper>
      <div className="form">
        <h4>{carSelected ? "Edit Car" : "Insert New Car"}</h4>

        {showAlert && (
          <div className="alert-box">
            <Alert />
          </div>
        )}
        <div className="form-center">
          {/* search by status */}
          <FormRow
            type="text"
            labelText="car id"
            name="car_id"
            value={values.car_id}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="brand"
            name="brand"
            value={values.brand}
            handleChange={handleChange}
          />
          {/* search position */}
          <FormRow
            type="text"
            labelText="model"
            name="model"
            value={values.model}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="system"
            name="system"
            value={values.system}
            handleChange={handleChange}
          />
          <FormRow
            type="number"
            labelText="seat"
            name="seat"
            value={values.seat}
            handleChange={handleChange}
          />
          <FormRow
            labelText="image"
            name="image"
            value={values.image}
            handleChange={handleChange}
          />
          <FormRow
            type="number"
            labelText="price"
            name="price"
            value={values.price}
            handleChange={handleChange}
          />
          <FormRow
            labelText="car location"
            name="location"
            value={values.location}
            handleChange={handleChange}
          />
          {carSelected && (
            <button
              className="btn btn-block btn-danger"
              onClick={() => {
                cancelCarEdit();
              }}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Cancel"}
            </button>
          )}
          <button
            className="btn btn-block btn-success"
            onClick={(event) => {
              onSubmit(event);
            }}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default InsertCarForm;

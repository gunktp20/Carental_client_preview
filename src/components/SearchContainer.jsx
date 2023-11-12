import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import { FormRowSelect } from "./index";
import { useAppContext } from "../context/appContext";

function SearchContainer() {
  const {
    carLocationOptions,
    carPriceOptions,
    carSeatOptions,
    carSystemOptions,
    handleChange,
    getCars,
    carLocation,
    carSeat,
    carSystem,
    carPrice,
  } = useAppContext();

  const handleSearch = (e) => {
    // if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  useEffect(() => {
    getCars()
  }, [carLocation, carSeat, carSystem,carPrice]);

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search by status */}
          <FormRowSelect
            labelText="location"
            name="carLocation"
            list={["all", ...carLocationOptions]}
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText="seat"
            name="carSeat"
            list={["all", ...carSeatOptions]}
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText="System"
            name="carSystem"
            list={["all", ...carSystemOptions]}
            handleChange={handleSearch}
          />
          {/* search position */}
          <FormRowSelect
            labelText="Price"
            name="carPrice"
            list={["all", ...carPriceOptions]}
            handleChange={handleSearch}
          />
          <button className="btn btn-block btn-danger">clear filters</button>
        </div>
      </form>
    </Wrapper>
  );
}

export default SearchContainer;

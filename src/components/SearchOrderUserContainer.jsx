import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/SearchContainer";
import { useAppContext } from "../context/appContext";

function SearchOrderUserContainer() {
  const { user_orders, search, handleSearch , setFilteredOrder , clearFilter} = useAppContext();

  useEffect(() => {
    if (search.length !== 0) {
        setFilteredOrder(
            user_orders.filter(
          (item) =>
            item.car.car_id.toLowerCase().includes(search.toLowerCase()) ||
            item.car.location.toLowerCase().includes(search.toLowerCase()) ||
            item.car.model.toLowerCase().includes(search.toLowerCase()) ||
            item.car.brand.toLowerCase().includes(search.toLowerCase()) ||
            item.status.toLowerCase().includes(search.toLowerCase())||
            item.totalPrice.toString().includes(search)
        )
      );
    }
    if (search.length === 0 || search === null) {
        setFilteredOrder(null);
    }
  }, [search]);

  return (
    <Wrapper>
      <div className="form">
        <h4>search Order</h4>
        <div className="form-center">
          {/* search by status */}
          <div className="form-row">
            <label htmlFor="search" className="form-label">
              search your order 
            </label>
            <input
              type="text"
              value={search}
              name="search"
              onChange={(event) => {
                handleSearch(event);
              }}
              className="form-input"
            ></input>
          </div>

          <button className="btn btn-block btn-danger" onClick={()=>{
            clearFilter();
          }}>clear filters</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default SearchOrderUserContainer;

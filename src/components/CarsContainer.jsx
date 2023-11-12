import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/CarsContainer";
import Car from "./Car";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";

function CarsContainer() {
  const {
    cars,
    totalCars,
    getCars,
    isLoading,
  } = useAppContext();
  useEffect(() => {
    
  }, []);




  if (isLoading) {
    return <Loading center />;
  }

  if (cars && cars.length === 0) {
    return (
      <Wrapper>
        <h5>No cars to display...</h5>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5 style={{ fontSize: "15px" }}>{`${totalCars} Car Found`}</h5>
      <div className="jobs">
        {cars.map((item,index) => {
          return (
            <Car
              key={index}
              id={item._id}
              model={item.model}
              brand={item.brand}
              seat={item.seat}
              location={item.location}
              price={item.price}
              system={item.system}
              image={item.image}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

export default CarsContainer;

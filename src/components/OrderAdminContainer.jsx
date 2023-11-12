import React from "react";
import Wrapper from "../assets/wrappers/OrderUserContainer";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import OrderAdmin from "./OrderAdmin";

function OrderAdminContainer() {
  const { isLoading, orders, filteredOrder } = useAppContext();

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <Wrapper>
      <h5 style={{ fontSize: "15px" }}></h5>
      <div className="jobs">
        {
        filteredOrder ? filteredOrder.map((item,index)=>{
          return (
            <OrderAdmin
              key={index}
              dateStart={item.date_start}
              dateReturn={item.date_return}
              days={item.days}
              totalPrice={item.totalPrice}
              img={item.car.image}
              location={item.car.location}
              brand={item.car.brand}
              model={item.car.model}
              car_id={item.car.car_id}
              status={item.status}
              order_id={item._id}
              phoneNumber={item.user.phoneNumber}
              driver={`${item.user.firstname} ${item.user.lastname}`}
            />
          );
        })
        :orders.map((item,index)=>{
          return (
            <OrderAdmin
              key={index}
              dateStart={item.date_start}
              dateReturn={item.date_return}
              days={item.days}
              totalPrice={item.totalPrice}
              img={item.car.image}
              location={item.car.location}
              brand={item.car.brand}
              model={item.car.model}
              car_id={item.car.car_id}
              status={item.status}
              order_id={item._id}
              phoneNumber={item.user.phoneNumber}
              driver={`${item.user.firstname} ${item.user.lastname}`}
            />
          );
        })
      }
      </div>
    </Wrapper>
  );
}

export default OrderAdminContainer;

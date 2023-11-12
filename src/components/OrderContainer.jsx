import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/OrderContainer";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Order from "./Order";

function OrderContainer() {
  const { isLoading, orders , carSelected } = useAppContext();

  if (isLoading) {
    return <Loading center />;
  }

  useEffect(()=>{
    
  },[])
  
  return (
    <Wrapper>
      <h5 style={{ fontSize: "15px" }}></h5>
      <div className="jobs">
        {orders.map((item, index) => {
          if(item.car._id === carSelected._id){
            return (
              <Order
                key={index}
                dateStart={item.date_start}
                dateReturn={item.date_return}
                days={item.days}
                totalPrice={item.totalPrice}
                driver={`${item.user.firstname} ${item.user.lastname}`}
                status={item.status}
              />
            );
          }
        })}
      </div>
    </Wrapper>
  );
}

export default OrderContainer;

import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { OrderUserContainer, SearchOrderUserContainer } from "../../components";

function Order() {
  const { getUserOrder, user_orders } = useAppContext();

  useEffect(() => {
    getUserOrder();
  }, []);

  return (
    <>
      <SearchOrderUserContainer/>
      {user_orders.length === 0 && "You don't have any orders!"}
      <OrderUserContainer />
    </>
  );
}

export default Order;

import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { OrderAdminContainer, SearchOrderContainer } from "../../components";

function OrderAdmin() {

    const { getOrders , orders} = useAppContext()

  useEffect(() => {
    getOrders()
  }, []);

  return (
    <>
      <SearchOrderContainer/>
      {orders.length === 0 && "You don't have any orders!"}
      <OrderAdminContainer />
    </>
  );
}

export default OrderAdmin;

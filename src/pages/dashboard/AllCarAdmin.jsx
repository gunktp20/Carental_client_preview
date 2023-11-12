import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { InsertCarForm, CarsContainer } from "../../components";

function AllCarAdmin() {
  const { getCars } = useAppContext();
  useEffect(() => {
    getCars();
  }, []);
  return (
    <>
      <InsertCarForm />
      <CarsContainer />
    </>
  );
}

export default AllCarAdmin;

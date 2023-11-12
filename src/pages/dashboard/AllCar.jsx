import { useEffect } from "react";
import { CarsContainer, SearchContainer, RentCarForm , OrderContainer} from "../../components";
import { useAppContext } from "../../context/appContext";

const AllCar = () => {
  const {
    carSelected,
  } = useAppContext();



  if (carSelected) {
    return (
      <>
        <RentCarForm />
        <OrderContainer />
      </>
    );
  } else {
    return (
      <>
        <SearchContainer />
        <CarsContainer />
      </>
    );
  }
};

export default AllCar;

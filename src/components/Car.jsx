import Wrapper from "../assets/wrappers/Car";
import CarInfo from "./CarInfo";
import { BiSolidCog } from "react-icons/bi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Swal from "sweetalert2";

const Car = ({ id, image, model, brand, seat, location, price, system }) => {
  const { setRentCar,user,deleteCarById,getCarById } = useAppContext();
  const handleDelete = (id) =>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-confirm ",
        cancelButton: "btn btn-cancel",
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      text: "You want to delete this car!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCarById(id);
        return;
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        return;
      }
    });
  }

  return (
    <Wrapper>
      <header>
        <img className="main-icon" src={image}></img>
        <div className="info">
          <h5>{brand}</h5>
          <p>{model}</p>
        </div>
      </header>
      <div className="content">
        {/* content center later */}
        <div className="content-center">
          <CarInfo icon={<FaLocationArrow />} text={`${location}`} />
          <CarInfo icon={<BiSolidCog />} text={system} />
          <CarInfo icon={<BsFillPersonCheckFill />} text={`${seat} seater`} />
          {/* <div className={`status pending`}>status</div> */}
        </div>
        <footer>
          <div className="rent-section">
            {/* <Link to="/add-job" className="btn edit-btn">
              Edit
            </Link> */}
            {/* <h1 className="price">{`${price} บาท`}</h1>
            <button type="button" className="btn rent-btn">
              Rent Now
            </button> */}
            <p className="price">{price} / Day</p>
            {(user && user.role === "admin") ? (
              <>
                <button
                className="btn btn-edit"
                onClick={() => {
                  getCarById(id)
                }}
              >
                Edit
              </button>
              <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(id)
              }}
            >
              Delete 
            </button>
              </>
            ) : (
              <button
                className="btn rent-btn"
                onClick={() => {
                  setRentCar(id);
                }}
              >
                Rent Now
              </button>
            )}
            
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Car;

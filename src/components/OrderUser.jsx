import Wrapper from "../assets/wrappers/OrderUser";
import { BsFlagFill, BsArrowReturnRight } from "react-icons/bs";
import { AiTwotoneCalendar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import OrderInfo from "./OrderInfo";
import { BiSolidTime } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { useAppContext } from "../context/appContext";
import Swal from "sweetalert2";

const OrderUser = ({
  dateStart,
  dateReturn,
  totalPrice,
  days,
  location,
  img,
  brand,
  model,
  car_id,
  status,
  order_id,
}) => {
  const { deleteOrderById } = useAppContext();

  const handleDelete = (id) =>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-confirm ",
        cancelButton: "btn btn-cancel",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons.fire({
      text: "You want to delete this order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOrderById(id);
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
        <img className="main-icon" src={img}></img>
        <div className="info">
          <h5>{brand}</h5>
          <div>
            <p id="car_id">{car_id}</p>
          </div>
          <p>{model}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <OrderInfo
            icon={<BsArrowReturnRight />}
            text={`Start ${dateStart}`}
          />
          <OrderInfo icon={<BsFlagFill />} text={`Return ${dateReturn}`} />
          <OrderInfo icon={<AiTwotoneCalendar />} text={`${days} Day`} />
          <OrderInfo icon={<ImLocation />} text={`${location}`} />
          <div className={`status ${status}`}>
            {status === "Approved" ? <AiOutlineCheck /> : <BiSolidTime />}
            {status}
          </div>
        </div>
        <footer>
          <div className="rent-section">
            <p className="price">$ {totalPrice}</p>
            {status === "Approved" ? (
              <></>
            ) : (
              <button
                className="btn btn-danger cancel"
                onClick={() => {
                  handleDelete(order_id);
                }}
              >
                Cancel order
              </button>
            )}
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default OrderUser;

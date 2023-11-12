import Wrapper from "../assets/wrappers/OrderAdmin";
import { BsFlagFill, BsArrowReturnRight } from "react-icons/bs";
import { AiTwotoneCalendar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import OrderInfo from "./OrderInfo";
import { BiSolidTime } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { useAppContext } from "../context/appContext";
import { BsTelephoneFill } from "react-icons/bs"
import Swal from "sweetalert2";

const OrderAdmin = ({
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
  driver,
  phoneNumber
}) => {
  const { deleteOrderByAdmin, approveOrderById } = useAppContext();
  const handleDelete = (id) =>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-confirm ",
        cancelButton: "btn btn-cancel",
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      text: "You want to reject this order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, reject it!",
      cancelButtonText: "No, cancel",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOrderByAdmin(id);
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
          <OrderInfo icon={<BsFillPersonFill />} text={`${driver}`} />
          <OrderInfo icon={<BsTelephoneFill />} text={`${phoneNumber}`} />
        </div>
        <footer>
          <div className="rent-section">
            <p className="price">$ {totalPrice}</p>
            <div className="options">
              <div className={`status ${status}`}>
                {status === "Approved" ? <AiOutlineCheck /> : <BiSolidTime />}
                {status}
              </div>
              <button
                className="btn btn-success reject"
                onClick={() => {
                  handleDelete(order_id);
                }}
              >
                Reject
              </button>
              {status === "Approved" ? (
                <></>
              ) : (
                <button
                  className="btn btn-success approve"
                  onClick={() => {
                    approveOrderById(order_id);
                  }}
                >
                  Approve
                </button>
              )}
            </div>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default OrderAdmin;


import Wrapper from "../assets/wrappers/Car";
import { BsFlagFill, BsArrowReturnRight  } from "react-icons/bs";
import { AiTwotoneCalendar } from "react-icons/ai"
import { IoMdPerson } from "react-icons/io"
import OrderInfo from "./OrderInfo";
import { AiOutlineCheck } from "react-icons/ai"
import { BiSolidTime } from "react-icons/bi"

const Order = ({ dateStart, dateReturn,totalPrice,days,driver,status}) => {
  return (
    <Wrapper>
      <div className="content">
        <div className="content-center">
          <OrderInfo icon={<BsArrowReturnRight/>} text={`Start ${dateStart}`} />
          <OrderInfo icon={<BsFlagFill />} text={`Return ${dateReturn}`} />
          <OrderInfo icon={<AiTwotoneCalendar />} text={`${days} Day`}/>
          <OrderInfo icon={<IoMdPerson />} text={`${driver}`}/>
          {/* <div className={`status ${status}`}>
            {status === "Approved" ? <AiOutlineCheck /> : <BiSolidTime />}
            {status}
          </div> */}
        </div>
        <footer>
          <div className="rent-section">
            <p className="price">$ {totalPrice}</p>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Order;

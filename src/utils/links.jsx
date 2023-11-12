import { FaCarSide  } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs"

const links = [
  {
    id: 1,
    text: "all cars",
    path: "/",
    icon: <FaCarSide />,
  },
  {
    id: 2,
    text: 'your order',
    path: "/order",
    icon: <BsCheck2Square />,
  },

];

export default links;

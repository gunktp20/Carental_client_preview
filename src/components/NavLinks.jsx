

import { NavLink } from "react-router-dom";

import { FaCarSide  } from "react-icons/fa";
import { BsFillClipboardCheckFill , BsCheck2Square } from "react-icons/bs"
import { useAppContext } from "../context/appContext";

const NavLinks = ({toggleSidebar}) => {

  const { user,clearFilter } = useAppContext();
  return (
    <div className="nav-links">
          <NavLink
            to="/"
            key={1}
            onClick={()=>{
              // toggleSidebar().then(clearFilter())
              clearFilter()
              // navigate("/");
            }}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{<FaCarSide/>}</span>
            {user.role === "admin" ? "Manage Car":"All Car"}
          </NavLink>
          <NavLink
            to="/order"
            key={2}
            onClick={()=>{
              // navigate("/order");
              clearFilter()
              // toggleSidebar().then(clearFilter())
            }}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{user.role === "admin"? <BsFillClipboardCheckFill/>:<BsCheck2Square/>}</span>
              {user.role === "admin" ? "All order":"Your Order"}
          </NavLink>
    </div>
  );
};

export default NavLinks;

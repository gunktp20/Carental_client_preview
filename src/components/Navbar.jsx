import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle } from "react-icons/fa";
import { useAppContext } from "../context/appContext";
import Text from "./Text";
import { useNavigate } from "react-router-dom";
import { FaTools } from "react-icons/fa";
const Navbar = () => {
  const { toggleSidebar, user } = useAppContext();

  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Text />
          <h3 className="logo-text">
            {user.role === "admin" ? "admin" : "dashboard"}
          </h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => {
              navigate("/profile");
            }}
          >
            {user.role === "admin" ? <FaTools /> : <FaUserCircle/>}

            {user.role === "admin" ? "Admin" : user.firstname}
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

import { useAppContext } from "../context/appContext";
import SharedLayout from "./dashboard/SharedLayout";

const ProtectedRoleRoute = () => {
  const { user } = useAppContext();
  if (user.role === "user") {
    return <SharedLayout/>
  }
  if(user.role === "admin"){
    return <div>admin</div>
  }
  return children;
};

export default ProtectedRoleRoute;
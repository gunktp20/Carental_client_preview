import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppContext } from "./context/appContext";
import {
  Landing,
  ProtectedRoute,
  Register,
  SharedLayout,
  AllCar,
  Order,
  Profile,
  AllCarAdmin,
  OrderAdmin,
} from "./pages";

function App() {
  const { user } = useAppContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              user && user.role === "admin" ? <AllCarAdmin /> : <AllCar />
            }
          />
          <Route
            path="/order"
            element={user && user.role === "admin" ? <OrderAdmin /> : <Order />}
          />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

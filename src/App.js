import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./customer/components/navigation/NavBar";
import Homepage from "./customer/pages/homepage/Homepage";
import RestaurantDetails from "./customer/pages/restaurantdetails/RestaurantDetails";
import CartPage from "./customer/pages/cartpage/CartPage";
import ProfilPage from "./customer/pages/profilepage/ProfilPage";
import Signup from "./customer/pages/auth/Signup";
import Signin from "./customer/pages/auth/Signin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requserAction } from "./redux/auth/authAction";

function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();





  useEffect(() => {
    if (token) {
      dispatch(requserAction(token));
    }
  }, [dispatch, token]);

  const { requser} = useSelector((store) => store.auth);
  

  return (
    <div className="App">
     
      <NavBar />
        {requser ? (
          <Routes>
            <Route path="/signup" element={<Navigate to="/"/>}  />
            <Route path="/signin" element={<Navigate to="/"/>}  />
            <Route path="/" element={<Homepage />} />
            <Route path="restaurant/:name/:cuisineType/:id" element={<RestaurantDetails />} />
            <Route path="cart/:rid" element={<CartPage />} />
            <Route path="profile/*" element={<ProfilPage />} />
           
          </Routes>
        ) : (
          <Routes>
           <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              {/* Redirect all other routes to the signin page */}
              <Route path="*" element={<Navigate to="/signin" />} />
          </Routes>
        )}
     
    </div>
  );
}

export default App;

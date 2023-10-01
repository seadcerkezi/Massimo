import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Products from "./Pages/Products/Products";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import Favs from "./Pages/Favs/Favs";
import Login from "./Pages/Login/Login";
import Settings from "./Pages/Settings/Settings";
import HomeLayout from "./Components/HomeLayout/HomeLayout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Users from "./Components/Users/Users";
import SettingsProducts from "./Components/SettingsProducts/SettingsProducts";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import AdminOrders from "./Pages/AdminOrders/AdminOrders";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route element={<HomeLayout />}>
            <Route index element={<Navigate replace to="/Massimo" />} />
            <Route path="/Massimo" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<SingleProduct />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/users" element={<Users />} />
            <Route path="/settings/products" element={<SettingsProducts />} />
            <Route path="/settings/adminOrders" element={<AdminOrders />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

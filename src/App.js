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

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route index element={<Navigate replace to="/Massimo" />} />
          <Route path="/Massimo" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/:category" element={<Products />} />
          <Route path="/:category/:id" element={<SingleProduct />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

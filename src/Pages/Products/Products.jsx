import React from "react";
import { pizzas, burgers, pastas } from "../../data";
import Footer from "../../Components/Footer/Footer";
import "./products.scss";
import { NavLink, useParams } from "react-router-dom";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomId } from "../../utils/generateRandomId";
import { addToFav, removeFromFav } from "../../redux/card/cardActions";
import { message } from "antd";

const Pizzas = () => {
  const { category } = useParams();
  const favourites = useSelector((state) => state.card.favItems);
  const dispatch = useDispatch();
  console.log("Favss", { favourites });
  const newCategory =
    category === "pizzas" ? pizzas : category === "burgers" ? burgers : pastas;

  const checkFav = (item) => {
    const exist = favourites.find((fav) => fav.id === item.id);

    if (exist) {
      return <HeartFilled />;
    } else {
      return <HeartOutlined />;
    }
  };

  const handleClickFav = (item) => {
    const exist = favourites.find((fav) => fav.id === item.id);

    if (exist) {
      message.error("Removed from Favourite");
      return dispatch(removeFromFav(item.id));
    } else {
      message.success("Added to Favourite");
      return dispatch(addToFav(item));
    }
  };

  console.log({ randomID: generateRandomId() });

  return (
    <>
      <div className="main-pizza">
        {newCategory.map((item) => (
          <div
            className={`pizza-items ${
              item.id % 2 === 1 ? "red-background" : ""
            }`}
          >
            <NavLink to={`/${category}/${item.id}`}>
              <img src={item.img} alt="Pizza Img" />
            </NavLink>
            <button className="fav-icon" onClick={() => handleClickFav(item)}>
              {checkFav(item)}
            </button>
            <div className="item-text">
              <p>{item.title}</p>
              <p className="price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer className="footer" />
    </>
  );
};

export default Pizzas;

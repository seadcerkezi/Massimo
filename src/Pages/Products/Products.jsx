import React from "react";
import Footer from "../../Components/Footer/Footer";
import "./products.scss";
import { NavLink, useParams } from "react-router-dom";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../../redux/user/userActions";
import { message } from "antd";

const Pizzas = () => {
  const { category } = useParams();
  const allUsers = useSelector((state) => state.user.allUsers);
  const logedUserId = useSelector((state) => state.user.logedUserId);
  const favourites = logedUserId
    ? allUsers.find((user) => user.id === logedUserId).favourite
    : [];
  const products = useSelector((state) => state.card.products);
  const dispatch = useDispatch();

  // products.filter((product) => product.category === category)

  const nnewCategory = products.filter(
    (product) => product.category === category
  );

  // const newCategory =
  //   category === "pizzas" ? pizzas : category === "burgers" ? burgers : pastas;

  const checkFav = (item) => {
    const exist = favourites.find((fav) => fav.id === item.id);

    if (exist) {
      return <HeartFilled />;
    } else {
      return <HeartOutlined />;
    }
  };

  const handleClickFav = (item) => {
    if (!logedUserId) return message.error("Log in to add to favourite");
    const exist = favourites.find((fav) => fav.id === item.id);

    if (exist) {
      message.error("Removed from Favourite");
      return dispatch(removeFromFav(item.id, logedUserId));
    } else {
      message.success("Added to Favourite");
      return dispatch(addToFav(item, logedUserId));
    }
  };

  return (
    <>
      <div className="main-pizza">
        {nnewCategory.map((item) => (
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
              {item.discount > 0 ? (
                <p className="discount">
                  <span
                    style={{ color: "gray", textDecoration: "line-through" }}
                  >
                    ${item.price}
                  </span>{" "}
                  $
                  {(item.price - (item.price * item.discount) / 100).toFixed(2)}
                </p>
              ) : (
                <p className="price">${item.price}</p>
              )}
              {/* <p className="price">
                $
                {item.discount > 0
                  ? (item.price * item.discount) / 100
                  : item.price}
              </p> */}
            </div>
          </div>
        ))}
      </div>
      <Footer className="footer" />
    </>
  );
};

export default Pizzas;

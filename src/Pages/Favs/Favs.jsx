import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./fav.scss";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom/dist";
import { removeFromFav } from "../../redux/user/userActions";
import { message } from "antd";

const Favs = () => {
  const allUsers = useSelector((state) => state.user.allUsers);
  const logedUserId = useSelector((state) => state.user.logedUserId);
  const favItems = logedUserId
    ? allUsers.find((user) => user.id === logedUserId).favourite
    : [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="fav-container">
      <h2 className="fav-title">Favourites</h2>
      {favItems.length === 0 ? (
        <h2 className="empty-message">No Favorites Yet</h2>
      ) : null}
      {favItems.map((item) => (
        <div className="cart">
          <img className="grid-item" src={item.img} alt="Item Image" />
          <div className="grid-item">
            <h4 onClick={() => navigate(`/${item.category}/${item.id}`)}>
              {item.title}
            </h4>
          </div>

          <button className="grid-item">
            <DeleteOutlined
              onClick={() => {
                dispatch(removeFromFav(item.id, logedUserId));
                message.error("Removed from Favorite");
              }}
              style={{ fontSize: "20px", cursor: "pointer" }}
            />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favs;

import React from "react";
import "./cart.scss";
import Footer from "../../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToOrders, deleteItem } from "../../redux/card/cardActions";
import { message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { generateRandomId } from "../../utils/generateRandomId";
import { generateNewDate } from "../../utils/generateNewDate";

const Cart = () => {
  const cartItems = useSelector((state) => state.card.cardItems);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price + item.options.additionalPrice) * item.qty;
  }, 0);

  const productPrice = (item) => {
    return ((item.price + item.options.additionalPrice) * item.qty).toFixed(2);
  };

  const findProducts = () => {
    let array = [];

    cartItems.forEach((element) => {
      const exist = array.find((arr) => arr.id === element.id);
      if (!exist) {
        array.push({
          id: element.id,
          title: element.title,
          qty: 1,
        });
      } else {
        array = array.map((item) =>
          item.id === element.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    });

    const formattedStrings = array.map((item) => `${item.title}(${item.qty})`);
    const resultString = formattedStrings.join(", ");

    return resultString;
  };

  const handleCheckOut = () => {
    const newOrder = {
      orderId: generateRandomId(),
      date: generateNewDate(),
      price: totalPrice.toFixed(2),
      products: findProducts(),
      status: "Delivered",
    };
    dispatch(addToOrders(newOrder));
  };

  return (
    <>
      <div className="main-cart">
        <div className="left-cart">
          {cartItems.length === 0 ? (
            <h2 className="empty-message">No Added Cart Yet</h2>
          ) : null}
          {cartItems.map((item) => (
            <div className="cart">
              <img className="grid-item" src={item.img} alt="Item Image" />
              <div className="grid-item">
                <h4 className="item-title">{item.title}</h4>
                <p>{item.options.title}</p>
              </div>
              <h6 className="grid-item">${productPrice(item)}</h6>
              <button
                className="grid-item"
                onClick={() => {
                  dispatch(
                    deleteItem({
                      id: item.id,
                      option: item.options.title,
                    })
                  );
                  message.error("Deleted from Card");
                }}
              >
                <DeleteOutlined
                  style={{ fontSize: "20px", cursor: "pointer" }}
                />
              </button>
            </div>
          ))}
        </div>
        <div className="right-cart">
          <div className="infos">
            <div className="infos-row">
              <span>Subtotal ({cartItems.length} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="infos-row">
              <span>Service Cost ({cartItems.length} items)</span>
              <span>$0.00</span>
            </div>
            <div className="infos-row">
              <span>Delivery Cost</span>
              <span className="green-color">FREE!</span>
            </div>
          </div>
          <div className="total">
            <div className="total-price">
              <span>TOTAL(INCL. VAT)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button
              disabled={cartItems.length === 0}
              onClick={() => handleCheckOut()}
            >
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

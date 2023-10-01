import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./singleProduct.scss";
import { Segmented, message } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/user/userActions";

const SinglePage = () => {
  const { id } = useParams();

  const products = useSelector((state) => state.card.products);
  const allUsers = useSelector((state) => state.user.allUsers);
  const logedUserId = useSelector((state) => state.user.logedUserId);

  const [value, setValue] = useState("Small");
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item.id === id);

  const dispatch = useDispatch();

  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const addToCart = () => {
    if (!logedUserId) return message.error("Log in to add to cart");
    const updatedProduct = {
      ...product,
      qty: quantity,
      options: product.options.find((option) => option.title === value),
    };

    dispatch(add(updatedProduct, logedUserId));
    message.success("Added to Cart");
  };

  return (
    <div className="main-product">
      <img src={product.img} alt="" />
      <div className="product-text">
        <h4>{product.title}</h4>
        <p>{product.desc}</p>
        {product.discount > 0 ? (
          <h6>
            <span
              style={{
                color: "gray",
                textDecoration: "line-through",
                paddingRight: "5px",
              }}
            >
              ${product.price}
            </span>
            $
            {(product.price - (product.price * product.discount) / 100).toFixed(
              2
            )}
          </h6>
        ) : (
          <h6>${product.price}</h6>
        )}

        <div className="option-qty">
          <Segmented
            block
            className="options"
            options={["Small", "Medium", "Large"]}
            value={value}
            onChange={setValue}
          />
          <div className="main-quantity">
            <div className="quantity">
              <span>Quantity</span>
              <div className="left-right">
                <button
                  className="increase-button"
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                >
                  <LeftOutlined style={{ color: "#cd2f2f" }} />
                </button>
                <span>{quantity}</span>
                <button className="increase-button" onClick={increaseQuantity}>
                  <RightOutlined style={{ color: "#cd2f2f" }} />
                </button>
              </div>
            </div>
            <button className="button" onClick={() => addToCart()}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

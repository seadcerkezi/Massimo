import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { pizzas, burgers, pastas } from "../../data";
import "./singleProduct.scss";
import { Segmented, message } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Footer from "../../Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { add } from "../../redux/card/cardActions";

const SinglePage = () => {
  const [value, setValue] = useState("Medium");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { category, id } = useParams();
  const newCategory =
    category === "pizzas" ? pizzas : category === "burgers" ? burgers : pastas;
  const product = newCategory.find((item) => item.id === id);

  const decreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  };
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const addToCart = () => {
    const updatedProduct = {
      ...product,
      qty: quantity,
      options: product.options.find((option) => option.title === value),
    };

    dispatch(add(updatedProduct));
    message.success("Added to Cart");
  };

  console.log({ value });
  console.log({ quantity });

  return (
    <div className="main-product">
      <img src={product.img} alt="" />
      <div className="product-text">
        <h4>{product.title}</h4>
        <p>{product.desc}</p>
        <h6>${product.price}</h6>

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

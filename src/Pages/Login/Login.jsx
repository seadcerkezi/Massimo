import React, { useState } from "react";
import loginImage from "../../OfferImages/loginBg.png";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/user/userActions";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const allUsers = useSelector((state) => state.user.allUsers);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (value, type) => {
    setLoginData((prev) => ({ ...prev, [type]: value }));
  };

  const handleLogin = () => {
    const user = allUsers.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );

    if (user) {
      dispatch(logIn(user.id));
      navigate("/Massimo");
    } else {
      message.error("User doesnt exists");
    }
  };

  return (
    <div className="login">
      <img src={loginImage} />
      <div className="login-div">
        <h4>Welcome</h4>
        <p>Log into your account or create a new one using social buttons</p>
        <div className="input-div">
          <Input
            placeholder="Email"
            value={loginData.email}
            onChange={(e) => handleChange(e.target.value, "email")}
          />
          <Input.Password
            placeholder="input password"
            type="password"
            value={loginData.password}
            onChange={(e) => handleChange(e.target.value, "password")}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
        <Button onClick={handleLogin} type="primary">
          Log In
        </Button>
        <NavLink to={"/"}>Back To Home</NavLink>
      </div>
    </div>
  );
};

export default Login;

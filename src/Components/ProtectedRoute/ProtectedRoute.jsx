import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const allUsers = useSelector((state) => state.user.allUsers);
  const logedUserId = useSelector((state) => state.user.logedUserId);
  const user = allUsers.find((user) => user.id === logedUserId);

  const navigate = useNavigate();

  useEffect(() => {
    if (user.hasOwnProperty("role") && user.role === "admin") {
      // If the user is an admin, allow access to the children
      return;
    } else {
      // If the user is not an admin, navigate away
      navigate("/");
    }
  }, [user, navigate]);

  return children;
};

export default ProtectedRoute;

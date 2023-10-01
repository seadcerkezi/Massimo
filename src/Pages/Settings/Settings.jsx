import React from "react";
import { useSelector } from "react-redux";
import "./settings.scss";

const Settings = () => {
  const allUsers = useSelector((state) => state.user.allUsers);
  const logedUserId = useSelector((state) => state.user.logedUserId);
  const user = allUsers.find((user) => user.id === logedUserId);
  console.log({ user });
  return (
    <div className="user-info">
      <h2>User Information</h2>
      <div className="user-details">
        <label>Name</label>
        <input disabled={true} type="text" defaultValue={user.name} />
      </div>
      <div className="user-details">
        <label>Email</label>
        <input disabled={true} type="text" defaultValue={user.email} />
      </div>
      <div className="user-details">
        <label>Role</label>
        <input disabled={true} type="text" defaultValue={user.role} />
      </div>
    </div>
  );
};

export default Settings;

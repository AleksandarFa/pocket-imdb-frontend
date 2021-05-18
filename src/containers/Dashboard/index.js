import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Dashboard</h2>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

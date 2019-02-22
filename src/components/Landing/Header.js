import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">
        <h2>Welcome to FlashNotes</h2>
      </Link>
      <Link to="/demo">
        <p>Demo</p>
      </Link>
      <Link to="/login">
        <p>Login</p>
      </Link>
      <Link to="/dashboard">
        <p>Dashboard</p>
      </Link>
    </div>
  );
};

export default Header;

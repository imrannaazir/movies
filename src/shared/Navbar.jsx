import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar  bg-base-200">
      <div class="navbar-start">
        <Link to="/" class="btn btn-ghost normal-case text-xl">
          Aweteck Movies
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex"></div>
      <div class="navbar-end flex gap-4">
        <Link to="/login" class="btn btn-outline ">
          Login
        </Link>
        <Link to="/register" class="btn btn-outline ">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

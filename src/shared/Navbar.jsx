import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar  bg-base-200">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Aweteck Movies
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end flex gap-4">
        {user ? (
          <button onClick={() => signOut(auth)} className="btn btn-primary ">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline ">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline ">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

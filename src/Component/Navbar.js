import { purple } from "@mui/material/colors";
import { fontFamily } from "@mui/system";
import React from "react";
import NavbarIcon from "../images/assignment.png"
export const Navbar = () => {
  return (
    <>
       <nav style={{ backgroundColor: "black" }} className="navbar navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={NavbarIcon}
              alt=""
              width="60"
              height="44"
              className="d-inline-block align-text-top"
            />
           <h3><span style={{color:"white",fontFamily:"cursive"}}>vizierE-task</span> </h3>
          </a>
          <form className="d-flex">
            <button
              style={{ backgroundColor: "purple", color: "white" }}
              className="btn"
              type="button"
            >
              Login/Signup
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

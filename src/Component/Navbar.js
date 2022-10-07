// import { purple } from "@mui/material/colors";
// import { fontFamily } from "@mui/system";
// import { alignProperty } from "@mui/material/styles/cssUtils";
import React from "react";
import NavbarIcon from "../images/assignment.png";
export const Navbar = () => {
  return (
    <>
      <div className="sticky mx-auto">
        <nav
          style={{  backgroundImage: "linear-gradient(to right, black , #770737, black)"}}
          className="navbar navbar-dark mx-auto"
        >
          <div className="container-fluid">
            <a className="navbar-brand" id="sticky" href="/">
              <img
                src={NavbarIcon}
                alt=""
                width="60"
                height="44"
                className="d-inline-block align-text-top"
              />
              <h3 className="d-inline-block align-text-top" id="sticky">
                <span style={{ color: "white", fontFamily: "cursive",textAlign:"justify"}}>
                  vizier-E-task
                </span>{" "}
              </h3>
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
      </div>
    </>
  );
};
export default Navbar;

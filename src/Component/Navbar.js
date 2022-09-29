import React from "react";
import AssignmentIcon from '@mui/icons-material/Assignment';

export const Navbar = () => {
  return (
    <>
       <nav style={{ backgroundColor: "peach" }} className="navbar navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {/* <img
              src={NavbarIcon}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            /> */}
            <AssignmentIcon/>
            Taskify
          </a>
          <form className="d-flex">
            <button
              style={{ backgroundColor: "black", color: "white" }}
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

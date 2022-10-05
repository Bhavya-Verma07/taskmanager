import React from "react";
import Post from "../Post";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./index.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 200,
  bgcolor: "THISTLE",
  border: "2px solid thistle",
  borderRadius: "10px 10px 10px 10px",
  boxShadow: 24,
  p: 4,
};

export const Feed = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className=" mt-10">
        <Button onClick={handleOpen}>
          <textarea
            disabled
            placeholder="Create a Post..."
            type="text"
            style={{ textAlign: "center", color: "white" }}
          ></textarea>
        </Button>
      </div>

      <Post />
      <Post />
      <Modal
        className="formodal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <textarea
            className="Postbox"
            placeholder="write your post here..."
            style={{ padding: "10px" }}
          ></textarea>
          <div className="row">
            <div className="col-6" style={{ marginLeft: "0px" }}>
              <input type="file"></input>
            </div>
            <div className="col-6">
              <button
                className="submitbutton"
                style={{ backgroundColor: "#A95C68" }}
              >
                Submit
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};
export default Feed;

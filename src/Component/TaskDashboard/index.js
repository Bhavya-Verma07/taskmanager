import React from "react";
import "./index.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FFE5B4',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:"10px",
  borderWidth:"0px"
};

export const TaskDashboard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
    <div className="fordashboard mx-auto">
      <div className="row mx-auto" style={{ width: "900px" }}>
        <div className="col-4" id="dashboardDiv1">
          <div className="headings">Tasks assigned</div>
          <div className="assigned my-3">
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 1</div>
              <div className="col-4" > <Button onClick={handleOpen} id="buttonstyle"><AddBoxIcon/></Button></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 2</div>
              <div className="col-4" > <Button onClick={handleOpen} id="buttonstyle"><AddBoxIcon/></Button></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 3</div>
              <div className="col-4" > <Button onClick={handleOpen} id="buttonstyle"><AddBoxIcon/></Button></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 4</div>
              <div className="col-4" > <Button onClick={handleOpen} id="buttonstyle"><AddBoxIcon/></Button></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 5</div>
              <div className="col-4" > <Button onClick={handleOpen} id="buttonstyle"><AddBoxIcon/></Button></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 6</div>
              <div className="col-4" > <Button onClick={handleOpen} id="buttonstyle"><AddBoxIcon/></Button></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 7</div>
              <div className="col-4" > <Button onClick={handleOpen} id="buttonstyle"><AddBoxIcon/></Button></div>
            </div>
          </div>
        </div>
        <div className="col-4" id="dashboardDiv2">
          <div className="headings">Tasks in Progress</div>
          <div className="assigned my-3">
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 8</div>
              <div className="col-4" style={{textAlign:"right"}}><EditIcon/></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 9</div>
              <div className="col-4" style={{textAlign:"right", curser:"pointer"}}><EditIcon/></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 10</div>
              <div className="col-4" style={{textAlign:"right"}}><EditIcon/></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 11</div>
              <div className="col-4" style={{textAlign:"right"}}><EditIcon/></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 12</div>
              <div className="col-4" style={{textAlign:"right"}}><EditIcon/></div>
            </div>
          </div>
        </div>
        <div className="col-4" id="dashboardDiv3">
          <div className="headings">Completed Tasks</div>
          <div className="assigned my-3">
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 13</div>
              <div className="col-4" style={{textAlign:"right"}}><RestartAltIcon/></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 14</div>
              <div className="col-4" style={{textAlign:"right"}}><RestartAltIcon/></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 15</div>
              <div className="col-4" style={{textAlign:"right"}}><RestartAltIcon/></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 16</div>
              <div className="col-4" style={{textAlign:"right"}}><RestartAltIcon/></div>
            </div>
            <div className="row" id="taskcontents">
              <div className="col-8" style={{textAlign:"left", marginTop:"5px"}}>Task 17</div>
              <div className="col-4" style={{textAlign:"right"}}><RestartAltIcon/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h4>Task Name</h4>
         <textarea className="taskname" placeholder="Task Name here..." style={{width:"90%"}}></textarea>
         <button style={{backgroundColor:"salmon", borderWidth:"1px"}}>Save</button>
        </Box>
      </Modal>
    </>
  );
};

export default TaskDashboard;

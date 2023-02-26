import React, { useEffect, useState } from "react";
import "./index.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import { toast } from "react-toastify";

export const TaskManager = () => {
  const [fisrtColumnWidgets, setFirstcolumnWidgets] = useState([
    { id: 1, widget: "Button", text: "", "border-radius": "" },
    { id: 2, widget: "Textbox", text: "" },
  ]);
  const [secondColumnWidgets, setSecondColumnWidgets] = useState([]);

  const handleSave = async () => {
    const response = await axios.post("/widgets", {
      fisrtColumnWidgets,
      secondColumnWidgets,
    });
    if (response.data.success) {
      return toast.success("Widgets Saved Successfully");
    } else {
      return toast.error("Something went Wrong");
    }
  };

  const getData = async () => {
    const response = await axios.get("/widgets");
    if (response.data.success) {
    const data= response.data.data;
    if(data){
      setFirstcolumnWidgets(data.firstcolumn);
      setSecondColumnWidgets(data.secondcolumn);
    }
    } else {
      return toast.error("Something went Wrong");
    }
  };

  useEffect(()=>{
    getData();
  },[]);



  const handlechange = (e, id, type) => {
    var result = [...secondColumnWidgets];
    result = result.map((x) => {
      if (x.id === id) {
        if (type === "text") x.text = e.target.value;
        else if (type === "radius") {
          x["border-radius"] = e.target.value;
        }
      }
      return x;
    });
    console.log(result);
    setSecondColumnWidgets(result);
  };

  const handledragend = (result) => {
    let draggable = result.draggableId;
    let source = result.source.droppableId;
    let destination = result.destination.droppableId;
    if (!destination) return;
    if (source === destination) return;
    // console.log(result.droppableId);
    // console.log(result.destination.droppableId);
    // console.log(result.source.droppableId);
    if (destination === "secondcolumn") {
      //adding draggable item in secondcolumn array and deleting it  from first column
      if (draggable === "Button") {
        setSecondColumnWidgets((v) => [
          ...v,
          { id: 1, widget: "Button", text: "", "border-radius": "" },
        ]);
      } else if (draggable === "Textbox") {
        setSecondColumnWidgets((v) => [
          ...v,
          { id: 2, widget: "Textbox", text: "" },
        ]);
      }
      setFirstcolumnWidgets((v) => {
        return v.filter((prev) => prev.widget !== draggable);
      });
    }
    if (destination === "firstcolumn") {
      //adding draggable item in firstcolumn array and deleting it  from second column
      if (draggable === "Button") {
        setFirstcolumnWidgets((v) => [
          ...v,
          { id: 1, widget: "Button", text: "", "border-radius": "" },
        ]);
      } else if (draggable === "Textbox") {
        setFirstcolumnWidgets((v) => [
          ...v,
          { id: 2, widget: "Textbox", text: "" },
        ]);
      }
      setSecondColumnWidgets((v) => {
        return v.filter((prev) => prev.widget !== draggable);
      });
    }
  };

  return (
    <>
      <div className="forManager mx-auto">
        <div className="row mx-auto" style={{ width: "900px" }}>
          <DragDropContext onDragEnd={handledragend}>
            <Droppable droppableId="firstcolumn">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="col-4"
                  id="ManagerDiv1"
                >
                  <div className="headings">Widgets</div>

                  <div className="assigned my-3">
                    {fisrtColumnWidgets.map((v, i) => {
                      return (
                        <>
                          <Draggable
                            draggableId={v.widget}
                            key={v.id}
                            index={v.id}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div
                                  className="btn"
                                  style={{
                                    backgroundColor: "  rgb(246, 237, 196)",
                                    textAlign: "center",
                                    marginTop: "5px",
                                    width: "90%",
                                    height: "70px",
                                  }}
                                >
                                  {v.widget}
                                </div>
                              </div>
                            )}
                          </Draggable>
                        </>
                      );
                    })}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <Droppable droppableId="secondcolumn">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="col-4"
                  id="ManagerDiv2"
                >
                  <div className="headings">Tasks inProgress</div>
                  <div className="assigned my-3">
                    {secondColumnWidgets.map((v, i) => {
                      return (
                        <>
                          <Draggable
                            draggableId={v.widget}
                            key={v.id}
                            index={v.id}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div
                                  className="btn"
                                  style={{
                                    backgroundColor: "  rgb(246, 237, 196)",
                                    textAlign: "center",
                                    marginTop: "5px",
                                    width: "90%",
                                    height: "70px",
                                  }}
                                >
                                  {v.widget}
                                </div>
                              </div>
                            )}
                          </Draggable>
                        </>
                      );
                    })}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          <div className="col-4" id="ManagerDiv3">
            <div className="headings">Properties</div>

            <form>
              {secondColumnWidgets.map((v, i) => {
                return (
                  <>
                    {v.widget === "Button" ? (
                      <>
                        <label style={{ alignContent: "flex-start" }}>
                          Botton Text
                        </label>
                        <input
                          value={v.text}
                          onChange={(e) => handlechange(e, v.id, "text")}
                          type="text"
                          placeholder="Enter your Text"
                          label="Button Text"
                          style={{
                            textAlign: "center",
                            marginTop: "5px",
                            height: "45px",
                            width: "98%",
                          }}
                        />
                        <label style={{ alignItems: "flex-start" }}>
                          Botton Radius
                        </label>
                        <input
                          value={v["border-radius"]}
                          onChange={(e) => handlechange(e, v.id, "radius")}
                          type="number"
                          placeholder="Enter Radius%"
                          label="Button Text"
                          style={{
                            textAlign: "center",
                            marginTop: "5px",
                            height: "45px",
                            width: "98%",
                          }}
                        />
                      </>
                    ) : v.widget === "Textbox" ? (
                      <>
                        {" "}
                        <label style={{ alignItems: "flex-start" }}>
                          Text Box
                        </label>
                        <input
                          value={v.text}
                          onChange={(e) => handlechange(e, v.id, "text")}
                          type="text"
                          placeholder="Enter your text"
                          label="Button Text"
                          style={{
                            textAlign: "center",
                            marginTop: "5px",
                            height: "45px",
                            width: "98%",
                          }}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                );
              })}
            </form>
            <buton
              onClick={() => handleSave()}
              type="button"
              style={{
                padding: "5px",
                backgroundColor: "green",
                marginTop: "200px",
                color: "white",
              }}
            >
              Save
            </buton>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManager;

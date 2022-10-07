import React from "react";
import "./index.css";
import { PieChart, Pie,Cell, Legend, Tooltip } from "recharts";

import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const data01 = [
  { name: "Assigned ", value: 7 },
  { name: "In progress", value: 5 },
  { name: "Completed", value: 5 },
];

const COLORS = ["salmon","rgb(247, 215, 70)","rgb(141, 203, 90)"];

const data = [
  {
    name: "Assigned",
    Html: 40,
    CSS: 44,
    JS: 24,
  },
  {
    name: "In Progress",
    Html: 30,
    CSS: 13,
    JS: 22,
  },
  {
    name: "Completed",
    Html: 20,
    CSS: 31,
    JS: 22,
  }
];

const TaskDashboard = () => {
  return (
    <>
      <div className="dashboardClass">
      <div className="container">
        <div className="headings">Your Task's Dashboard</div>
        <div className="row">
          <div className="col-6">
            <div id="DashboardDiv1">
              <p>Assigned Tasks</p>
              <p>Total in Progress</p>
              <p>Completed Tasks</p>
            </div>
          </div>
          <div className="col-6">
            <div id="DashboardDiv2">
              <p>7</p>
              <p>5</p>
              <p>5</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="container" style={{marginTop:"4px"}}>
      <div className="headings">Tasks Distribution</div>
      <div className="row">
        <div className="col-6">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={data01}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {" "}
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
          {/* </ResponsiveContainer> */}
        </div>
        <div className="col-6">
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 70,
              right: 50,
              left: 20,
              bottom: 2,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="CSS"
              stroke="rgb(141, 203, 90)"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Html" stroke="rgb(247, 215, 70)" />
            <Line type="monotone" dataKey="JS" stroke="salmon" />
          </LineChart>
          {/* </ResponsiveContainer> */}
        </div>
      </div>
      </div>
    </>
  );
};

export default TaskDashboard;

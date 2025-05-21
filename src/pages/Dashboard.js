import React, { useState } from "react";
import CounterCard from "../components/CounterCard";
const Dashboard = () => {
  const [counters, setCounters] = useState([
    "Tasks",
    "Meetings",
    "Reports",
    "Emails",
    "Calls",
    "Projects",
    "Invoices",
    "Appointments",
    "Goals",
  ]);
  const addCounter = () => {
    const name = prompt("Enter counter name:");
    if (name) {
      setCounters([...counters, name]);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard</h2>
        <button className="btn btn-primary" onClick={addCounter}>
          Add Counter
        </button>
      </div>
      <div className="row">
        {counters.map((title, idx) => (
          <div className="col-md-4" key={idx}>
            <CounterCard title={title} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dashboard;

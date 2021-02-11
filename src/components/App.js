import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [showTime, setShowTime] = useState(time);
  setInterval(() => {
    time = new Date().toLocaleTimeString();
    setShowTime(time);
  }, 1000);
  return (
    <div className="Clock">
        <h3 id="time">{showTime}</h3>
    </div>
  );
};

export default App;

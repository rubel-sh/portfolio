import React from "react";
import "./App.css";
import logo from "./logo.svg";
function App() {
  return (
    <div className="App">
      <div className="frosed-container">
        <div className="intro">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="description">
            <p>This site is under construction , will be back soon .</p>
          </div>
          <div className="social-media">
            <a href="#">Discord</a>
            <a href="https://facebook.com/rubrexx">Facebook</a>
            <a href="https://t.me/rubrexx">Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

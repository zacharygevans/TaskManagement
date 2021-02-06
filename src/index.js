import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App'

import {BrowserRouter as Router} from "react-router-dom"
  
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <Router>
    <div>
        <App />
    </div>
    </Router>,
    destination
);
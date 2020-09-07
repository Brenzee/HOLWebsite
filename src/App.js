import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Lv from "./Lv";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route to="/" exact component={Lv} />
      </BrowserRouter>
    </div>
  );
};

export default App;

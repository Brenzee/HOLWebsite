import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Lv from "./Lv";
import Eng from "./Eng";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/eng" exact component={Eng} />
        <Route path="/" exact component={Lv} />
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

//Each language page
import Lv from "./Lv";
import Eng from "./Eng";
import Ru from "./Ru";
import Error from "./Error";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/ru" exact component={Ru} />
        <Route path="/eng" exact component={Eng} />
        <Route path="/" exact component={Lv} />
        <Route path="/404" exact component={Error} />
      </BrowserRouter>
    </div>
  );
};

export default App;

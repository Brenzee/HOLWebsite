import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

//Each language page
import Lv from "./Lv";
import Eng from "./Eng";
import Ru from "./Ru";
import Thanks from "./Components/Thanks/Thanks";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/ru" component={Ru} />
        <Route path="/eng" component={Eng} />
        <Route path="/success" component={Thanks} />
        <Route path="/" exact component={Lv} />
      </BrowserRouter>
    </div>
  );
};

export default App;

import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import "./App.css";

//Each language page
import Lv from "./Lv";
import Eng from "./Eng";
import Ru from "./Ru";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/ru" exact component={Ru} />
        <Route path="/eng" exact component={Eng} />
        <Route path="/" exact component={Lv} />
        <Route
          path="/404"
          render={({ staticContext }) => {
            if (staticContext) {
              staticContext.statusCode = 404;
            }
            return (
              <div>
                <h2>Page is not found</h2>
                <Link to="/">Go back to home page</Link>
              </div>
            );
          }}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;

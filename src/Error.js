import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h2>Error 404, page not found</h2>
      <Link to="/">
        <h3>Go Homepage</h3>
      </Link>
    </div>
  );
}

export default Error;

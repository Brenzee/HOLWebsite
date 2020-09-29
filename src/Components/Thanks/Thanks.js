import React from "react";
import { Link } from "react-router-dom";
import "./Thanks.css";

function Thanks() {
  return (
    <div className="thanks">
      <h3>Rezervācija ir saņemta, paldies!</h3>
      <h3>Reservation has been sent, Thank You!</h3>
      <h3>Бронирование получено, спасибо!</h3>
      <Link className="link" to="/">
        Back To Home Page
      </Link>
    </div>
  );
}

export default Thanks;

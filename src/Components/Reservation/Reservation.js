import React, { useState } from "react";
import "./Reservation.css";
import emailjs from "emailjs-com";
import { Redirect } from "react-router-dom";

function Reservation(props) {
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ot3o2rd",
        "template_y074ozf",
        e.target,
        "user_7iqekkJfyJwJas5mZO0ww"
      )
      .then(
        (result) => {
          setDone(true);
        },
        (err) => {
          setError(true);
        }
      );
  };

  return (
    <div className="reserve" id="reserve">
      {done && <Redirect to="/success" />}
      <div className="reserve_title">
        <h2>{props.text.reserve_title}</h2>
      </div>
      <form name="reservation" onSubmit={sendEmail}>
        <input type="hidden" name="form-name" value="reservation" />
        <label htmlFor="name">{props.text.reserve_name}</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={props.text.reserve_name_placeholder}
          required
          title="Lūdzu ievadīt vārdu"
        />
        <label htmlFor="date">{props.text.reserve_date}</label>
        <input type="date" id="date" name="date" required />
        <label htmlFor="time">{props.text.reserve_time}</label>
        <input type="time" id="time" name="time" required />
        <label htmlFor="count">{props.text.reserve_count}</label>
        <input
          type="number"
          id="count"
          name="count"
          placeholder="2"
          min="1"
          max="15"
          title="Lūdzu ievadīt pareizi viesu skaitu"
        />
        <label htmlFor="phone">{props.text.reserve_phone}</label>
        <div className="phone_number">
          <div className="phone_plus">+</div>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder=""
            title="Lūdzu ievadīt pareizi telefona numuru"
            required
          />
        </div>
        <label htmlFor="comments">{props.text.reserve_comments}</label>
        <textarea
          type="text"
          id="comments"
          name="comments"
          placeholder={props.text.reserve_comments_placeholder}
        />
        <button type="submit">{props.text.res_button}</button>
        {error && <p>Ir kluda</p>}
      </form>
    </div>
  );
}
export default Reservation;

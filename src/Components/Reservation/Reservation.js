import React, { Component } from "react";
import "./Reservation.css";

class Reservation extends Component {
  submitButton(e) {}

  render() {
    return (
      <div className="reserve" id="reserve">
        <div className="reserve_title">
          <h1>Rezervēt</h1>
        </div>
        <form name="reservation" method="POST" action="">
          <input type="hidden" name="form-name" value="reservation" />
          <label htmlFor="name">Vārds</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Raitis"
            required
          />
          <label htmlFor="date">Datums</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="DD/MM/GGGG"
            required
          />
          <label htmlFor="time">Laiks</label>
          <input
            type="time"
            id="time"
            name="time"
            placeholder="**:**"
            required
          />
          <label htmlFor="count">Viesu skaits</label>
          <input
            type="number"
            id="count"
            name="count"
            placeholder="2"
            min="1"
            max="15"
          />
          <label htmlFor="phone">Telefona Numurs</label>
          <input type="TEL" id="phone" name="phone" placeholder="+" required />
          <label htmlFor="comments">Komentāri</label>
          <input
            type="text"
            id="comments"
            name="comments"
            placeholder="Nepieciešams bērnu krēsliņš utt."
          />
          <button type="submit" onClick={this.submitButton}>
            Rezervēt
          </button>
        </form>
      </div>
    );
  }
}
export default Reservation;

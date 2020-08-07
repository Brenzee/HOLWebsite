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
          <input type="text" id="name" name="name" placeholder="Rozevelts" />
          <label htmlFor="date">Datums</label>
          <input type="text" id="date" name="date" placeholder="DD/MM/GGGG" />
          <label htmlFor="time">Laiks</label>
          <input type="text" id="time" name="time" placeholder="**:**" />
          <label htmlFor="count">Viesu skaits</label>
          <input type="number" id="count" name="count" placeholder="2" />
          <label htmlFor="phone">Telefona Numurs</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="+371 ********"
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

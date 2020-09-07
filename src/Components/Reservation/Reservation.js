import React, { Component } from "react";
import "./Reservation.css";

class Reservation extends Component {
  submitButton(e) {}
  render() {
    return (
      <div className="reserve" id="reserve">
        <div className="reserve_title">
          <h1>{this.props.text.reserve_title}</h1>
        </div>
        <form name="reservation" method="POST" action="">
          <input type="hidden" name="form-name" value="reservation" />
          <label htmlFor="name">{this.props.text.reserve_name}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={this.props.text.reserve_name_placeholder}
            required
            title="Lūdzu ievadīt vārdu"
          />
          <label htmlFor="date">{this.props.text.reserve_date}</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="DD/MM/GGGG"
            required
          />
          <label htmlFor="time">{this.props.text.reserve_time}</label>
          <input
            type="time"
            id="time"
            name="time"
            placeholder="**:**"
            required
          />
          <label htmlFor="count">{this.props.text.reserve_count}</label>
          <input
            type="number"
            id="count"
            name="count"
            placeholder="2"
            min="1"
            max="15"
            title="Lūdzu ievadīt pareizi viesu skaitu"
          />
          <label htmlFor="phone">{this.props.text.reserve_phone}</label>
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
          <label htmlFor="comments">{this.props.text.reserve_comments}</label>
          <input
            type="text"
            id="comments"
            name="comments"
            placeholder={this.props.text.reserve_comments_placeholder}
          />
          <button type="submit" onClick={this.submitButton}>
            {this.props.text.res_button}
          </button>
        </form>
      </div>
    );
  }
}
export default Reservation;

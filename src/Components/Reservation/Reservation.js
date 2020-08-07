import React from "react";

const Reservation = () => {
  return (
    <div className="reserve" id="reserve">
      <div className="reserve_title">
        <h1>Rezervēt</h1>
      </div>
      <form action="">
        <label htmlFor="name">Vārds</label>
        <input type="text" id="name" placeholder="Rozevelts" />
        <label htmlFor="date">Datums</label>
        <input type="text" id="date" placeholder="DD/MM/GGGG" />
        <label htmlFor="time">Laiks</label>
        <input type="text" id="time" placeholder="SS:MM" />
        <label htmlFor="count">Viesu skaits</label>
        <input type="number" id="count" placeholder="2" />
        <label htmlFor="phone">Telefona Numurs</label>
        <input type="text" id="phone" placeholder="+371 ********" />
      </form>
      <button>Rezervēt</button>
    </div>
  );
};

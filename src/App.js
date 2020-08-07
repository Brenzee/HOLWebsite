import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import WhiteWave from "./Components/White Wave/WhiteWave";
import About from "./Components/About/About";
import Keiterings from "./Components/Keiterings/Keiterings";
import Footer from "./Components/Footer/Footer";
import Reservation from "./Components/Reservation/Reservation";
import Brunch from "./Components/Brunch/Brunch";
import WhiteWaveBottom from "./Components/WhiteWaveBottom/WhiteWaveBottom";

const App = () => {
  return (
    <div>
      <Header />
      <WhiteWave />
      <About />
      <Brunch />
      <Keiterings />
      <Reservation />
      <WhiteWaveBottom />
      <Footer />
    </div>
  );
};

export default App;

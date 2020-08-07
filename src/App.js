import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import WhiteWave from "./Components/White Wave/WhiteWave";
import About from "./Components/About/About";
import Keiterings from "./Components/Keiterings/Keiterings";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <WhiteWave />
      <About />
      <Keiterings />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import Header from "./Components/Header/Header";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import WhiteWave from "./Components/White Wave/WhiteWave";
import About from "./Components/About/About";
import Brunch from "./Components/Brunch/Brunch";
import Keiterings from "./Components/Keiterings/Keiterings";
import Reservation from "./Components/Reservation/Reservation";
import Gallery from "./Components/Gallery/Gallery";
import WhiteWaveBottom from "./Components/WhiteWaveBottom/WhiteWaveBottom";
import Footer from "./Components/Footer/Footer";
import contentEng from "./content/contentEng";

const Eng = () => {
  return (
    <div>
      <Header
        about={contentEng.about}
        brunch={contentEng.brunch}
        menu="Menu"
        banquet={contentEng.banquet}
        contacts={contentEng.contacts}
        welcome={contentEng.hero1}
        reserve={contentEng.res_button}
        flag1={contentEng.flag1}
        flag2={contentEng.flag2}
      />
      <SocialMedia />
      <WhiteWave />
      <About text={contentEng} />
      <Brunch text={contentEng} />
      <Keiterings text={contentEng} />
      <Reservation text={contentEng} />
      <Gallery />
      <WhiteWaveBottom />
      <Footer text={contentEng} />
    </div>
  );
};
export default Eng;

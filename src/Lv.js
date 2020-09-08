import React from "react";

//All components
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
import contentLv from "./content/contentLv";
import Logo from "./img/logo.png";

import { Helmet } from "react-helmet";

const Lv = () => {
  return (
    <div>
      <Helmet>
        <title>Grilbārs House of Light - Restorāns Jūrmalas sirdī</title>
        <meta property="og:locale" content="lv_LV" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Restorāns House of Light" />
        <meta property="og:image" content={Logo} />
        <meta property="og:url" content="https://www.hol.lv" />
        <meta property="og:title" content="Grilbārs House of Light" />
        <meta
          property="og:description"
          content="House of Light - Grilbāra restorāns Jūrmalas sirdī. Grilbārs uz Jomas ielas, iemīļots ar svētdienas brančiem un ēdieniem"
        />
        <meta
          name="keywords"
          content="restorāns jūrmalā, restorāns, restorāns jomas iela, brančš jūrmalā"
        />
        <meta
          name="description"
          content="House of Light - Grilbāra restorāns Jūrmalas sirdī. Grilbārs uz Jomas ielas, iemīļots ar svētdienas brančiem un ēdieniem."
        />
      </Helmet>
      <Header
        about={contentLv.about}
        brunch={contentLv.brunch}
        menu="Menu"
        banquet={contentLv.banquet}
        contacts={contentLv.contacts}
        welcome={contentLv.hero1}
        reserve={contentLv.res_button}
        flag1={contentLv.flag1}
        flag2={contentLv.flag2}
      />
      <SocialMedia />
      <WhiteWave />
      <About text={contentLv} />
      <Brunch text={contentLv} />
      <Keiterings text={contentLv} />
      <Reservation text={contentLv} />
      <Gallery />
      <WhiteWaveBottom />
      <Footer text={contentLv} />
    </div>
  );
};
export default Lv;

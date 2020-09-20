import React, { Suspense } from "react";
//All components
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
import contentRu from "./content/contentRu";

import { Helmet } from "react-helmet";

function Ru() {
  return (
    <div>
      <Helmet htmlAttributes={{ lang: "ru" }}>
        <title>Grilbārs House of Light - Restorāns Jūrmalas sirdī</title>
        <meta property="og:locale" content="ru_LV" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Restorāns House of Light" />
        <meta
          name="keywords"
          content="restorāns jūrmalā, restorāns, restorāns jomas iela, brančš jūrmalā"
        />
        <meta
          name="description"
          content="House of Light - Grilbāra restorāns Jūrmalas sirdī."
        />
      </Helmet>
      <Header
        about={contentRu.about}
        brunch={contentRu.brunch}
        menu="Меню"
        banquet={contentRu.banquet}
        contacts={contentRu.contacts}
        welcome={contentRu.hero1}
        nav1={contentRu.nav1}
        reserve={contentRu.res_button}
        flag1={contentRu.flag1}
        flag2={contentRu.flag2}
      />
      <SocialMedia />
      <WhiteWave />
      <Suspense fallback={" "}>
        <About text={contentRu} />
      </Suspense>
      <Suspense fallback={" "}>
        <Brunch text={contentRu} />
      </Suspense>
      <Suspense fallback={" "}>
        <Keiterings text={contentRu} />
      </Suspense>
      <Suspense fallback={" "}>
        <Reservation text={contentRu} />
      </Suspense>
      <Suspense fallback={" "}>
        <Gallery />
      </Suspense>
      <WhiteWaveBottom />
      <Suspense fallback={" "}>
        <Footer text={contentRu} />
      </Suspense>
    </div>
  );
}

export default Ru;

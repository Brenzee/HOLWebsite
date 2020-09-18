import React, { Suspense, lazy } from "react";

//All components
import Header from "./Components/Header/Header";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import WhiteWave from "./Components/White Wave/WhiteWave";

import WhiteWaveBottom from "./Components/WhiteWaveBottom/WhiteWaveBottom";
import Footer from "./Components/Footer/Footer";
import contentLv from "./content/contentLv";
import Logo from "./img/logo.png";

import { Helmet } from "react-helmet";

const About = lazy(() => import("./Components/About/About"));
const Brunch = lazy(() => import("./Components/Brunch/Brunch"));
const Keiterings = lazy(() => import("./Components/Keiterings/Keiterings"));
const Reservation = lazy(() => import("./Components/Reservation/Reservation"));
const Gallery = lazy(() => import("./Components/Gallery/Gallery"));

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
        nav1={contentLv.nav1}
        flag1={contentLv.flag1}
        flag2={contentLv.flag2}
      />

      <SocialMedia />
      <WhiteWave />
      <Suspense fallback={" "}>
        <About text={contentLv} />
      </Suspense>
      <Suspense fallback={" "}>
        <Brunch text={contentLv} />
      </Suspense>
      <Suspense fallback={" "}>
        <Keiterings text={contentLv} />
      </Suspense>
      <Suspense fallback={" "}>
        <Reservation text={contentLv} />
      </Suspense>
      <Suspense fallback={" "}>
        <Gallery />
      </Suspense>
      <WhiteWaveBottom />
      <Suspense fallback={" "}>
        <Footer text={contentLv} />
      </Suspense>
    </div>
  );
};
export default Lv;

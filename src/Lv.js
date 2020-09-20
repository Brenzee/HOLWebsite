import React, { Suspense, lazy } from "react";

//All components
import Header from "./Components/Header/Header";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import WhiteWave from "./Components/White Wave/WhiteWave";

import WhiteWaveBottom from "./Components/WhiteWaveBottom/WhiteWaveBottom";
import Footer from "./Components/Footer/Footer";
import contentLv from "./content/contentLv";
import HeadImage from "./img/About1.jpg";

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
        {/* <!-- Primary Meta Tags --> */}
        <title>Grilbārs Restorāns House Of Light Jūrmalā</title>
        <meta
          name="title"
          content="Grilbārs Restorāns House Of Light Jūrmalā"
        />
        <meta
          name="description"
          content="Restorāns grilbārs Jūrmalas sirdī Jomas ielā. Grilbārs ir pazīstams ne tikai no izsmalcinātajiem ēdieniem, bet arī no bagātajiem svētdienas brančiem."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://houseoflightwebsite.netlify.app/"
        />
        <meta
          property="og:title"
          content="Grilbārs Restorāns House Of Light Jūrmalā"
        />
        <meta
          property="og:description"
          content="Restorāns grilbārs Jūrmalas sirdī Jomas ielā. Grilbārs ir pazīstams ne tikai no izsmalcinātajiem ēdieniem, bet arī no bagātajiem svētdienas brančiem."
        />
        <meta property="og:image" content={HeadImage} />

        {/* <!-- Twitter --> */}

        <meta
          name="keywords"
          content="restorāns jūrmalā, restorāns, restorāns jomas iela, brančš jūrmalā"
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

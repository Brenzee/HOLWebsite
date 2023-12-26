import React, { Suspense } from "react";

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
      <Helmet htmlAttributes={{ lang: "lv_ru" }}>
        <link rel="canonical" href="https://hol.lv/ru"></link>
        {/* <!-- Primary Meta Tags --> */}
        <title>Ресторан House of Light| Ресторан в Юрмале</title>
        <meta
          name="title"
          content="Ресторан House of Light| Ресторан в Юрмале"
        />
        <meta
          name="description"
          content="Ресторан гриль-бар House of Light Юрмала, улица Йомас. Отличное место для воскресного бранча в Юрмале. Ресторан House of Light Юрмала."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hol.lv/ru" />
        <meta
          property="og:title"
          content="Ресторан House of Light| Ресторан в Юрмале"
        />
        <meta
          property="og:description"
          content="Ресторан гриль-бар House of Light Юрмала, улица Йомас. Отличное место для воскресного бранча в Юрмале. Ресторан House of Light Юрмала."
        />
        <meta
          property="og:image"
          content="https://scontent.frix6-1.fna.fbcdn.net/v/t1.0-9/110657866_3138264479601583_9222930105883202650_o.jpg?_nc_cat=103&_nc_sid=e3f864&_nc_ohc=80VmuddOsLAAX_qVFjC&_nc_ht=scontent.frix6-1.fna&oh=e996cc624ac8e08f87f00cad4fece21c&oe=5F8D08BB"
        />

        <meta
          name="keywords"
          content="ресторан юрмала, ресторан, ресторан на улице йомас, бранч в юрмале, воскресный бранч в юрмале, лучший ресторан в юрмале, лучший ресторан на улице йомас"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hol.lv/ru" />
        <meta
          property="twitter:title"
          content="Ресторан House of Light| Ресторан в Юрмале"
        />
        <meta
          property="twitter:description"
          content="Ресторан гриль-бар House of Light Юрмала, улица Йомас. Отличное место для воскресного бранча в Юрмале. Ресторан House of Light Юрмала."
        />
        <meta property="twitter:image" content="%PUBLIC_URL%/About1.jpg" />
      </Helmet>
      <Header
        topLine={contentRu.topLine}
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
      {/*<WhiteWave />*/}
      <Suspense fallback={" "}>
        <About text={contentRu} />
      </Suspense>
      <Suspense fallback={" "}>
        <Brunch text={contentRu} />
      </Suspense>
      <Suspense fallback={" "}>
        <Keiterings text={contentRu} />
      </Suspense>
      {/* <Suspense fallback={' '}>
        <Reservation text={contentRu} />
      </Suspense> */}
      <Suspense fallback={" "}>
        <Gallery />
      </Suspense>
      <Suspense fallback={" "}>
        <WhiteWaveBottom />
      </Suspense>
      <Suspense fallback={" "}>
        <Footer text={contentRu} />
      </Suspense>
    </div>
  );
}

export default Ru;

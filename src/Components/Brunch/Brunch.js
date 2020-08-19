import React from "react";
import "./Brunch.css";

const Brunch = () => {
  return (
    <div className="brunch about_text" id="brunch">
      <h1 className="about_title">Svētdienas Brunch</h1>
      <div className="brunch_about item_text">
        Sakarā ar to, ka pašreizējie ierobežojumi nedod mums iespēju nodrošināt
        pilnvērtīgus Brančus, rūpējoties gan par klientu, gan darbinieku
        veselību un drošību esam nolēmuši tos pagaidām atcelt. Par visām
        izmaiņām saistībā ar Branču atsākšanos informēsim gan mūsu{" "}
        <a
          href="https://www.facebook.com/houseoflightgrilbars/"
          target="_blank"
          className="facebook_link"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        , gan{" "}
        <a
          href="https://www.instagram.com/houseoflightgrilbars/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Instagram
        </a>{" "}
        lapās.
      </div>
    </div>
  );
};

export default Brunch;

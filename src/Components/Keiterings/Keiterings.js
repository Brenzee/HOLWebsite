import React from "react";
import "./Keiterings.css";

const Keiterings = () => {
  return (
    <div className="keiterings">
      <h1 className="main_title">Keiterings</h1>
      <div className="keiterings_grid">
        <div className="konditoreja">
          <img src={require("../../img/bakery.jpg")} alt="" width="100%" />
          <div className="keiterings_title">Konditoreja</div>
          <div className="keiterings_about">
            Brīnumi piepildās… House of Light piepildīs arī Jūsu brīnumgardos
            sapņus tortes formā. Piedāvājam Jums pasūtīt dažāda veida tortes
            lielākiem un mazākiem pasākumiem. Vai nebūtu jauki Jūsu rīkotajā
            pasākumā vai ballē našķoties ar patiesi LIELU torti, uz kuras būtu
            attēlots Jūsu kompānijas logo?! Ieskaties mūsu paveiktajos
            garadarbos un smelies idejas savai TORTEI. Mūsu atsaucīgā komanda
            realizēs Jūsu vēlmes par gardo svētku torti!
          </div>
        </div>
        <div className="party">
          <img src={require("../../img/party.jpg")} alt="" width="100%" />
          <div className="keiterings_title">Korporatīvās ballītes</div>
          <div className="keiterings_about">
            Restorāns – grilbārs “House of Light” piedāvā Jūsu pasākumu padarīt
            par īstu garšas baudījuma balli. Mūsu pavāru komanda apmierinās
            ikviena viesa vēlmes un garšas kārpiņas. Piedāvājam rīkot
            korporatīvās ballītes, kā restorāna telpās, kur kamīna siltums
            apskaus katru no Jums, tā arī uzklāsim galdu Jūsu izvēlētajā telpā.
            Mums ir ilggadēja pierdze banketu veidošanā, kā furšeta tipa, tā arī
            servējamā tipa banketos, neierobežotam personu skaitam. Mēs
            pievienojam vērtību Jūsu pasākumiem ar mūsu radošajām idejām,
            zināšanām un pieredzi, spējam veiksmīgi pielāgoties Jūsu vēlmēm un
            atvēlētajam budžetam. Biznesa vakariņas ir korporatīva tradīcija,
            kurā atzīmēt gada nobeigumu, kādu jaunu sasniegumu vai noslēgt jaunu
            līgumu. Atkarībā no pasākuma formāta un cilvēku skaita, piemeklēsim
            Jums labāko risinājumu veiksmīgai pasākuma norisei. Parūpēsimies par
            smalku, pārdomātu un individuālu ēdienkarti, kas ļaus viesus
            pārsteigt ar svētku mielastu, kā arī svinīgu atmosfēru.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keiterings;

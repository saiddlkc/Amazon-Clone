import React from "react";
import Img from "../images/logo-transparent-png.png";

const Footer = () => {
  return (
    <footer className=" text-white   text-center  absolute bottom-0  w-full pt-4 px-0">
      <div className="bg-gray-600">
        <button>Zurück zum Seitenanfang</button>
      </div>
      <div className="bg-gray-800 flex text-left  justify-center">
        <ul>
          <h4>Über Amazooon</h4>
          <li>
            <a href="">karriere bei Amazooon</a>
          </li>
          <li>
            <a href="">Pressenmitteilungen</a>
          </li>
          <li>
            <a href=""> Erfahre mehr über amazooon</a>
          </li>
          <li>
            <a href=""> Impressum</a>
          </li>
          <li>
            <a href="">Amazooon Science</a>
          </li>
        </ul>
        <ul>
          <h4>Geld verdienen mit Amazooon</h4>
          <li>
            <a href="">Verkaufen bei Amazooon</a>
          </li>
          <li>
            <a href="">Verkaufen bei Amazooon Business</a>
          </li>
          <li>
            <a href="">Partnerprogramm</a>
          </li>
          <li>
            <a href="">Fulfillment by Amazooon</a>
          </li>
          <li>
            <a href="">Bewerben Sie Ihre Produkte</a>
          </li>
        </ul>

        <ul>
          <h4>Amazooon Zahlungsarten</h4>
          <li>
            <a href="">Amazooon.de VISA Karte</a>
          </li>
          <li>
            <a href="">Gutscheine</a>
          </li>
          <li>
            <a href="">Bankeinzug</a>
          </li>
          <li>
            <a href="">Rechnung</a>
          </li>
          <li>
            <a href="">Ratenzahlung</a>
          </li>
        </ul>
        <ul>
          <h4>Wir helfen Ihnen</h4>
          <li>
            <a href="">Amazon und COVID-19</a>
          </li>
          <li>
            <a href="">Lieferung verfolgen oder Bestellung anzeigen</a>
          </li>
          <li>
            <a href="">Versand & Verfügbarkeit</a>
          </li>
          <li>
            <a href="">Amazooon Prime</a>
          </li>
          <li>
            <a href="">Rückgabe & Ersatz</a>
          </li>
        </ul>
      </div>
      <div
        className="bg-gray-800  shadow-sm shadow-gray-100 
        py-4 px-0  w-full  flex  items-center justify-center"
      >
        <div> Deutschland &copy; {new Date().getFullYear()}</div>
        <div className="mx-5 ">
          <img className="w-10" src={Img} alt="" />
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="flex">
          <ul>
            <li>
              <a href="">Amazooon Advertising</a>
            </li>
            <li>
              <a href="">Kunden finden,</a>
            </li>
            <li>
              <a href="">und binden</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Amazon Web Services</a>
            </li>
            <li>
              <a href="">Cloud Computing Dienste</a>
            </li>
            <li>
              <a href="">Amazon Outlet</a>
            </li>
            <li>
              <a href="">Reduzierte B-Ware</a>
            </li>
            <li>
              <a href="">Shopbop</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Neueröffnungen</a>
            </li>
            <li>
              <a href="">und finden</a>
            </li>
            <li>
              <a href="">Verkaufen bei Amazooon</a>
            </li>
            <li>
              <a href="">Business</a>
            </li>
            <li>
              <a href="">Kunden finden</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Amazon Second Chance</a>
            </li>
            <li>
              <a href="">Geben Sie es weiter,</a>
            </li>
            <li>
              <a href="">tauschen Sie es ein,</a>
            </li>
            <li>
              <a href="">geben Sie ihm ein zweites Leben</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="">Amazon Business Kauf auf Rechnung. PO-Nummern.</a>
            </li>
            <li>
              <a href="">Für Unternehmen.</a>
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;

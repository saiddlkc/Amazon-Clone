import React from "react";
import Img from "../images/amazooon.png";
import { Link } from "react-router-dom";
// import Footersprache from "./Footersprache";

const Footer = () => {
  return (
    <footer className=" text-white   text-center  z-0   w-full pt-4 px-0">
      <div className="bg-gray-600">
        <button className="p-4">Zurück zum Seitenanfang</button>
      </div>
      <div className="bg-gray-800 flex text-left  justify-center   ">
        <ul className="py-5 px-5">
          <h4 className="font-bold">Über Amazooon</h4>
          <li>
            <Link to="/">karriere bei Amazooon</Link>
          </li>
          <li>
            <Link to="/">Pressenmitteilungen</Link>
          </li>
          <li>
            <Link to="/"> Erfahre mehr über amazooon</Link>
          </li>
          <li>
            <Link to="/"> Impressum</Link>
          </li>
          <li>
            <Link to="/">Amazooon Science</Link>
          </li>
        </ul>
        <ul className="py-5 px-5">
          <h4 className="font-bold">Geld verdienen mit Amazooon</h4>
          <li>
            <Link to="/">Verkaufen bei Amazooon</Link>
          </li>
          <li>
            <Link to="/">Verkaufen bei Amazooon Business</Link>
          </li>
          <li>
            <Link to="/">Partnerprogramm</Link>
          </li>
          <li>
            <Link to="/">Fulfillment by Amazooon</Link>
          </li>
          <li>
            <Link to="/">Bewerben Sie Ihre Produkte</Link>
          </li>
        </ul>

        <ul className="py-5 px-5">
          <h4 className="font-bold">Amazooon Zahlungsarten</h4>
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
        <ul className="py-5 px-5">
          <h4 className="font-bold">Wir helfen Ihnen</h4>
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
        className="bg-gray-800  shadow-lg shadow-gray-100 
        py-4 px-0  w-full  flex  items-center justify-center"
      >
        <div className="mx-5 ">
          <img className="w-12" src={Img} alt="" />
        </div>

        <div> Deutschland &copy; {new Date().getFullYear()}</div>
        {/* <Footersprache /> */}
      </div>{" "}
      <div className="bg-gray-900  ">
        <div className="flex text-left  justify-center ">
          <ul className="py-5 px-5">
            <li>
              <a href="" className="font-bold">
                Amazooon Advertising
              </a>
            </li>
            <li>
              <a href="">Kunden finden,</a>
            </li>
            <li>
              <a href="">und binden</a>
            </li>
          </ul>
          <ul className="py-5 px-5">
            <li>
              <a href="" className="font-bold">
                Amazon Web Services
              </a>
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
          <ul className="py-5 px-5">
            <li>
              <a href="" className="font-bold">
                Neueröffnungen
              </a>
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
          <ul className="py-5 px-5">
            <li>
              <a href="" className="font-bold">
                Amazon Second Chance
              </a>
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

          <ul className="py-5 px-5">
            <li>
              <a href="" className="font-bold">
                Amazon Business Kauf auf Rechnung. PO-Nummern.
              </a>
            </li>
            <li>
              <a href="">Für Unternehmen.</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex pt-9 pb-2 gap-6 justify-center   font-bold">
            <li>
              <a href="">Unsere AGB</a>
            </li>
            <li>
              <a href="">Datenschutzerklärung</a>
            </li>
            <li>
              <a href="">Hinweise zu Cookies</a>
            </li>
            <li>
              <a href="">ZVAB</a>
            </li>
            <li>
              <a href="">Impressum</a>

              <a href="">Amazooon Business</a>
            </li>
          </ul>
          <ul className=" font-bold">
            <li>
              {" "}
              &copy; {new Date().getFullYear()} 2019-2024 Amazooon.com, Inc oder
              Partner-Unternehmen
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

import { IoCheckmarkCircleOutline } from "react-icons/io5";
const SuccessPage = () => {
  return (
    <div className="text-center font-bold text-2xl ">
      <p className="bg-gray-200 my-3 p-5">
        Danke für deine Bestellung. Prüfe deine E-Mails für weitere Details zu
        deiner Lieferung.{" "}
        <span className="text-amber-600">
          <IoCheckmarkCircleOutline className="text-9xl m-auto " />
        </span>
      </p>
    </div>
  );
};

export default SuccessPage;

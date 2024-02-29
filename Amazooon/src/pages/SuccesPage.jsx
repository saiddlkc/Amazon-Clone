import React from 'react';
import thx from "../images/thx.png";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
const SuccessPage = () => {
  return (
    <div className='text-center font-bold text-2xl '>
      <p className='bg-gray-200 my-3 p-5'>Danke für deine Bestellung. Prüfe deine E-Mails für weitere Details zu deiner Lieferung. </p>
      
        <img className='m-auto' src={thx} alt="" />
       
      
    </div>
  );
}

export default SuccessPage;

import React, { useEffect, useState } from 'react';

const WkTest = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Daten aus dem Local Storage abrufen
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      // Wenn Daten im Local Storage vorhanden sind, setze sie im State
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []); // Leeres Abhängigkeitsarray, um sicherzustellen, dass dieser Effekt nur einmal ausgeführt wird

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1); // Entferne das Element an der angegebenen Indexposition
    setCartItems(updatedCartItems); // Aktualisiere den Warenkorb im State
    // Aktualisiere auch den Warenkorb im Local Storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  // Funktion zur Berechnung der Gesamtsumme aller Preise im Warenkorb
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.value), 0);
  };
  const discount = calculateTotalPrice() * 0.01;
  const Total=calculateTotalPrice-discount

  return (
    <div>
      <h2>Warenkorb</h2>
      <div className="flex flex-wrap">
        <ul>
          {cartItems.map((item, index) => (
            // Überprüfe, ob das Element gelöscht wurde, bevor es gerendert wird
            !item.deleted && (
              <li key={index} className='flex flex-row w-60 m-6'>
                <p>ID: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Preis: {item.price.value} {item.price.currency}</p>
                <img src={item.images} alt="" />
                {/* Weitere Informationen anzeigen */}
                <button className='bg-red-800 p-2 m-4' onClick={() => removeFromCart(index)}>X</button>
              </li>
            )
          ))}
        </ul>
      </div>
      <p>Gesamtsumme: {calculateTotalPrice()} EUR</p>
      <p>Habibi Discount: -{discount.toFixed(2)} EUR</p>
      <p>Total: -{discount.toFixed(2)} EUR</p>
    </div>
  );
};

export default WkTest;

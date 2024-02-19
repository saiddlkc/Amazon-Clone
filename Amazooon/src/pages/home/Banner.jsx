import React from "react";


const Banner = () => {
  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div>
        <img
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
          src="https://m.media-amazon.com/images/G/03/gc/2021/Desktop20_1940x500_1640089445.jpg"
          alt="Geshenk"
        />
      </div>
      {/* <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <h2>Zum Einkaufen bitte anmelden</h2>
        <button className="product__button">Sichere Anmeldung</button>
      </div> */}

    </div>
  );
};

export default Banner;

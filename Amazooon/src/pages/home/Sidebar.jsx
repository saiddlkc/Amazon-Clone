import React from "react";
import { products } from "../../database/products";
const Sidebar = () => {
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
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
        }}
      >
        <h2>Zum Einkaufen bitte anmelden</h2>
        <button className="product__button">Sichere Anmeldung</button>
      </div>

      {/* <div>
        <h2>Unsere Bestseller-Angebote für dich</h2>
        <div style={{ display: "flex", gap: "20px", backgroundColor: "#fff" }}>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <img src={product.images[0]} alt={product.title} />
                <h3>{product.title}</h3>
                <p>
                  {product.price.value} {product.price.currency}
                </p>
                <button
                  className="product__button"
                  onClick={() => showProductDetails(product)}
                >
                  Add to basket
                </button>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;

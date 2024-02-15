import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: "0",
        backgroundColor: "black",
        color: "white",
        width: "100%",
        textAlign: "center",
        padding: "1rem 0",
      }}
    >
      <p>&copy; {new Date().getFullYear()} Amazooon</p>
    </footer>
  );
};

export default Footer;

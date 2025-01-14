import React, { useState, useEffect } from "react";
import { Menubar } from "primereact/menubar";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import gargantisLogo1 from "../asset/gargantisLogo1.png";

export const MenuBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const start = (
    <>
      {" "}
      <img
        alt="logo"
        src={gargantisLogo1}
        height="100"
        style={{ marginRight: "1rem" }}
      />
    </>
  );
  const end = (
    <div className="flex flex-wrap justify-content-center">
      {" "}
      <div
        style={{
          background: "linear-gradient(to right, #dc4699,#59499e)",
        }}
        className="border-round-3xl w-12rem h-3rem m-2 bg-primary font-bold flex align-items-center justify-content-center"
      >
        0312 1234567
      </div>
      <div
        style={{
          background: "linear-gradient(to right, #dc4699,#59499e)",
        }}
        className="border-round-3xl text-base w-15rem h-3rem m-2 bg-primary font-bold flex align-items-center justify-content-center"
      >
        info@gargantistasarim.com
      </div>
    </div>
  );

  const menubarStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    border: "none",
    backgroundColor: `rgba(255, 255, 255, ${isScrolled ? 0.1 : 1})`,
    boxShadow: isScrolled ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none",
    transition: "all 0.3s ease-in-out",
    backdropFilter: isScrolled ? "blur(10px)" : "none", // Adds a modern glassy effect
    WebkitBackdropFilter: isScrolled ? "blur(10px)" : "none", // Safari compatibility
  };

  return (
    <div style={menubarStyle}>
      <Menubar start={start} end={end} className="border-none bg-white" />
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Menubar } from "primereact/menubar";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";

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
    <img
      alt="logo"
      src="logo.png"
      height="40"
      style={{ marginRight: "1rem" }}
    />
  );
  const end = (
    <div className="flex flex-wrap justify-content-center">
      {" "}
      <div className="border-round-3xl w-12rem h-4rem m-2 bg-primary font-bold flex align-items-center justify-content-center">
        0312 1234567
      </div>
      <div className="border-round-3xl text-base w-15rem h-4rem m-2 bg-primary font-bold flex align-items-center justify-content-center">
        info@gargantistasarim.com
      </div>
    </div>
  );

  const menubarStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    border: "none",
    width: "100%",
    zIndex: 1000,
    backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "white",
    boxShadow: isScrolled ? "0px 2px 4px rgba(0, 0, 0, 0.1)" : "none",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <div style={menubarStyle}>
      <Menubar start={start} end={end} />
    </div>
  );
};

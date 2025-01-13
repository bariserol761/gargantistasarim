import React from "react";
import { MenuBar } from "./menuBar.tsx";
import tasarim1 from "../asset/tasarim-1.png";

export const HomePage = () => {
  return (
    <div>
      <MenuBar />
      {/* Add spacing below the menu bar */}
      <div style={{ marginTop: "7rem" }}></div>

      {/* Content Section */}
      <div className="grid" style={{ height: "80vh" }}>
        {/* Text Section */}
        <div className="col ml-5 mr-2">
          <div className="font-bold text-8xl">
            Grafik Tasarım ile Markanızı Güçlendirin
          </div>
          <div className="font-bold text-3xl mt-5">
            Grafik tasarım hizmetlerimizle markanızın hikayesini yaratıcı ve
            estetik bir şekilde anlatın. Profesyonel tasarımlarımızla görsel
            dünyanızı güçlendiriyor, hedef kitlenizle daha güçlü bağlar
            kurmanızı sağlıyoruz. Logodan sosyal medya görsellerine kadar her
            alanda yenilikçi ve etkili çözümler sunuyoruz.
          </div>
        </div>

        {/* Image Section */}
        <div className="col-6 bg-blue-400 mr-5 ml-2">
          <img
            src={tasarim1}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

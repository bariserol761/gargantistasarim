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
      <div className="grid" style={{ height: "100vh" }}>
        {/* Text Section */}
        <div className="col ml-5 mr-2">
          <div className="font-bold text-8xl">
            Garganist Tasarım ile Markanızı Güçlendirin
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
        <div className="col-6 mr-5 ml-2 flex justify-content-center align-items-center">
          <img src={tasarim1} alt="hero" className="w-10 h-10 object-cover" />
        </div>
      </div>
      <div className="flex text-7xl font-bold mt-8 align-items-center justify-content-center">
        Grafik Tasarım ile Fark Yaratın
      </div>
      <div
        className="col-6 mr-5 ml-2 flex justify-content-center align-items-center"
        style={{
          height: "100%",
          background:
            "linear-gradient(to right, #a5ddea, #812e8b, #dc4699, #59499e)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundSize: "400% 100%", // Large gradient to enable smooth transition
          animation: "gradientShift 6s linear ", // Smooth loop animation
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        This is the text
      </div>

      <style>
        {`
    @keyframes gradientShift {
      0% {
        background-position: 0% 50%; /* Start with the first color (light blue) */
      }
      25% {
        background-position: 25% 50%; /* Transition to the second color (purple) */
      }
      50% {
        background-position: 50% 50%; /* Transition to the third color (pink) */
      }
      75% {
        background-position: 75% 50%; /* Transition to the fourth color (dark blue) */
      }
      100% {
        background-position: 100% 50%; /* Transition back to the first color (light blue) */
      }
    }
  `}
      </style>
    </div>
  );
};

import React from "react";
import { MenuBar } from "./menuBar.tsx";
import tasarim1 from "../asset/tasarim-1.png";
import grafiktasarim1 from "../asset/grafik-tasarimi-1.png";
import grafiktasarim2 from "../asset/grafik-tasarimi-2.png";
import gargantisLogo1 from "../asset/gargantisLogo1.png";

import AdvancedCard from "./advanceCard.tsx";

export const HomePage = () => {
  return (
    <div>
      <MenuBar />
      {/* Add spacing below the menu bar */}
      <div style={{ marginTop: "10rem" }}></div>

      {/* Content Section */}
      <div className="grid" style={{ height: "100vh" }}>
        {/* Text Section */}
        <div className="col-6 ml-5 mr-2">
          <div
            className="font-bold text-8xl"
            style={{
              background: "linear-gradient(to right, #a5ddea, #812e8b)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginRight: "16px",
            }}
          >
            {" "}
            Garganist Tasarım{" "}
          </div>
          <div className="font-bold text-8xl">ile Markanızı Güçlendirin</div>
          <div className="font-normal text-3xl mt-8">
            Grafik tasarım hizmetlerimizle markanızın hikayesini yaratıcı ve
            estetik bir şekilde anlatın. Profesyonel tasarımlarımızla görsel
            dünyanızı güçlendiriyor, hedef kitlenizle daha güçlü bağlar
            kurmanızı sağlıyoruz. Logodan sosyal medya görsellerine kadar her
            alanda yenilikçi ve etkili çözümler sunuyoruz.
          </div>
        </div>

        {/* Image Section */}
        <div className="col flex justify-content-center align-items-center">
          <img src={tasarim1} alt="hero" className="w-9 h-auto object-cover" />
        </div>
      </div>
      <div className="flex text-6xl font-bold mt-3 align-items-center justify-content-center">
        <span
          style={{
            background: "linear-gradient(to right, #a5ddea, #812e8b)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginRight: "16px",
          }}
        >
          Grafik Tasarım
        </span>
        <span>ile Fark Yaratın</span>
      </div>
      <div className="grid mt-4">
        <div className="col"></div>
        <div className="col-4">
          <img
            src={grafiktasarim1}
            alt="hero"
            className="w-12 h-12 object-cover"
          />
        </div>
        <div className="col-4 font-bold text-3xl flex align-items-center justify-content-center">
          Yaratıcı, etkili ve hedef odaklı grafik tasarım hizmetlerimizle
          markanızı zirveye taşıyın. Profesyonel bir görsel kimlik ve unutulmaz
          tasarımlar için bizimle iletişime geçin!
        </div>
        <div className="col"></div>
      </div>
      <div className="flex text-6xl font-bold mt-8 align-items-center justify-content-center">
        <span
          style={{
            background: "linear-gradient(to right, #a5ddea, #812e8b)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginRight: "16px",
          }}
        >
          Grafik Tasarım Hizmetlerimiz
        </span>
        <span>Neler Sunuyor?</span>
      </div>
      <div className="grid mt-4">
        <div className="col"></div>
        <div className="col-3 ">
          <AdvancedCard
            image={tasarim1}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            title="Grafik Tasarım"
            subTitle="Hizmetlerimiz"
          ></AdvancedCard>
          <div className="col"></div>
        </div>
        <div className="col-3">
          <AdvancedCard
            image={tasarim1}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            title="Grafik Tasarım"
            subTitle="Hizmetlerimiz"
          ></AdvancedCard>
          <div className="col"></div>
        </div>
        <div className="col-3">
          <AdvancedCard
            image={tasarim1}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            title="Grafik Tasarım"
            subTitle="Hizmetlerimiz"
          ></AdvancedCard>
        </div>
        <div className="col"></div>
      </div>
      <div className="grid mt-4">
        <div className="col"></div>
        <div className="col-3 ">
          <AdvancedCard
            image={tasarim1}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            title="Grafik Tasarım"
            subTitle="Hizmetlerimiz"
          ></AdvancedCard>
        </div>
        <div className="col-3">
          <AdvancedCard
            image={tasarim1}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            title="Grafik Tasarım"
            subTitle="Hizmetlerimiz"
          ></AdvancedCard>
        </div>

        <div className="col"></div>
      </div>

      <div className="flex text-6xl font-bold mt-8 align-items-center justify-content-center">
        <span
          style={{
            background: "linear-gradient(to right, #a5ddea, #812e8b)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginRight: "16px",
          }}
        >
          Grafik Tasarım
        </span>
        <span>Sürecimiz Nasıl İşliyor?</span>
      </div>
      <div className="grid mt-2">
        <div className="col mt-6">
          <div
            style={{
              background: "linear-gradient(to right, #dc4699,#59499e)",
            }}
            className="h-9rem m-4 border-round-2xl shadow-2	hover:shadow-8 pt-1"
          >
            <div className="m-4   justify-content-center align-items-center">
              {" "}
              <div className="text-3xl text-white font-bold">
                İhtiyaç Analizi ve Brief Toplama
              </div>
              <br />
              <div className="text-white">
                Markanızın hedeflerini, hikayesini ve ihtiyaçlarını detaylı bir
                şekilde anlamak için sizinle yakın iş birliği yapıyoruz.
              </div>
            </div>
          </div>
          <div
            style={{
              background: "linear-gradient(to right, #dc4699,#59499e)",
            }}
            className="h-9rem m-4 border-round-2xl shadow-2	hover:shadow-8 pt-1"
          >
            <div className="m-4   justify-content-center align-items-center">
              {" "}
              <div className="text-3xl text-white font-bold">
                Yaratıcı Konsept Geliştirme
              </div>
              <br />
              <div className="text-white">
                Hedef kitlenize hitap eden, yenilikçi ve özgün tasarım
                konseptleri oluşturuyoruz.
              </div>
            </div>
          </div>{" "}
          <div
            style={{
              background: "linear-gradient(to right, #dc4699,#59499e)",
            }}
            className="h-9rem m-4 border-round-2xl shadow-2	hover:shadow-8 pt-1"
          >
            <div className="m-4   justify-content-center align-items-center">
              {" "}
              <div className="text-3xl text-white font-bold">
                Tasarım ve Revizyon Süreci
              </div>
              <br />
              <div className="text-white">
                Hazırladığımız tasarımları sizinle paylaşıyor ve geri
                bildirimleriniz doğrultusunda mükemmel hale getiriyoruz.
              </div>
            </div>
          </div>{" "}
          <div
            style={{
              background: "linear-gradient(to right, #dc4699,#59499e)",
            }}
            className="h-9rem m-4 border-round-2xl shadow-2	hover:shadow-8 pt-1"
          >
            <div className="m-4   justify-content-center align-items-center">
              {" "}
              <div className="text-3xl text-white font-bold">
                Teslimat ve Uygulama Desteği{" "}
              </div>
              <br />
              <div className="text-white">
                Onaylanan tasarımları teslim ediyor ve gerektiğinde uygulama
                aşamasında destek sunuyoruz.
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <img
            src={grafiktasarim2}
            alt="hero"
            className="w-12 h-12 object-cover"
          />
        </div>
      </div>
      <div
        style={{
          height: "2px",
          background: "linear-gradient(to right, #a5ddea, #812e8b)",
          marginBottom: "16px", // optional space below the line
        }}
      ></div>
      <div className="h-10rem">
        <img
          alt="logo"
          src={gargantisLogo1}
          height="200rem"
          style={{ marginRight: "1rem" }}
        />
      </div>
    </div>
  );
};

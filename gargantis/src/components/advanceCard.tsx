import React from "react";
import { Card } from "primereact/card";

interface AdvancedCardProps {
  image: string; // Source URL for the image
  text: string; // Text to display in the card
  title: string;
  subTitle: string;
}

export default function AdvancedCard({
  image,
  text,
  title,
  subTitle,
}: AdvancedCardProps) {
  const header = (
    <div className="flex justify-content-center align-items-center">
      {" "}
      <img
        alt="Card Header"
        src={image}
        className="w-5 h-auto flex align-items-center justify-content-center"
      />
    </div>
  );

  return (
    <div className="border-round-2xl overflow-hidden transition-all duration-800 hover:shadow-8">
      <Card title={title} subTitle={subTitle} header={header} className="">
        <p className="m-0 group-hover:text-white">{text}</p>
      </Card>
    </div>
  );
}

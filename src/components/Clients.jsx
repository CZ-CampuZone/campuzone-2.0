import React from "react";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import smartschool from "../assets/Veeta.webp";
import kalai from "../assets/Kalai.webp";
import Dbtr from "../assets/Dbtr.webp";
import Aathi from "../assets/Aathi.webp";
import veeta from "../assets/smartplayschoolcampuzone.webp";
export const Clients = () => {
  const ClientArr = [smartschool, veeta, kalai, Dbtr, Aathi];
  return (
    <div>
      <p className="helptitle text-center p-2">Precious Clients</p>
      <div className="flex flex-wrap justify-center">
        {" "}
        {ClientArr.map((item, index) => (
          <div className="p-4" key={index}>
            <Card style={{padding:"20px"}} radius="lg" className="border-none">
              <Image isBlurred={true}
                alt="Woman listing to music"
                
                style={{width:"100px",height:"100px"}}
                src={item}
                
              />
              
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

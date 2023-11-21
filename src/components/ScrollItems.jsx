import { Card, CardBody, Image } from "@nextui-org/react";
import React from "react";
import calendar from "../assets/calendars.webp";
import lessonplan from "../assets/lessonplan.webp";
import attendance from "../assets/attendance.webp";
import exam from "../assets/exam.webp";
import fees from "../assets/fees.webp";
import commun from "../assets/commun.webp";
import Marquee from "react-fast-marquee";
import "./component.css";
export const ScrollItems = () => {
  return (
    <>
      <p className="marqTitle text-center">COMPLETE SCHOOL SOLUTION</p>

      <div className="p-5">
        <Marquee>
          <div className="flex justify-center ">
            <div className="mx-5">
              <Image
                isZoomed
                alt="Card background"
                className="object-cover rounded-xl"
                src={calendar}
                width={550}
              />
            </div>
            <div className="mx-5">
              <Image
                isZoomed
                alt="Card background"
                className="object-cover rounded-xl"
                src={lessonplan}
                width={550}
              />
            </div>
            <div className="mx-5">
              <Image
                isZoomed
                alt="Card background"
                className="object-cover rounded-xl"
                src={attendance}
                width={550}
              />
            </div>
            <div className="mx-5">
              <Image
                isZoomed
                alt="Card background"
                className="object-cover rounded-xl"
                src={exam}
                width={550}
              />
            </div>
            <div className="mx-5">
              <Image
                isZoomed
                alt="Card background"
                className="object-cover rounded-xl"
                src={fees}
                width={550}
              />
            </div>
            <div className="mx-5">
              <Image
                isZoomed
                alt="Card background"
                className="object-cover rounded-xl"
                src={commun}
                width={550}
              />
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

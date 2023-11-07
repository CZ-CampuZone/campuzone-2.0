import { Card, CardBody, Image } from "@nextui-org/react";
import React from "react";
import calendar from "../assets/calendars.png";
import lessonplan from "../assets/lessonplan.png";
import attendance from "../assets/attendance.png";
import exam from "../assets/exam.png";
import fees from "../assets/fees.png";
import commun from "../assets/commun.png";
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

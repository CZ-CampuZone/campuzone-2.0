import React from "react";
import "../components/component.css";
import { Badge } from "./FeatureIcons";

export const Help = () => {
  return (
    <div className="helpbox">
      <div className="">
        <p className="featuretitle text-center p-4">Still need help? Call us</p>
        <p className="featuretitle text-center p-1">+91 9489475000</p>
        <ul  className="flex flex-wrap justify-center">
            <div>
          <li className="flex flex-wrap justify-start items-center">
            <Badge /><p style={{fontSize:"20px",fontWeight:"500"}}className="p-2 ">24/7 Call & Chat Support</p>
          </li>
          <li className="flex flex-wrap justify-start items-center">
            <Badge /><p style={{fontSize:"20px",fontWeight:"500"}}className="p-2 ">Talk to experts</p>
          </li>
          <li className="flex flex-wrap justify-start items-center">
            <Badge /><p style={{fontSize:"20px",fontWeight:"500"}}className="p-2 ">Immediate replies</p>
          </li>
          </div>
        </ul>
      </div>

    </div>
  );
};

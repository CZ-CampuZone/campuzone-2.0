import React from "react";
import "../components/component.css";
import { Badge } from "./FeatureIcons";

export const Help = () => {
  return (
    <div className="helpbox">
      <div className="">
        <p className="helptitle text-center p-2">Still need help? Call us</p>
        <p className="helptitle text-center p-2">+91 9489475000  -  +91 9688844205</p>
        <ul  className="flex flex-wrap justify-center">
            <div>
          <li className="flex flex-wrap justify-start items-center">
            <Badge /><p className="p-2 helpp">24/7 Call & Chat Support</p>
          </li>
          <li className="flex flex-wrap justify-start items-center">
            <Badge /><p className="p-2 helpp">Talk to experts</p>
          </li>
          <li className="flex flex-wrap justify-start items-center">
            <Badge /><p className="p-2 helpp">Immediate replies</p>
          </li>
          </div>
        </ul>
      </div>

    </div>
  );
};

import React from "react";
import "./component.css";
import school from "../assets/pngwing 3.png";
import teacher from "../assets/pngwing1.png";
import student from "../assets/child.png";
import parent from "../assets/parent.png";
import { Image } from "@nextui-org/react";

export const Factcz = () => {
  return (
    <>
      <div className="factcztitle  text-center">
        <p>
          Foster a culture of innovation <br />
          and collaboration
        </p>
      </div>
     
      <div className="flex flex-wrap  justify-center">
        <div className="fzcol1 ">
        <p className="facttxt">Schools</p>
          <div className="flex p-3 justify-center align-center">
            <p className="p-5">
              Automate operations, boost efficiency and reduce overheads with
              the most powerful school management platform by your side.
            </p>
            <Image    style={{ filter: "grayscale(100%)", marginTop: "-13px" }} width={700} src={school} />
          </div>
        </div>
        <div className="fzcol2 ">
        <p className="facttxt">Teachers</p>
          <div className="flex p-2 justify-center align-center">
            <p className="p-4">
              Create an enriching learning environment through world- class
              learning content along with digital tools that simplify every
              classroom operation.
            </p>
            <Image
              style={{ filter: "grayscale(100%)", marginTop: "13px" }}
              width={1080}
              src={teacher}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="fzcol2 ">
          <p className="facttxt">Students</p>
          <div className="flex p-2 justify-center align-center">
            <p className="p-3">
              Never miss a lesson with continuous learning at your fingertips
              through classroom recordings, unlimited practice questions and
              much more.
            </p>
            <Image
              style={{ filter: "grayscale(100%)"}}
              width={1350}
              src={student}
            />
          </div>
        </div>
        <div className="fzcol1 ">
        <p className="facttxt">Parents</p>
          <div className="flex p-2 justify-center align-center">
            <p className="factparenttxt">
              Create an enriching learning environment through world- class
              learning content along with digital tools that simplify every
              classroom operation.
            </p>
            <Image
             className="factparentImg"
              width={980}
              src={parent}
            />
          </div>
        </div>
  
      </div>
    </>
  );
};

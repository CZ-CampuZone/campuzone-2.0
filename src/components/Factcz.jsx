import React from "react";
import "./component.css";
import school from "../assets/sclowner.png";
import teacher from "../assets/pngwing1.png";
import student from "../assets/child.png";
import parent from "../assets/parent.png";
import { Image } from "@nextui-org/react";

export const Factcz = () => {
  return (
    <>
      <div className="helptitle  text-center">
        <p className="mx-2">
          Foster a culture of innovation <br />
          and collaboration
        </p>
      </div>

      <div className="flex flex-wrap  justify-center">
        <div className="fzcol1 ">
          <div className=" ">
            <p className="text-start scltxt">
              Automate operations, boost efficiency and reduce overheads with
              the most powerful school management platform by your side.
            </p>
            <Image className="sclimg" alt="NextUI hero Image" src={school} />
          </div>
        </div>
        <div className="fzcol2 ">
          <div className=" ">
            <p className="text-start scltxt">
              Automate operations, boost efficiency and reduce overheads with
              the most powerful school management platform by your side.
            </p>
            <Image className="teacher" alt="NextUI hero Image" src={teacher} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center">
        <div className="fzcol1 ">
          <div className=" ">
            <p className="text-start scltxt">
              Automate operations, boost efficiency and reduce overheads with
              the most powerful school management platform by your side.
            </p>
            <Image className="studentimg" alt="NextUI hero Image" src={student} />
          </div>
        </div>
        <div className="fzcol2 ">
          <div className=" ">
            <p className="text-start scltxt">
              Automate operations, boost efficiency and reduce overheads with
              the most powerful school management platform by your side.
            </p>
            <Image className="parentimg" alt="NextUI hero Image" src={parent} />
          </div>
        </div>
      </div>
      
    </>
  );
};

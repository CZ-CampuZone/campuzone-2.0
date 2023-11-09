import React from "react";
import "./component.css";
import school from "../assets/sclowner.png";
import teacher from "../assets/mteach.png";
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

      {/* <div className="flex flex-wrap  justify-center">
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
       */}

      <div className="flex flex-wrap justify-center">
        <div class="image-card">
          <div class="text-container">
            <h2>SCHOOLS</h2>
            <p>
            Automate operations, boost efficiency and reduce overheads with the most powerful school management platform by your side.
            </p>
          </div>
          <div class="image-container">
            <img src={school} alt="Your Image Alt Text" />
          </div>
        </div>
        <div class="image-card1">
          <div class="text-container1">
            <h2>TEACHERS</h2>
            <p>
            Create an enriching learning environment through world- class learning content along with digital tools that simplify every classroom operation.
            </p>
          </div>
          <div class="image-container1">
            <img src={teacher} alt="Your Image Alt Text" />
          </div>
        </div>
        
      </div>
      
      <div className="flex flex-wrap justify-center">
        <div class="image-card2">
          <div class="text-container2">
            <h2>STUDENTS</h2>
            <p>
            Never miss a lesson with continuous learning at your fingertips through classroom recordings, unlimited practice questions and much more.
            </p>
          </div>
          <div class="image-container2">
            <img src={student} alt="Your Image Alt Text" />
          </div>
        </div>
        <div class="image-card3">
          <div class="text-container3">
            <h2>PARENTS</h2>
            <p>
            Create an enriching learning environment through world- class learning content along with digital tools that simplify every classroom operation.
            </p>
          </div>
          <div class="image-container3">
            <img src={parent} alt="Your Image Alt Text" />
          </div>
        </div>
        
      </div>
    </>
  );
};

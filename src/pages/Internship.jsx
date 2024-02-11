import React from "react";
import styled from "styled-components";
import Intern from "../assets/Intern.png";
import { Button } from "@nextui-org/react";

export const Internship = () => {
  return (
    <>
      <section>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ margin: "50px" }}>
            <h3>Grow Your Skill</h3>
            <h4>Start Learning </h4>
            <div style={{ display: "flex" }}>
              <Button color="secondary">Secondary</Button>
              <Button color="secondary">Secondary</Button>
            </div>
          </div>
          <div>
            <img src={Intern} />
          </div>
        </div>
        /''
      </section>
    </>
  );
};

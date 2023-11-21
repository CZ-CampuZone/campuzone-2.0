import React from "react";
import { Card, CardFooter, Image, CardBody } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link
} from "@nextui-org/react";
import "./component.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TypeAnimation } from "react-type-animation";
import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import cube from "../assets/RoundCubeWhite.png"
import cone from "../assets/cone.png"
import toroid from "../assets/SuperToroid.png"





export const LandingCover = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedValue, setSelectedValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    org_type: "",
    school_name: "",
    phone_number: "",
    role: "",
    selected_plan: selectedValue
  });



  const handleSelectChange = (e) => {
   
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios
      .post(
        "https://devczerpbackend.anichadigitalinfra.com/api/services/school_form",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(() => {
        setFormData({
          name: "",
          org_type: "",
          school_name: "",
          phone_number: "",
          role: "",
          selected_plan: ""
        });
      
      }).then(()=>{
        toast.success("Our Team will reach out soon!");
      })
      .catch((error) => {
       
        toast.error("An error occurred. Please try again.");
      });
  };
  return (
    <>
    <ToastContainer/>
      <Card
        style={{
          background: "linear-gradient(108deg, #6A3991 8.77%, #F23492 114.02%)",
          height: "auto",
          borderRadius: "0px"
        }}
        className="border-none"
      >
        <CardBody className="flex justify-center text-center">
          {/* <img className="landcube" src={cube}/>
          <img className="landcone" src={cone}/>
          <img className="landtoro" src={toroid}/> */}
          <h1 className="title">
            Unlocking Academic
            <br /> Excellence with School ERP
          </h1>
          <h4 className="subtitle">Your assistant for</h4>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Easy reports generation",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Simplifying fee management",
              1000,
              "Reducing overheads",
              1000,
              "Efficient lesson planning",
              1000,
              "Streamlining admissions",
              1000,
              "Hassle free exam management",
              1000,
              "Transparent parent communications",
              1000,
              "Automating attendance",
              1000
            ]}
            wrapper="span"
            speed={50}
            className="textanim"
            repeat={Infinity}
          />
        </CardBody>
        <CardFooter className="flex justify-center text-center">
          <Button style={{background:"#fff",fontWeight:"600",marginBottom:"10px"}}
            onPress={onOpen}
          >
            Get Started
          </Button>
        </CardFooter>
      </Card>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
          {(onClose) => (
            <>
              <form onSubmit={handleSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Get Started
                </ModalHeader>
                <ModalBody>
                  <Select
                    name="selected_plan"
                    value={selectedValue}
                    onChange={handleSelectChange}
                    variant="bordered"
                    color="secondary"
                    label="Favorite Plan"
                    placeholder="Select a Plan"
                    // className="max-w-xs"
                  >
                    <SelectItem key="Demo" value="Demo">
                      Free demo
                    </SelectItem>
                    <SelectItem key="Basic" value="Basic">
                      Basic plan
                    </SelectItem>
                    <SelectItem key="Pro" value="Pro">
                      Pro plan
                    </SelectItem>
                  </Select>

                  <Input
                    // endContent={
                    //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    // }
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    label="Name"
                    placeholder="Enter your name"
                    type="text"
                    variant="bordered"
                  />
                  <Input
                    // endContent={
                    //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    // }
                    name="school_name"
                    value={formData.school_name}
                    onChange={handleChange}
                    label="School name"
                    placeholder="Enter school your name"
                    type="text"
                    variant="bordered"
                  />
                  <Select
                    name="org_type"
                    value={formData.org_type}
                    onChange={handleSelectChange
                    }
                    variant="bordered"
                    placeholder="Organization type"
                    // className="max-w-xs"
                  >
                    <SelectItem key="Group of Schools" value="Group of Schools">
                      Group of schools
                    </SelectItem>
                    <SelectItem key="Independent School" value="Independent School">
                      Independent school
                    </SelectItem>
                  </Select>
                  <Input
                    // endContent={
                    //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    // }
                    label="Mobile number"
                    placeholder="Ex:+917380860567"
                    type="text"
                    variant="bordered"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                  <Select
                    name="role"
                 
                    onChange={handleSelectChange}
                    variant="bordered"
                    placeholder="Your role in the school"
                    // className="max-w-xs"
                  >
                    <SelectItem key="Teacher" value="Teacher">Teacher</SelectItem>
                    <SelectItem key="Student" value="Student">Student</SelectItem>
                    <SelectItem key="SchoolAdmin" value="SchoolAdmin">School admin</SelectItem>
                    <SelectItem key="Principal" value="Principal">Principal</SelectItem>
                    <SelectItem key="SchoolOwner" value="SchoolOwner">School owner</SelectItem>
                    <SelectItem key="Parent" value="Parent">Parent</SelectItem>
                  </Select>
                </ModalBody>
                <ModalFooter>
                  <Button color="default" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button type="submit" color="secondary" onPress={onClose}>
                    Send
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

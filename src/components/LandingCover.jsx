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
import { TypeAnimation } from "react-type-animation";
import { Select, SelectItem } from "@nextui-org/react";
export const LandingCover = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card
        style={{
          background: "linear-gradient(108deg, #6A3991 8.77%, #F23492 114.02%)",
          height: "60vh",
          borderRadius: "0px"
        }}
        className="border-none"
      >
        <CardBody className="flex justify-center text-center">
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
          <Button style={{background:"#fff",fontWeight:"600"}}
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
              <ModalHeader className="flex flex-col gap-1">Get Started</ModalHeader>
              <ModalBody>
                <Select
                  variant="bordered"
                  color="secondary"
                  label="Favorite Plan"
                  placeholder="Select a Plan"
                  // className="max-w-xs"
                >
                  <SelectItem>Free demo</SelectItem>
                  <SelectItem>Basic plan</SelectItem>
                  <SelectItem>Pro plan</SelectItem>
                </Select>
                <Input
                  autoFocus
                  // endContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  // endContent={
                  //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Name"
                  placeholder="Enter your name"
                  type="text"
                  variant="bordered"
                />
                <Input
                  // endContent={
                  //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="School name"
                  placeholder="Enter school your name"
                  type="text"
                  variant="bordered"
                />
                <Select
                  variant="bordered"
                 
                  placeholder="Organization type"
                  // className="max-w-xs"
                >
                  <SelectItem>Group of schools</SelectItem>
                  <SelectItem>Independent school</SelectItem>
                  
                </Select>
                <Input
                  // endContent={
                  //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Mobile number"
                  placeholder="Enter mobile number"
                  type="text"
                  variant="bordered"
                />
                <Select
                  variant="bordered"
                 
                  placeholder="Your role in the school"
                  // className="max-w-xs"
                >
                  <SelectItem>Teacher</SelectItem>
                  <SelectItem>Student</SelectItem>
                  <SelectItem>School admin</SelectItem>
                  <SelectItem>Principal</SelectItem>
                  <SelectItem>School owner</SelectItem>
                  <SelectItem>Parent</SelectItem>
                  
                </Select>
               
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="secondary" onPress={onClose}>
                  Send
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

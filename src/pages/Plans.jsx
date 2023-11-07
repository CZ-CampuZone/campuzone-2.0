import React from "react";
import "../components/component.css";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure
} from "@nextui-org/react";
import { Vector } from "../components/FeatureIcons";

export const Plans = () => {
  const allCards = [];
  const colors = ["#fbcffa", "#e6cffb"];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <p className="featuretitle text-center p-4">
        
        Pick a plan to get started
      </p>
      <p className="p-4 text-center">
        Get started with our Integrated Website and School Management Software
        today and discover the benefits of a comprehensive solution tailored to
        meet your school's unique requirements.
      </p>
      <div
        style={{ marginBottom: "10vh" }}
        className="flex flex-wrap justify-center"
      >
        <div style={{ backgroundColor: "#eeeeef" }} className="plansbox">
          <div className="text-center">
            <div className="p-3 flex flex-wrap justify-center "></div>
            <div className="flex flex-wrap justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="56"
                viewBox="0 0 37 56"
                fill="none"
              >
                <path
                  d="M18.457 2.72836V54.9254"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M29.6421 11.4279C27.9851 13.4992 23.4282 18.3875 18.457 21.3702"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M33.3705 23.8557C31.1611 26.9627 25.0852 34.2952 18.457 38.7692"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M7.27194 11.4279C8.92899 13.4992 13.4859 18.3875 18.457 21.3702"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M3.54358 23.8557C5.75298 26.9627 11.8288 34.2952 18.457 38.7692"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M18.4564 1.48557C13.071 3.97114 2.05158 12.6707 1.05735 27.5841C0.0631204 42.4976 12.2424 46.2259 18.4564 46.2259"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M18.4577 1.48557C23.8431 3.97114 34.8625 12.6707 35.8567 27.5841C36.8509 42.4976 24.6716 46.2259 18.4577 46.2259"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <p
              style={{ fontSize: "36px" }}
              className="p-3 text-3xl font-semibold"
            >
              FREE DEMO
            </p>
            <div>
              <p style={{ fontSize: "46px", fontWeight: "600" }}>
                ₹0{" "}
                <span style={{ fontSize: "16px", fontWeight: "600" }}>/yr</span>
              </p>
            </div>

            <p className="p-3">Full Access</p>
            <p className="p-3">Validity - 1 Month</p>
            <p className="p-3">Multi-Schools</p>
            <p className="p-3">Once Per User</p>
            <p className="p-3">Chat Support</p>
          </div>

          <div className="planbtn flex flex-wrap justify-center items-end">
            {" "}
            <Button onPress={onOpen} color="default" variant="shadow">
              Get Started
            </Button>
          </div>
        </div>
        <div style={{ backgroundColor: "#fbcffa" }} className="plansbox">
          <div className="text-center">
            <div className="p-3 flex flex-wrap justify-center "></div>
            <div className="flex flex-wrap justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="56"
                viewBox="0 0 50 56"
                fill="none"
              >
                <rect
                  x="1.53906"
                  y="13.5936"
                  width="47.2259"
                  height="40.9291"
                  rx="4.97115"
                  stroke="#3B303D"
                  stroke-width="2"
                ></rect>
                <path
                  d="M26.7266 13.5936L36.1717 1"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M23.5781 13.5936L14.1329 1"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M34.5977 30.9097V37.2065"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M15.7031 30.9097V37.2065"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M14.1328 54.5227H40.8942"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <p
              style={{ fontSize: "36px" }}
              className="p-3 text-3xl font-semibold"
            >
              BASIC PACK
            </p>
            <div>
              <p style={{ fontSize: "46px", fontWeight: "600" }}>
                ₹14,999{" "}
                <span style={{ fontSize: "16px", fontWeight: "600" }}>/yr</span>
              </p>
            </div>

            <p className="p-3">Full Access</p>
            <p className="p-3">Validity - 1 Year</p>
            <p className="p-3">Multi-Schools</p>
            <p className="p-3">Once Per User</p>
            <p className="p-3">Chat Support</p>
          </div>

          <div className="planbtn flex flex-wrap justify-center items-end">
            {" "}
            <Button
              onPress={onOpen}
              style={{ background: "#F66CFF" }}
              variant="shadow"
            >
              Get Started
            </Button>
          </div>
        </div>
        <div style={{ backgroundColor: "#e6cffb" }} className="plansbox">
          <div className="text-center">
            <div className="p-3 flex flex-wrap justify-center "></div>
            <div className="flex flex-wrap justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="56"
                viewBox="0 0 37 56"
                fill="none"
              >
                <path
                  d="M18.457 2.72836V54.9254"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M29.6421 11.4279C27.9851 13.4992 23.4282 18.3875 18.457 21.3702"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M33.3705 23.8557C31.1611 26.9627 25.0852 34.2952 18.457 38.7692"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M7.27194 11.4279C8.92899 13.4992 13.4859 18.3875 18.457 21.3702"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M3.54358 23.8557C5.75298 26.9627 11.8288 34.2952 18.457 38.7692"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M18.4564 1.48557C13.071 3.97114 2.05158 12.6707 1.05735 27.5841C0.0631204 42.4976 12.2424 46.2259 18.4564 46.2259"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M18.4577 1.48557C23.8431 3.97114 34.8625 12.6707 35.8567 27.5841C36.8509 42.4976 24.6716 46.2259 18.4577 46.2259"
                  stroke="#3B303D"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <p
              style={{ fontSize: "36px" }}
              className="p-3 text-3xl font-semibold"
            >
              PREMIUM +
            </p>
            <div>
              <p style={{ fontSize: "46px", fontWeight: "600" }}>
                ₹49,999{" "}
                <span style={{ fontSize: "16px", fontWeight: "600" }}>/yr</span>
              </p>
            </div>
            <p className="p-3">Full Access</p>
            <p className="p-3">Validity - 1 year</p>
            <p className="p-3">Multi-Schools</p>
            <p className="p-3">Once Per User</p>
            <p className="p-3">Call & Chat Support</p>
          </div>

          <div className="planbtn flex flex-wrap justify-center items-end">
            {" "}
            <Button
              onPress={onOpen}
              style={{ background: "#B86CFF" }}
              variant="shadow"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Get Started
              </ModalHeader>
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

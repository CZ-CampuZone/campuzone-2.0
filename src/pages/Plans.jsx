import React, { useState } from "react";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Vector } from "../components/FeatureIcons";
import axios from "axios";
export const Plans = () => {
  const allCards = [];
  const colors = ["#fbcffa", "#e6cffb"];
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

  console.log(selectedValue);

  const handlePlanSelection = (plan) => {
    setSelectedValue(plan);
    setFormData((prevData) => ({
      ...prevData,
      selected_plan: plan
    }));
  };

  console.log(selectedValue);

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
    console.log(formData);
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
      <p className="featuretitle text-center p-4">Pick a plan to get started</p>
      <p className="p-4 text-center">
        Get started with our Integrated Website and School Management Software
        today and discover the benefits of a comprehensive solution tailored to
        meet your school's unique requirements.
      </p>
      <ToastContainer/>
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
            <Button
              onPress={() => {
                onOpen();
                handlePlanSelection("Demo");
              }}
              color="default"
              variant="shadow"
            >
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
              onPress={() => {
                onOpen();
                handlePlanSelection("Basic");
              }}
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
                width="39"
                height="49"
                viewBox="0 0 39 49"
                fill="none"
              >
                <path
                  d="M24.3668 2.33528L2.15864 24.3924C1.37161 25.174 1.92517 26.5169 3.03442 26.5169H15.7771C16.7448 26.5169 17.3412 27.5741 16.8408 28.4023L6.57652 45.3932C5.84661 46.6014 7.3763 47.8979 8.44855 46.9798L37.2347 22.333C38.1114 21.5824 37.5805 20.1462 36.4264 20.1462H22.3061C21.4475 20.1462 20.8476 19.2963 21.1351 18.4872L26.4136 3.6332C26.8564 2.38712 25.305 1.40338 24.3668 2.33528Z"
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
              onPress={() => {
                onOpen();
                handlePlanSelection("Pro");
              }}
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
                    placeholder={selectedValue}

                    // className="max-w-xs"
                  >
                    <SelectItem key="Demo" value="Demo">
                      Demo
                    </SelectItem>
                    <SelectItem key="Basic" value="Basic">
                      Basic
                    </SelectItem>
                    <SelectItem key="Pro" value="Pro">
                      Pro
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
                    onChange={handleSelectChange}
                    variant="bordered"
                    placeholder="Organization type"
                    // className="max-w-xs"
                  >
                    <SelectItem key="Group of Schools" value="Group of Schools">
                      Group of schools
                    </SelectItem>
                    <SelectItem
                      key="Independent School"
                      value="Independent School"
                    >
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
                    <SelectItem key="Teacher" value="Teacher">
                      Teacher
                    </SelectItem>
                    <SelectItem key="Student" value="Student">
                      Student
                    </SelectItem>
                    <SelectItem key="SchoolAdmin" value="SchoolAdmin">
                      School admin
                    </SelectItem>
                    <SelectItem key="Principal" value="Principal">
                      Principal
                    </SelectItem>
                    <SelectItem key="SchoolOwner" value="SchoolOwner">
                      School owner
                    </SelectItem>
                    <SelectItem key="Parent" value="Parent">
                      Parent
                    </SelectItem>
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
      <div className="text-center">
        <p className="badgetex text-center p-4">100% Risk-free</p>
        <p style={{ fontSize: "26px", fontWeight: "600", color: "#75706d" }}>
          Start your journey{" "}
        </p>
        <div className="p-3 flex flex-wrap justify-center">
          <svg
            width="145"
            height="145"
            viewBox="0 0 145 145"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M51.9765 22.9523C54.5258 20.0114 57.6781 17.6535 61.2194 16.0387C64.7607 14.4239 68.608 13.5901 72.5 13.5938C80.6986 13.5938 88.0452 17.2188 93.0236 22.9523C96.9065 22.6751 100.804 23.2368 104.45 24.5993C108.097 25.9618 111.408 28.0932 114.157 30.8488C116.912 33.5981 119.042 36.9078 120.405 40.5532C121.767 44.1987 122.33 48.0945 122.054 51.9765C124.994 54.5264 127.35 57.6789 128.964 61.2202C130.578 64.7614 131.411 68.6084 131.406 72.5C131.41 76.3921 130.576 80.2393 128.961 83.7806C127.347 87.3219 124.989 90.4742 122.048 93.0236C122.324 96.9055 121.761 100.801 120.399 104.447C119.036 108.092 116.906 111.402 114.151 114.151C111.402 116.906 108.092 119.036 104.447 120.399C100.801 121.761 96.9055 122.324 93.0236 122.048C90.4742 124.989 87.3219 127.347 83.7806 128.961C80.2394 130.576 76.3921 131.41 72.5 131.406C68.608 131.41 64.7607 130.576 61.2194 128.961C57.6781 127.347 54.5258 124.989 51.9765 122.048C48.094 122.326 44.1971 121.765 40.5505 120.404C36.9039 119.042 33.593 116.912 30.8427 114.157C28.0875 111.407 25.9563 108.097 24.5938 104.45C23.2313 100.804 22.6694 96.9065 22.9463 93.0236C20.0065 90.4737 17.6497 87.3211 16.036 83.7798C14.4222 80.2386 13.5893 76.3916 13.5938 72.5C13.5938 64.3015 17.2188 56.9548 22.9523 51.9765C22.6759 48.0945 23.2381 44.1985 24.6006 40.553C25.9631 36.9075 28.094 33.5979 30.8488 30.8488C33.5979 28.094 36.9075 25.9631 40.553 24.6006C44.1985 23.2381 48.0945 22.6759 51.9765 22.9523ZM94.3104 61.5404C94.6729 61.0574 94.9352 60.5068 95.0819 59.921C95.2285 59.3351 95.2566 58.7259 95.1644 58.129C95.0723 57.5322 94.8617 56.9598 94.5452 56.4455C94.2286 55.9312 93.8125 55.4853 93.3212 55.1341C92.8298 54.783 92.2733 54.5336 91.6842 54.4006C91.0951 54.2676 90.4854 54.2537 89.8908 54.3597C89.2963 54.4657 88.7289 54.6895 88.2221 55.0179C87.7153 55.3463 87.2793 55.7727 86.9396 56.2721L67.3888 83.6408L57.5771 73.8292C56.7181 73.0288 55.582 72.593 54.4081 72.6137C53.2342 72.6345 52.1142 73.11 51.284 73.9402C50.4538 74.7704 49.9782 75.8905 49.9575 77.0644C49.9368 78.2383 50.3725 79.3744 51.1729 80.2333L64.7667 93.8271C65.2318 94.2919 65.7926 94.6499 66.4099 94.8762C67.0273 95.1025 67.6866 95.1918 68.3419 95.1377C68.9973 95.0837 69.633 94.8877 70.205 94.5633C70.7769 94.2389 71.2715 93.7939 71.6542 93.2592L94.3104 61.5404Z"
              fill="url(#paint0_linear_137_69)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_137_69"
                x1="20.4847"
                y1="34.7856"
                x2="168.874"
                y2="81.8068"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#6A3991" />
                <stop offset="1" stop-color="#F23492" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

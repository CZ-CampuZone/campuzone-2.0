import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Input,
  Select,
  SelectItem,
  Textarea
} from "@nextui-org/react";
import "../components/component.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FormC = () => {
  const [selected, setSelected] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
    product: ""
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
        "https://devczerpbackend.anichadigitalinfra.com/api/services/support'",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(()=>{
        toast.success("Our Team will reach out soon!");
      })
      .catch((error) => {
       
        toast.error("An error occurred. Please check the form again.");
      });
  };
  return (
    <>
    <ToastContainer/>
      <p className="helptitle text-center p-4">Connect with us</p>
      <p style={{fontSize:"24px",fontWeight:"500",color:"#de6baf"}} className="text-center p-4">support@campuzone.com</p>
      <p
        style={{ fontSize: "20px", marginLeft: "50px", marginRight: "50px",textAlign:"center" }}
        className=" p-5 text-center"
      >
        Our school ERP software is the best in India that enables you to deliver
        excellent digital experiences to your students, parents, and faculty. 
      </p>
      <div
        style={{ marginBottom: "30px" }}
        className="flex flex-wrap justify-center "
      >
        <Card className="formC">
          <CardBody>
        
            <form onSubmit={handleSubmit}>
              <Input
              required
                type="text"
                className="p-3"
                autoFocus
                // endContent={
                //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
                label="Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                variant="bordered"
              />

              <Input
              required
                type="email"
                className="p-3"
                autoFocus
                name="email"
                value={formData.email}
                onChange={handleChange}
                // endContent={
                //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
                label="Email*"
                placeholder="Enter your email"
                variant="bordered"
              />

              <Select
                name="product"
                required
                onChange={handleSelectChange}
                className="p-3"
                variant="bordered"
                placeholder="Select product"
                // className="max-w-xs"
              >
                <SelectItem key="fickle" value="fickle">Fickle</SelectItem>
                <SelectItem key="erp" value="erp">Campuzone</SelectItem>
              </Select>
              <Input
              required
                className="p-3"
                // endContent={
                //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                // }
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                label="Mobile number*"
                placeholder="Ex:+917380860567"
                type="text"
                variant="bordered"
              />
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                label="Message"
                placeholder="Enter your message"
                className="p-3"
                variant="flat"
              />
              <div className="flex flex-wrap justify-center">
                <Button
                  type="sumbit"
                  variant="shadow"
                  style={{
                    background: "#d7509d",
                    color: "#fff",
                    fontWeight: "500"
                  }}
                  fullWidth={false}
                  className=" p-3"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

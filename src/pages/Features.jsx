
import "../components/component.css";
import {
  Admission,
  Attendance,
  Calendar,
  Classgroups,
  ClassroomSub,
  Communication,
  Department,
  Exams,
  FeesManage,
  LessonPlan,
  MarkProgress,
  Reports,
  Role,
  Staff,
  Student,
  TimeTable
} from "../components/FeatureIcons";
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
import { useState } from "react";
import axios from "axios";

export default function Features() {
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
        toast("Our Team will reach out soon!");
        // Delay the execution of handleClose using setTimeout
        setTimeout(() => {
          handleClose();
        }, 1000); // You can adjust the delay time as needed
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };
  const allCards = [
    {
      svg: <Role />,
      head: "Roles",
      para: "The Roles module in the school ERP system allows administrators to assign different roles and permissions to staff members, ensuring efficient management of user access and responsibilities within the system."
    },
    {
      svg: <Department />,
      head: "Department",
      para: "The Department module helps organise and categorise various departments within the educational institution, such as academic departments, administrative departments, and support departments. It enables streamlined communication, collaboration, and management of department-specific tasks."
    },

    {
      svg: <Classgroups />,
      head: "Class Groups",
      para: "The Class Groups module facilitates the creation and management of different groups or sections within each class. It allows for easy organization of students into specific groups based on criteria such as academic performance, extracurricular activities, or other requirements."
    },

    {
      svg: <Calendar />,
      head: "Calendar",
      para: "The Calendar module provides a comprehensive overview of academic events, holidays, examinations, and other important dates. It enables students, parents, and staff members to stay informed about upcoming events and plan their schedules accordingly."
    },

    {
      svg: <Staff />,
      head: "Staffs",
      para: "The Staffs module manages information related to faculty and staff members within the institution. It includes features such as staff profiles, contact details, qualification records, and attendance tracking, providing a centralised repository of staff-related data."
    },

    {
      svg: <Student />,
      head: "Students",
      para: "The Students module serves as a central database for student information, including personal details, academic records, attendance history, and other relevant data. It enables efficient student management, tracking, and communication with parents or guardians."
    },

    {
      svg: <ClassroomSub />,
      head: "Classroom & Subjects",
      para: "This module facilitates the creation and management of classrooms and subjects offered by the institution. It allows for assigning subjects to respective classes or sections and managing the availability of classrooms for different academic activities."
    },

    {
      svg: <LessonPlan />,
      head: "Lesson Plan",
      para: "The Lesson Plan module assists teachers in creating, organising, and scheduling lesson plans for various subjects. It provides a structured framework for instructional content, learning objectives, teaching resources, and assessments."
    },

    {
      svg: <TimeTable />,
      head: "Timetable",
      para: "The Timetable module helps in creating and managing the academic timetable, including class schedules, subject allocation, and teacher availability. It ensures proper coordination of classes, subjects, and teachers, minimising scheduling conflicts."
    },

    {
      svg: <Attendance />,
      head: "Attendance",
      para: "The Attendance module automates the process of recording and tracking student attendance. It provides a convenient and accurate method for marking attendance, generating reports, and notifying parents or guardians about student attendance status."
    },

    {
      svg: <Exams />,
      head: "Exams",
      para: "The Exams module streamlines the examination process by facilitating exam scheduling, question paper generation, seating arrangements, and result management. It helps maintain exam-related records and generates reports for performance analysis."
    },

    {
      svg: <MarkProgress />,
      head: "Marks & Other Progress",
      para: "This module enables the recording and management of student marks, grades, and overall academic progress. It provides a comprehensive view of student performance, allowing teachers, parents, and administrators to track individual progress over time.      "
    },

    {
      svg: <Reports />,
      head: "Reports",
      para: "The Reports module generates various types of reports, including academic reports, attendance reports, examination reports, and performance analysis reports. It offers valuable insights and data for decision-making, evaluation, and communication with stakeholders."
    },

    {
      svg: <Admission />,
      head: "Admission",
      para: "The Admission module automates the admission process, from the collection of application forms to enrollment. It streamlines the management of student admissions, including registration, documentation, fee payment, and allocation of classes or sections."
    },

    {
      svg: <FeesManage />,
      head: "Fees Management",
      para: "The Fees Management module simplifies the process of fee collection, invoicing, and tracking. It allows for the creation of fee structures, generating fee receipts, managing overdue payments, and providing financial reports related to fee management.      "
    },

    {
      svg: <Communication />,
      head: "Communication",
      para: "The Communication module facilitates effective communication between stakeholders, including students, parents, staff members, and administrators. It provides features such as announcements, messaging, and notifications, ensuring seamless and timely communication within the school community      "
    }
  ];
  const colors = ["#fbcffa", "#e6cffb"];

  return (
    <>
      <>
        <p className="featuretitle text-center p-4">
          Check all full-fledged <br />
          Campuzone features
        </p>
        <div className="flex flex-wrap justify-center">
          {allCards.map((item, index) => (
            <>
              <div
                key={index}
                style={{ backgroundColor: colors[index % colors.length] }}
                className="featuredcontent"
              >
                <div className="text-center">
                  <div className="p-3 flex flex-wrap justify-center ">
                    {item.svg}
                  </div>
                  <p className="p-3 text-3xl font-semibold">{item.head}</p>
                  <p className="p-3">{item.para}</p>
                </div>
              </div>
            </>
          ))}
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
        <div className="flex flex-wrap justify-center p-4">
          {" "}
          <Button
            onPress={onOpen}
            variant="shadow"
            style={{ background: "#d7509d", color: "#fff", fontWeight: "500" }}
          >
            Get Started
          </Button>
        </div>
      </>
    </>
  );
}

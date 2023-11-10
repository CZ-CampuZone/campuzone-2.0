import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@nextui-org/react";
import { AcmeLogo, Campu } from "./AcmeLogo.jsx";
import {
  ChevronDown,
  Lock,
  Activity,
  Flash,
  Server,
  TagUser,
  Scale
} from "./Icon.jsx";
import "./component.css";
import { useNavigate } from "react-router-dom";

export default function NavNxt() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  console.log(isMenuOpen);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const menuItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Features",
      path: "campuzone-features"
    },
    {
      name: "Plans",
      path: "campuzone-plans"
    },
    {
      name: "Connect",
      path: "campuzone-connect"
    }
    
  ];

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: (
      <Activity className="text-secondary" fill="currentColor" size={30} />
    ),
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />
  };

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar
      style={{ background: "#EEA8F9" }}
      isBlurred={true}
      isBordered
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        {windowWidth <= 768 && (
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        )}
        <NavbarBrand
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
          className="row"
        >
          <AcmeLogo />
          {/* <div className="navtitle">
            <Campu />
          </div> */}
        </NavbarBrand>
      </NavbarContent>
      {windowWidth > 768 && (
        <>
          <NavbarContent className=" sm:flex gap-4" justify="center">
            <NavbarItem
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
              isActive
            >
              <p style={{ color: "#D33591", cursor: "pointer",fontSize:"16px",":hover":{color:"#7828C8"} }}>Home</p>
            </NavbarItem>
            {/* <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    style={{
                      fontWeight: "600",
                      color: "#7828C8",
                      fontSize: "16px"
                    }}
                    isActive
                    disableRipple
                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="solid"
                  >
                    Solutions
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4"
                }}
              >
                <DropdownItem
                  key="autoscaling"
                  description="Enhanced Security and Control"
                  startContent={icons.scale}
                >
                  Roles and Permissions Management
                </DropdownItem>
                <DropdownItem
                  key="usage_metrics"
                  description="Streamlined Communication and Collaboration"
                  startContent={icons.activity}
                >
                  Department Organization
                </DropdownItem>
                <DropdownItem
                  key="production_ready"
                  description="Tailored Student Grouping"
                  startContent={icons.flash}
                >
                  Class Groups Management
                </DropdownItem>
                <DropdownItem
                  key="99_uptime"
                  description="Informed Planning and Scheduling"
                  startContent={icons.server}
                >
                  Academic Calendar
                </DropdownItem>
                <DropdownItem
                  key="supreme_support"
                  description="Comprehensive Student Data Management"
                  startContent={icons.user}
                >
                  Student Information Management
                </DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
            <NavbarItem
              onClick={() => {
                navigate("campuzone-features");
                window.scrollTo(0, 0);
              }}
              isActive
            >
              <p style={{ color: "#D33591", cursor: "pointer",fontSize:"16px" }}>Features</p>
            </NavbarItem>
            <NavbarItem
              onClick={() => {
                navigate("campuzone-plans");
                window.scrollTo(0, 0);
              }}
              isActive
            >
              <p style={{ color: "#D33591", cursor: "pointer",fontSize:"16px" }}>Plans</p>
            </NavbarItem>
            <NavbarItem
              onClick={() => {
                navigate("campuzone-connect");
                window.scrollTo(0, 0);
              }}
              isActive
            >
              <p style={{ color: "#D33591", cursor: "pointer",fontSize:"16px" }}>Connect</p>
            </NavbarItem>
            <NavbarItem>
              <Link
                style={{ color: "#7828C8", cursor: "pointer",fontSize:"16px" }}
                target="_blank"
                href="https://news.campuzone.com/"
              >
                News
              </Link>
            </NavbarItem>
          </NavbarContent>
        </>
      )}
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="secondary" target="_blank" href="https://devczerp.anichadigitalinfra.com/" variant="shadow">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      {isMenuOpen && (
        <NavbarMenu>
          <>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <p style={{ ":hover": { color: "#D33591" },fontSize:"20px"}}
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false); 
                    window.scrollTo(0, 0);// Close the navbar
                  }}
                  className="w-full"
                >
                  {item.name}
                </p>
              </NavbarMenuItem>
            ))}

            <NavbarMenuItem>
              <Link
                style={{ color: "#D33591", cursor: "pointer" }}
                target="_blank"
                href="https://news.campuzone.com/"
              >
                News
              </Link>
            </NavbarMenuItem>
           
          </>
        </NavbarMenu>
      )}
    </Navbar>
  );
}

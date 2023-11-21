import { NextUIProvider } from "@nextui-org/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./App.css";
import React from "react";
import NavNxt from "./components/NavNxt";
import { LandingCover } from "./components/LandingCover";
import { ScrollItems } from "./components/ScrollItems";
import { Factcz } from "./components/Factcz";
import FAQ from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Features from "./pages/Features";
import { Plans } from "./pages/Plans";

import { Help } from "./components/Help";
import { AcmeLogo } from "./components/AcmeLogo";
import { FormC } from "./components/FormC";
import { Clients } from "./components/Clients";

export const Home = () => {
  return (
    <div>
      <LandingCover />
      <ScrollItems />
      <Factcz />
      <Clients />
      <FAQ />

      <Help />
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out"
  ];

  return (
    <>
      <NextUIProvider>
        <NavNxt />
        <FloatingWhatsApp
          darkMode
          phoneNumber="9489475000"
          accountName="CZ Admin"
          // avatar="./assets/ascgee.png"
        />
        <Routes>
          <Route index path="/*" element={<Home />} />
          <Route path="/campuzone-features" element={<Features />} />
          <Route path="/campuzone-plans" element={<Plans />} />
          <Route path="/campuzone-connect" element={<FormC />} />
        </Routes>
        <Footer />
      </NextUIProvider>
    </>
  );
}

export default App;

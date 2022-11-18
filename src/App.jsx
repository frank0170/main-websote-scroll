import React from "react";
import Header from "./Header";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Services from "./sections/services/Service";
import Blockchain from "./sections/blockchain/Blockchain";
import ContactUs from "./sections/contact-us/ContactUs";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "pink",
        alignItems: "center",
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "pink",
          alignItems: "center",
          margin: " 120px 60px",
          padding: "40px",
          gap: "500px",
        }}
      >
        <Home />
        <About />
        <Services />
        <Blockchain />
        <ContactUs />
      </div>
    </div>
  );
};

export default App;

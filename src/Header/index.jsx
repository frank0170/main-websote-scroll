import "./index.css";

import { scroller } from "react-scroll";

const Header = () => {
  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="header">
      <div className="navigation-items">
        <span className="link" onClick={() => scrollToSection("home")}>
          Home
        </span>
        <span className="link" onClick={() => scrollToSection("about")}>
          About
        </span>
        <span className="link" onClick={() => scrollToSection("services")}>
          Services
        </span>
        <span className="link" onClick={() => scrollToSection("blockchain")}>
          Blockchain
        </span>
        <span className="link" onClick={() => scrollToSection("contact-us")}>
          Contact Us
        </span>
      </div>
    </div>
  );
};

export default Header;

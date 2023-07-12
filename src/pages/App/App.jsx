import { useState } from "react";
import Nav from "../../components/Nav/Nav";
import Title from "../../components/Title/Title";
import Services from "../../pages/Services/Services";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";
import NBR from "../../pages/NBR/NBR";
import Social from "../../components/Social/Social";
import "animate.css";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="App">
        {currentPage === "services" ? (
          <Services setCurrentPage={setCurrentPage} />
        ) : currentPage === "about" ? (
          <About />
        ) : currentPage === "contact" ? (
          <Contact />
        ) : currentPage === "nbr" ? (
          <NBR />
        ) : (
          <Title />
        )}
      </div>
      <Social />
    </>
  );
}

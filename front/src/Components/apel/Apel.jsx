import React from "react";
import NavBar from "./../navbar/NavBar";
import ApelPage from "./section-apel";
import Footer from "../Footer/Footer";

function Apel() {
  return (
    <div className="sticky-wrap">
      <NavBar />
      <ApelPage />
      <div className="sticky-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Apel;

import React from 'react';
import NavBar from './../navbar/NavBar';
import PdfPages from './PdfPage';
import Footer from '../Footer/Footer';
import "./Cantine.css";


function Cantine() {
  return (
    <div>
      <div className="sticky-wrap">
        <NavBar />
        <PdfPages />
        <div className="sticky-footer">
          <Footer />
        </div>

      </div>
    </div>


  );
}


export default Cantine;


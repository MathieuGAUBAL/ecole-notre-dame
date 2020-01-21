import React from 'react';
import NavBar from './../navbar/NavBar';
import InscriptionPage from './section-inscription';
import Footer from './../Footer/Footer';

function Inscription() {
  return (
    <div className="sticky-wrap">
      <NavBar/>
      <InscriptionPage />
      <div className="sticky-footer">
        <Footer />
      </div>
    </div>
  );
}


export default Inscription;


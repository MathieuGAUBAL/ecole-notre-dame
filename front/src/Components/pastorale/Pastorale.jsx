import React from 'react';
import NavBar from './../navbar/NavBar';
import PastoralePage from './section-pastorale';
import Footer from './../Footer/Footer';


function Pastorale() {
  return (
    <div className="sticky-wrap">
      <NavBar />
      <PastoralePage />
      <div className="sticky-footer">
        <Footer />
      </div>
    </div>
  );
}


export default Pastorale;


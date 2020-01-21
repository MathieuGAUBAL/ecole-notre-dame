import React from 'react';
import NavBar from './../navbar/NavBar';
import InfoPratique from './section-inf';

import Footer from '../Footer/Footer';



function InfPrat() {
  return (
    <div className="sticky-wrap">
      <NavBar/>
      <InfoPratique />
      <div className="sticky-footer">
        <Footer />
      </div>    
    </div>
  );
}


export default InfPrat;


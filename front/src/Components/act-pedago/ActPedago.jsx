import React from 'react';
import NavBar from './../navbar/NavBar';
import Footer from './../Footer/Footer';
import Activite from './section-act';


function ActPedago() {
  return (
    <div className="sticky-wrap">
      <NavBar/>
     <Activite/>
     <div className="sticky-footer">
        <Footer />
      </div>
    </div>
  );
}


export default ActPedago;


import React from 'react';
import NavBar from './../navbar/NavBar';
import Histoire from'./section-historique';
import Footer from './../Footer/Footer'

function Historique() {
  return (
    <div className="sticky-wrap">
      <NavBar/>
      <Histoire/>
      <div className="pt-5">
      <div className="sticky-footer">
        <Footer />
      </div>
      </div>

    </div>
  );
}


export default Historique;


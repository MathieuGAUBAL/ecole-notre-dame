
import NavBar from './../navbar/NavBar';
import Part1 from './part1/Accueil-part1';
import Part2 from './part2/Accueil-part2';
import Part3 from './part3/Accueil-part3';
import Footer from './../Footer/Footer';

import React, { Component } from 'react';
import './Accueil.css';


class Accueil extends Component {


  render() {
    return (
      <div className="sticky-wrap">
        <NavBar />
        <Part1 />
        <Part2 />
        <Part3 />
        <div className="sticky-footer">
          <Footer />
        </div>
      </div>
    );
  }
}


export default Accueil;


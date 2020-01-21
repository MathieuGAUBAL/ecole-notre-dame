import React, { Component } from 'react';
import './Accueil-part3.css';

class Part3 extends Component {
    render() {
        return (
            <div>
                <div className="map ">
                    <iframe title="iframe-accueil" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.572385662095!2d1.2412032512548523!3d48.579738328138276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e3faf7d4eb7665%3A0x9b440e6f62192e82!2sEcole%20primaire%20Notre%20Dame!5e0!3m2!1sfr!2sfr!4v1578907107962!5m2!1sfr!2sfr" width="100%" height="350" frameBorder="0" allowFullScreen=""></iframe>
                </div>
            </div>
        )
    }
}

export default Part3;



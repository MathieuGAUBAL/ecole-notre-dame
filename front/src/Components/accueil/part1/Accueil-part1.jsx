import React, { Component } from 'react';
import './Accueil-part1.css';


class Part1 extends Component {

    render() {
        return (
            <div>
                <div className="div-img mb-5">
                    <svg id="Calque_2" data-name="Calque 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 31"><polygon className="cls-2" points="0 0 1366 0 1366 31 0 0" /></svg>
                    <a className="font btn-inscription" href="/Inscription"><button className="button-inscription">Inscription</button></a>
                    <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 183.84"><path className="cls-1" d="M0,257c40.8-40.13,109.61-96.76,206.61-124.78C407.25,74.28,556.51,188.46,779.43,232c129.36,25.26,324.91,34.82,586.57-58V300H0Z" transform="translate(0 -116.16)" /></svg>
                </div>
                <div className="container mb-5">
                    <p className=" titre-accueil-1 text-center font-weight-bold">Retrouvez les actualités ainsi que les dates des futurs évenements de l'école</p>
                </div>
            </div>
        )
    }
}

export default Part1;
import React, { Component } from 'react';
import './section-inf.css';


let arr = [
    {
        id: 1,
        nom: "Ecole Notre Dame",
        adresse: "44 RUE JEAN MOULIN 28170 CHATEAUNEUF EN THYMERAIS",
        tel: "02 37 51 06 48",
        horaire: [
            ["lundi : 07:15 - 18h45"],
            ["mardi : 07:15 - 18h45"],
            ["mercredi : Fermé"],
            ["jeudi : 07:15 - 18h45"],
            ["vendredi : 07:15 - 18h45"],
            ["samedi : Fermé"],
            ["dimanche : Fermé"]

        ]
    }]


class InfoPratique extends Component {


    render() {

        return (
            <div className="div-container-infosPrat">
                <div className="div-img-infospratique">
                    <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 183.84"><path className="cls-1" d="M0,257c40.8-40.13,109.61-96.76,206.61-124.78C407.25,74.28,556.51,188.46,779.43,232c129.36,25.26,324.91,34.82,586.57-58V300H0Z" transform="translate(0 -116.16)" /></svg>
                </div>

                <div className="div-infosprat-bg-dsk p-5">
                    <img className="img-infosprat-bg-dsk" src="/information-dsk.png" alt="personnage dans une bouet"/>
                </div>
               
                <div className="container div-titre-infospratique p-4 p-lg-5">
                    <h1 className="text-center lead titre-infospratique">Retrouvez les informations pratiques</h1>
                </div>


                <div className="container div-infosPra text-center mb-5">
                    <ul className="list-group">
                        <li className="list-group-item active">Coordonnées</li>
                        <li className="list-group-item name-infosPrat">{arr[0].nom}</li>
                        <li className="list-group-item adresse-infosPrat">{arr[0].adresse}</li>
                        <li className="list-group-item tel-infosPrat">{arr[0].tel}</li>
                    </ul>
                </div>

                <div className="div-horaire-infosPrat text-center">
                    <div className="container horaire-infosPrat">
                        <ul className="list-group">
                            <p className="list-group-item active text-horaire">horaires</p>
                            {

                                arr[0].horaire.map((item, index) => (
                                    index !== 2 && index !== 5 && index !== 6
                                        ? <li key={index} className="list-group-item list-group-item-success"><p className="text-jour-horaire text-dark">{item[0]}</p></li>
                                        : <li key={index} className="list-group-item list-group-item-warning"><p className="text-jour-horaire">{item[0]}</p></li>
                                ))}
                        </ul>
                    </div>
                </div>

                <div className="container div-map-infosPrat mt-5">
                    <ul className="list-group">
                        <li className="list-group-item active text-center">Localisation</li>
                        <li className="list-group-item"><iframe title={"iframe-accueil"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.572385662095!2d1.2412032512548523!3d48.579738328138276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e3faf7d4eb7665%3A0x9b440e6f62192e82!2sEcole%20primaire%20Notre%20Dame!5e0!3m2!1sfr!2sfr!4v1578907107962!5m2!1sfr!2sfr" width="100%" height="350" frameBorder="0" allowFullScreen=""></iframe></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default InfoPratique;
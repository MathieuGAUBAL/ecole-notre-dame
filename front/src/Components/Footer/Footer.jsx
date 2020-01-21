import React, { Component } from 'react';
import './Footer.css';

let arr = [{
    id: 1,
    name: 'Ecole Notre Dame',
    adresse: '44 RUE JEAN MOULIN, 28170 CHATEAUNEUF-EN-THYMERAIS',
    tel: '02 37 51 06 48',
    logo:'./logo-ecole.jpg'
}]

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer bg-dark p-3">
                    {arr.map((item, index) =>
                        <div key={index} className="infos text-white">
                            <img className="image-logo mb-3" src={item.logo} alt={item.logo}/>
                            <p className="name-ecole">{item.name}</p>
                            <h5>{item.adresse}</h5>
                            <h5>{item.tel}</h5>
                        </div>)}
                </div>
            </>
        )
    }
}

export default Footer;
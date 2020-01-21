import React, { Component } from "react";
import "./section-pastorale.css";

let arr = [
  {
    id: 1,
    titre: "La pastorale",
    description:
      "Permettre à chacun de découvrir ou d’approfondir l’Évangile et de vivre sa foi, de la partager dans le respect des autres croyances. Participer aux célébrations des temps forts de la liturgie catholique. On s’appuie sur les textes de la bible et l’art religieux.",
    url: "./img-pastorale.jpg",
    alt: "image de l'ecole"
  }
];

class PastoralePage extends Component {
  render() {
    return (
      <div className="all-pastorale text-center ">
        <div className="div-img-pastorale">
          <svg
            id="Calque_1_pastorale"
            data-name="Calque 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1366 146"
          >
            <path
              class="cls-1-pastorale"
              d="M0,265.85C40.8,234,109.61,189,206.61,166.76c200.64-46,349.9,44.66,572.82,79.24,129.36,20.06,324.91,27.65,586.57-46.07V300H0Z"
              transform="translate(0 -154)"
            />
          </svg>
        </div>
        <div className="div-pastorale-bg-dsk p-5">
          <img
            className="img-pastorale-bg-dsk"
            src="/pastorale-dsk.png"
            alt="education catholique"
          />
        </div>
        <div className="titre-pastorale p-5">
          <h1 className="title-pastorale lead text-uppercase">
            {arr[0].titre}
          </h1>
        </div>

        <div className="div-content-pastorale column-lg d-lg-flex mb-5">
          <div className="div-container-pasto">
            <div className="p-4 texte-pastorale">
              <p className="txt-pastorale">{arr[0].description}</p>
            </div>
          </div>
          <div className="image-pastorale p-4 justify-content-center">
            <img
              className="img-pastorale"
              src={arr[0].url}
              alt={arr[0].alt}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PastoralePage;

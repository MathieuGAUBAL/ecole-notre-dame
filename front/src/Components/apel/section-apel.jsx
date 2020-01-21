import React, { Component } from "react";
import "./section-apel.css";

let arr = [
  {
    id: 1,
    order: 1,
    paragraphe:
      "L’APEL contribue à l’organisation des fêtes qui ponctuent l’année scolaire (marché de Noël,repas des familles, carnaval, kermesse…)."
  },
  {
    id: 2,
    order: 2,
    paragraphe:
      "L’équipe de l’APEL se joint à l’équipe éducative et à la direction afin de créer un climat chaleureux et accueillant, propice au bien-être de nos enfants et de leur famille. Cette dimension nous parait très importante, à la base de tout projet éducatif."
  },
  {
    id: 3,
    order: 3,
    paragraphe:
      "Certaines actions menées (marché de Noël, Kermesse…) permettent d’apporter un soutien financier aux projets pédagogiques (sorties scolaires, tableaux numériques, ballons, lecteurs de musique, activités sportives…) et ainsi de contribuer à l’amélioration des conditions d’apprentissage et d’accueil de nos enfants."
  },
  {
    id: 4,
    order: 4,
    paragraphe:
      "L’équipe de l’APEL remercie vivement la direction, l’équipe pédagogique ainsi que tous les parents, sans qui toutes ces actions ne pourraient être menées à bien."
  }
];

class ApelPage extends Component {
  render() {
    return (
      <div className="mb-5">

        {/*   { image device mobile} */}
        <div className="div-img-apel mb-2">
        </div>

        {/*   { image device dsk} */}
        <div className="div-img-apel-bg-dsk p-5 mb-5">
          <img className="img-apel-dsk" src="/apel-dsk.png" alt="img1" />
        </div>

        <div className=" container div-container">
          <div className="div-titre-apel mb-5">
            <h1 className="titre-apel lead text-center">APEL</h1>
          </div>

          {arr.map((item, index) => (
            <div className="container-paragraphe-apel">
              <div className="paragraphe-apel">
                <p className="text-apel pb-4">{item.paragraphe}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ApelPage;

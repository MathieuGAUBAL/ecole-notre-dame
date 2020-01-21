import React from "react";
import "./section-act.css"

function Activite() {
    return (
        <div>
            <div className="div-img2"></div>
            <div className=" text-center text-lg-left p-4 p-lg-2">
                <div className="div-container-act">
                    <p className="title-act h1 text-center pb-3 text-primary"> Activité</p>
                </div>






                <div className="text-center text-lg-left p-4 p-lg-2 ">
                    <p className="h3 text-danger text-lg-center">En Maternelle </p>
                    <div className="pb-3 d-lg-flex ">
                        <ul className="list-unstyled ">
                            <li className="h4 text-info pb-lg-3 text-lg-left">Accompagnement des élèves</li>
                            <li className="pb-3">Points forts: le langage, la motricité, la socialisation.</li>
                            <li className="pb-3">Un module artistique est mis en place dans chaque classe. </li>
                            <li className="pb-3">Les élèves développent leurs sens: ils apprennent à observer, à écouter, à manipuler pour mieux apprendre.</li>
                            <li className="pb-3">Ils progressent dans la reconnaissance et la maîtrise de leurs émotions.</li>
                            <li className="pb-3">Ils apprennent à coopérer entre grands et petits, à suivre un plan de travail.</li>
                            <li className="pb-3">La motricité se développe par tous les supports d’art visuel: modelage, peinture, graphisme, coloriage…</li>
                            <li className="pb-3">Tous les projets de classe sont exploités par les modes d’expression artistique.</li>
                            <li className="h4 text-info pb-lg-3 text-lg-left">Découvrir le monde</li>
                            <li className="pb-3">Les élèvent observent et étudient les phénomènes de la vie :</li>
                            <li className="pb-3">Par exemple la vie animale: poissons…</li>
                            <li className="pb-3">Des ateliers scientifiques sont organisés en interaction entre les classes dans le courant de l’année.</li>
                        </ul>
                        <div className="div-img-act d-none d-xl-block">
                            <img className="d-none d-xl-block img-act " src="maternelle.jpeg" alt="maternelle" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>











                <div className="div-img3 "></div>
                <div className="text-center text-lg-left p-4 p-lg-2 ">
                    <div className="pb-3">
                        <h2 className="text-warning pb-3 text-lg-center pb-lg-4">En Primaire</h2>
                        <ul>
                            <li className="text-info h4 pb-3 text-lg-left pb-lg-4">Accompagnement des élèves</li>
                            <li className="pb-3">L’école Notre-Dame bénéficie d’une assise locale grâce à une réputation solide d’accompagnement ainsi que du charisme marianiste qui place l’éducation intégrale de qualité au cœur de son projet pédagogique.</li>
                            <li className="pb-3">Ce projet repose également sur la bienveillance envers les enfants et leurs familles et sur les multiples propositions qui leur sont faites.</li>
                            <li className="pb-3">Le souci de l’épanouissement de l’enfant est au cœur du processus d’apprentissage de notre école. </li>
                            <li className="pb-3">Les enseignants et les éducateurs mettent en œuvre une pédagogie diversifiée avec des approches multiples, pour transmettre en douceur le savoir.</li>
                            <li className="text-info h4 text-lg-left pb-lg-4">Travail personnalisé</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="pb-3">Dans les classes certaines classes, les élèves apprennent à travailler en suivant leur programmation.</li>
                            <li className="pb-3">Après une évaluation diagnostic, ils élaborent leur plan de travail, choisissent les activités adaptées à leur niveau s’entraînent et manipulent à l’aide de matériel adapté.</li>
                            <li className="pb-3">Ils s’évaluent à l’issue de l’apprentissage.</li>
                            <li className="pb-3">Cette pédagogie est inspirée de la réflexion élaborée par Maria Montessori, reprise par le Père Faure dans les années 1970/90.</li>
                            <li className="pb-3">On la modernise en tenant compte des avancées scientifiques sur le cerveau et le développement de l’enfant.</li>
                            <li className="pb-3">Cela permet aux élèves de pouvoir se déplacer durant leurs activités, de ne pas être obligés de faire tous la même chose en même temps.</li>

                        </ul>
                    </div>
                    <div>
                        <h5 className="pb-3 h4 text-info text-lg-left pb-lg-4">Pédagogie coopérative au cycle 3</h5>
                        <p className="pb-4">En cycle 3, on met peu à peu en pratique la pédagogie coopérative. Quelle richesse de pouvoir résoudre une tâche à plusieurs ! D’apprendre à partager son point de vue, à tenir compte des autres, à s’enrichir des apports des autres.</p>
                        <p className="pb-3 h5 pb-lg-5">« Apprends-moi à faire seul. » Maria Montessori</p>
                    </div>
                </div>







                <div className="div-img4"></div>
                <div className="  p-4 p-lg-2">
                    <div className="pb-3">
                        <h2 className="text-success pb-3 text-center">La Bibliothèque</h2>
                        <p className="pb-3 pb-lg-4">Les élèves de l’école bénéficient de l’accès à la bibliothèque de l’école.</p>
                        <p className="pb-3 pb-lg-4">Du CP au CM2, un créneau hebdomadaire est prévu dans l’emploi du temps. Les élèves sont accueillis par la personne bénévole : ils ont le temps de parcourir des ouvrages et des albums et de faire leur choix. </p>
                        <p className="pb-3 pb-lg-4">Ils empruntent tous les quinze jours des livres à emporter chez eux.</p>
                        <p className="pb-3 pb-lg-4">Bien veiller à les rendre en temps et en heure car d’autres lecteurs les attendent !</p>
                        <p className="pb-3 pb-lg-4">Dès la maternelle, les enfants ont pris goût à la lecture et aux livres et vont régulièrement à la bibliothèque avec leur enseignante. </p>
                        <p className="pb-3 pb-lg-4">Le festival du livre permet grâce aux achats des parents d’enrichir la bibliothèque de nouveaux livres. </p>
                    </div>
                </div>
            </div>

        </div >
    );
}


export default Activite;
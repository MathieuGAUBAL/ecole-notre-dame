import React, { Component } from "react";
import NavBar from "./../navbar/NavBar";
import Actu from "./Section-Actu";
import Agenda from "./section-agenda";
import Footer from "./../Footer/Footer";
import "./Actualité.css";

class Actualite extends Component {
  constructor() {
    super();
    this.state = {
      isAgenda: false,
      isActus: true
    };
  }

  onclickHandlerActus = () => {
    this.setState({
      isAgenda: false,
      isActus: true
    });
  };

  onclickHandlerAgenda = () => {
    this.setState({
      isAgenda: true,
      isActus: false
    });
  };

  render() {
    return (
      <div className="sticky-wrap">
        <NavBar />
        {/*   { image device mobile} */}
        <div className="div-img-nouveaute">
          <svg
            id="Calque_1_nouveaute"
            data-name="Calque 1 nouveaute"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1366 183.84"
          >
            <path
              className="cls-1"
              d="M0,257c40.8-40.13,109.61-96.76,206.61-124.78C407.25,74.28,556.51,188.46,779.43,232c129.36,25.26,324.91,34.82,586.57-58V300H0Z"
              transform="translate(0 -116.16)"
            />
          </svg>
        </div>

        {/*   { image device dsk} */}
        <div className="div-img-nouveaute-bg-dsk p-5 mb-5">
          <img
            className="img-nouveaute-dsk"
            src="/nouveaute-dsk.png"
            alt="nouveaute"
          />
        </div>

        <div className="container div-titre-infospratique p-4 p-lg-5">
          <h1 className="text-center lead titre-infospratique p-2">
            Retrouvez les Actualités de l'école
          </h1>
        </div>

        <div
          className="btn-group mx-auto w-100 mb-4"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className={
              this.state.isActus
                ? "btn btn-info w-100"
                : "btn btn-secondary w-100"
            }
            onClick={this.onclickHandlerActus}
          >
            <p className="btn-name-actu">Actualités</p>
          </button>
          <div className="div-separate"></div>
          <button
            type="button"
            className={
              this.state.isAgenda
                ? "btn btn-info w-100"
                : "btn btn-secondary w-100"
            }
            onClick={this.onclickHandlerAgenda}
          >
            <p className="btn-name-agenda">Agenda</p>
          </button>
        </div>

        {this.state.isActus ? <Actu /> : ""}
        {this.state.isAgenda ? (
          <div className="div-pdf-cantine">
            <Agenda />
          </div>
        ) : (
          ""
        )}
        <div className="sticky-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Actualite;

import React, { Component } from "react";
import "./section-inscription.css";
import { Spinner } from "reactstrap";

let arr = [
  {
    id: 1,
    title: "titre 1",
    description:
      "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression."
  },
  {
    id: 2,
    title: "",
    description: " "
  }
];

class inscriptionPage extends Component {
  constructor() {
    super();
    this.state = {
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      message: "",
      isLoading: false,
      asLoading: false,
      captcha: false
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlerChange(event) {
    console.log(event.target.name);
    switch (event.target.name) {
      case "Nom":
        console.log("Je suis dans la condition name");
        this.setState({ nom: event.target.value });
        break;
      case "Prenom":
        this.setState({ prenom: event.target.value });
        break;
      case "email":
        this.setState({ email: event.target.value });
        break;
      case "tel":
        this.setState({ telephone: event.target.value });
        break;
      case "message":
        this.setState({ message: event.target.value });
        break;
      default:
        break;
    }
  }

  snackbarClose = event => {
    this.setState({ snackbaropen: false });
  };

  handleSubmit(event) {
    event.preventDefault();
    const captcha = document.querySelector("#g-recaptcha-response").value;
    console.log(captcha);
    if (
      this.state.nom === "" ||
      this.state.prenom === "" ||
      this.state.email === "" ||
      this.state.telephone === "" ||
      this.state.message === ""
    ) {
      this.setState({ snackbarmessage: "Veuillez remplir tous les champs." });
      this.setState({ asLoading: true });
    } else if (captcha === "") {
      this.setState({ snackbarmessage: "Veuillez remplir le ReCAPTCHA." });
      this.setState({ asLoading: true });
    } else {
      this.setState({ isLoading: true });
      fetch("http://localhost:3001/inscription", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(this.state)
      })
        .then(res => res.json())
        .then(res => this.setState({ snackbarmessage: res.message }))
        .then(() => this.setState({ isLoading: false }))
        .then(() => this.setState({ asLoading: true }));
    }
  }

  render() {
    return (
      <div>
        <div className="div-titre-section-inscription">
          {/*                     <p className="text-center titre-section-inscription"> Inscription</p>
           */}{" "}
          <svg
            id="Calque_titre_inscription_bottom"
            data-name="Calque titre_inscription_bottom"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1366 183.84"
          >
            <path
              className="cls-titre_inscription"
              d="M0,257c40.8-40.13,109.61-96.76,206.61-124.78C407.25,74.28,556.51,188.46,779.43,232c129.36,25.26,324.91,34.82,586.57-58V300H0Z"
              transform="translate(0 -116.16)"
            />
          </svg>
        </div>

        {/*   { image device dsk} */}
        <div className="div-img-inscription-bg-dsk p-5 mb-5">
          <img className="img-inscription-dsk" src="/inscription-dsk.png" alt="img1" />
        </div>

        {/*{SECTION 1}*/}
        {arr.map((item, index) => (
          <div key={index} className="container container-principal mb-4">
            <div className="div-titre-inscription text-center mb-2">
              <p className="titre-inscription">{item.title}</p>
            </div>
            <div className="div-text-inscription text-justify mb-5">
              <p className="text-inscription">{item.description}</p>
            </div>
          </div>
        ))}

        {/*{SECTION DOCUMENTS ADMINISTRATIFS}*/}

        <div className="div-documents">
          <div className="text-dark text-center p-5">
            <h2>DOCUMENTS ADMINISTRATIFS</h2>
          </div>
          <div>
            <div className="container mx-auto card-deck">
              <div className="card m-3">
                <div className="card-body ">
                  <h5 className="card-title">Documents 1</h5>
                </div>
                <div className="card-footer bg-light">
                  <button
                    className="btn btn-outline-primary btn-block"
                    data-toggle="modal"
                    data-target="#echarpeModal"
                  >
                    Télécharger
                  </button>
                </div>
              </div>

              <div className="card m-3">
                <div className="card-body">
                  <h5 className="card-title">Documents 2</h5>
                </div>
                <div className="card-footer bg-light">
                  <button
                    className="btn btn-outline-primary btn-block"
                    data-toggle="modal"
                    data-target="#coupeModal"
                  >
                    Télécharger
                  </button>
                </div>
              </div>

              <div className="card m-3">
                <div className="card-body">
                  <h5 className="card-title">Documents 3</h5>
                </div>
                <div className="card-footer bg-light">
                  <button
                    className="btn btn-outline-primary btn-block"
                    data-toggle="modal"
                    data-target="#baguetteModal"
                  >
                    Télécharger
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="div-vide-documents"></div>
        </div>

        {/*{SECTION FORMULAIRE}*/}

        <div className="formulaire pb-5">
          <svg
            id="Calque_inscription_form"
            data-name="Calque inscription form"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1366 131"
          >
            <polygon class="cls-form" points="0 0 1366 0 1366 131 0 0" />
          </svg>

          <div className="div-vide-formulaire"></div>
          <div className="text-center mb-5">
            <h2 className="text-white">FORMULAIRE</h2>
          </div>

          <form className="container" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">Nom</div>
                </div>
                <input
                  type="text"
                  name="Nom"
                  placeholder="Nom"
                  className="form-control"
                  onChange={this.handlerChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">Prenom</div>
                </div>
                <input
                  type="text"
                  name="Prenom"
                  placeholder="Prenom"
                  className="form-control"
                  onChange={this.handlerChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="exemple@email.fr"
                  onChange={this.handlerChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text">Tel</div>
                </div>
                <input
                  type="text"
                  name="tel"
                  className="form-control"
                  placeholder="numéro de téléphone"
                  onChange={this.handlerChange}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Votre message"
                rows="3"
                onChange={this.handlerChange}
              ></textarea>
            </div>
            <div className="container-captcha">
              <div
                className="g-recaptcha"
                data-sitekey="6LeY6s4UAAAAAHyzz7lHYZy5L85nAQWj_2doiJ9M"
              ></div>
            </div>
            {this.state.isLoading ? (
              <div className="d-block text-center pb-4 input-submit-inscription">
                <Spinner type="grow" color="warning" />
              </div>
            ) : (
              <div className="d-block text-center pb-4 input-submit-inscription">
                <button className="btn btn-primary" type="submit">
                  Envoyer
                </button>
              </div>
            )}
            {this.state.asLoading ? (
              <div className="alert alert-success" role="alert">
                {this.state.snackbarmessage}
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default inscriptionPage;

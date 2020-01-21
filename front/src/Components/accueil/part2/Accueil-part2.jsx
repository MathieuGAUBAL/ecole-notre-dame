import React, { Component } from 'react';
import './Accueil-part2.css';
import { Button } from 'reactstrap';
import RecupActus from "./actus-recup/RecupActus";
import RecupAgenda from "./agenda-recup/RecupAgenda";

class Part2 extends Component {
    constructor() {
        super();
        this.state = {
            isAgenda: false,
            isActus: true
        }
    }

    onclickHandlerActus = () => {

        this.setState({
            isAgenda: false,
            isActus: true
        })
    }

    onclickHandlerAgenda = () => {
        this.setState({
            isAgenda: true,
            isActus: false
        })
    }

    render() {
        return (
            <div className="container-accueil-part-2">
                <div className="accueil-part-2">
                    <div className="btn-group mx-auto w-100 mb-4  " role="group" aria-label="Basic example">
                        <Button type="button " className={this.state.isActus ? "btn btn-info w-100" : "btn btn-secondary w-100"} onClick={this.onclickHandlerActus}><p className="btn-name-actu">Actualités</p></Button>
                        <div className="div-separate"></div>
                        <Button type="button " className={this.state.isAgenda ? "btn btn-info w-100" : "btn btn-secondary w-100"} onClick={this.onclickHandlerAgenda}><p className="btn-name-agenda">Agenda</p></Button>
                    </div>

                    {this.state.isActus ?
                        <div className="actus">
                            <RecupActus />
                        </div>

                        :
                        ""
                    }

                    {this.state.isAgenda ?
                        <div className="agenda">
                            <RecupAgenda />
                        </div>
                        :
                        ""
                    }
                    <div className="container-button mt-5 pb-5">
                        <a className="font btn-page-actu" href="/Actualité"><button className="btn btn-info btn-lg"> en savoir plus </button></a>

                    </div>
                </div>
               
            </div>

        );

    }

}

export default Part2;
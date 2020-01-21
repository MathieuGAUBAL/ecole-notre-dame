import React, { Component } from "react";
import './section-agenda.css';

let arr = [
    {
        id: 1,
        date: "date",
        title: "titre ",
        description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
        url: "./agenda-default.png",
    }/* ,
    {
        id: 2,
        date: "date",
        title: "titre ",
        description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
        url: "./agenda-default.png",
    },
    {
        id: 3,
        date: "date",
        title: "titre ",
        description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
        url: "./agenda-default.png",
    },
    {
        id: 4,
        date: "date",
        title: "titre ",
        description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
        url: "./agenda-default.png",
    }  */]



class Agend extends Component {

    constructor(){
        super();
        this.state = {
            item : []
        }
    }
    
getAgenda = () => {
 fetch('http://localhost:3001/agenda')
 .then(response => response.json())
 .then(
     (res) => {
         let reversesItems = res.reverse()
        this.setState({
            item: reversesItems
        })
     }
 )
 };
 
    
    componentDidMount() {
        this.getAgenda() ;
    }
        
              
    render() {
        return (
            <div>

                {this.state.item.map((item, index) => (
                    <div key={index} className=" d-flex container-agenda mb-4 mb-4 border container mt-lg-4 p-lg-3 ">

                        <div className="block1-agenda mr-2 ml-3 ">
                            <img className="image-agenda text-center" src={item.url} alt={item.alt} />
                        </div>

                        <div className="block2-agenda p-3">

                            <div className=" block3-agenda mb-2">
                                <p className="titre-agenda mr-3 ">{item.title}</p>
                                <p className="date-agenda ">{item.date}</p>
                            </div>

                            <div>
                                <p className="description-agenda text-justify">{item.description}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Agend;
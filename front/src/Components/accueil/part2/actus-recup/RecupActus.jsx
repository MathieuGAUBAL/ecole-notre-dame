import React from 'react';
import './recupActus.css';


class RecupActus extends React.Component {
    constructor(){
        super();
        this.state = {
            item : []
        }
    }
    
getActualite = () => {
 fetch('http://localhost:3001/actualites')
 .then(response => response.json())
 .then(
     (res) => {
         let reversesItems = res.reverse()
        this.setState({
            item: reversesItems
        })
     }
 )
 .then(() => console.log(this.state.item))
 };
 
    
    componentDidMount() {
        this.getActualite() ;
    }
        
   
   
   
   
   
   
    render(){
    return (
        <div>

            {this.state.item.map((item, index) => index < 3 ?
                <div key={index} className=" d-flex container-agenda mb-4 border  container mt-lg-4 p-lg-3 ">
                    <div className="block1  mr-2 ml-3  ">
                        <img className="image " src={item.url} alt={item.alt} />
                    </div>

                    <div className="block2 p-3">
                        <div className=" block3">
                            <p className="titre mr-3 ">{item.title}</p>
                            <p className="date ">{item.date}</p>

                        </div>
                        <div>
                            <p className="description text-justify">{item.description}</p>
                        </div>
                    </div>

                </div> : "")}
        </div>
    )}
}

export default RecupActus;
import React from "react";
import "./Section-Actu.css";


class Actu extends React.Component {
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
 
 
  render() {
    return (
      <div>
        {/*                 <div className="titre-h1-actualite text-center p-4">
                    <h1>Actualités</h1>
                </div> */}
        {this.state.item.map((item, index) => (
          <div
            key={index}
            className=" d-flex container-agenda mb-4 mb-4 border container mt-lg-4 p-lg-3 "
          >
            <div className="block1-actu mr-2 ml-3 ">
              <a href={item.url}><img
                className="image-actu text-center "
                src={item.url}
                alt={item.alt}
              />
              </a>
            </div>

            <div className="block2-actu p-3">
              <div className=" block3-actu mb-2">
                <p className="titre-actu mr-3 ">{item.title}</p>
                <p className="date-actu ">{item.date}</p>
              </div>

              <div>
                <p className="description-actu text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    );
  }
}

export default Actu;

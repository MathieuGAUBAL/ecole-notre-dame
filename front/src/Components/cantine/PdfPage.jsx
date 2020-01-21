import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import { Document, Page } from 'react-pdf/dist/entry.webpack';



class PdfPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      PDFWidth: null,
      pageNumber: 1,
      numPages: null
    }
    this.myInput = React.createRef()
  }

  componentDidMount() {
    // setting width at initial
    this.setPDFWidth()

    // event listener when window is resized
    window.addEventListener('resize', throttle(this.setPDFWidth, 500))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', throttle(this.setPDFWidth, 500))
  }

  setPDFWidth = () => {
    const width = this.myInput.current.offsetWidth
    this.setState({ PDFWidth: width })
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    console.log(numPages);
    this.setState({ numPages });
  }

  onClickHandleSuivant = () => { 
    if (this.state.pageNumber < this.state.numPages) {
      let add1 = this.state.pageNumber + 1;
      this.setState({
        pageNumber: add1
      })
    } else if(this.state.pageNumber  === this.state.numPages){

      this.setState({
        pageNumber: 1
      })
    } 
  }

  onClickHandlePrecedent = () => {
    let sub1 = 0;

    if (this.state.pageNumber > 1) {
      sub1 = this.state.pageNumber - 1;
      this.setState({
        pageNumber: sub1
      })
     } else if(this.state.pageNumber  === 1){
      sub1 = (-( this.state.pageNumber -  this.state.numPages)+1);
      console.log("current page : ", sub1);
      this.setState({
        pageNumber: sub1
      })
    } 
  }

  render() {
    const { PDFWidth, pageNumber, numPages } = this.state
    return (
      <div ref={this.myInput}>
        <Document file='menus.pdf' onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={PDFWidth} />
        </Document>
        <div className="text-center p-4 w-100">
          <p>Page {pageNumber} of {numPages}</p>
          <div className="d-flex justify-content-center">
            <div className="btnPrecedent p-4">
              <button className="btn btn-info" onClick={this.onClickHandlePrecedent}>précédent</button>
            </div>
            
            <div className="btnSuivant p-4">
              <button className="btn btn-info" onClick={this.onClickHandleSuivant}>suivant</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PdfPage;

import React from 'react';
import './AdminAgenda.css';
import { Redirect, Link } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core';


class agendaAgenda extends React.Component {
  constructor() {
    super();
    this.state = {
      agenda: [],
      title: "",
      description: "",
      date: "",
      fileName: "",
      snackbarOpen: false,
      snackbarMessage: "",
      deleteId: "",
      currentFile: null,
      deleteModalOpen: false,
      putModalOpen: false,
      modifedId: "",
      image_id: "",
      redirectLogOut: false
    }
  }

  handleChange = (event) => {
    switch (event.target.name) {
      case 'title':
        this.setState({ title: event.target.value })
        break;
      case 'description':
        this.setState({ description: event.target.value })
        break;
      case 'date':
        this.setState({ date: event.target.value })
        break;
      case 'file':
        this.setState({ currentFile: event.target.files[0] })
        break;
      default:
        break;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let image_id;
    console.log(this.state.currentFile);
    const data = new FormData();
    data.append('file', this.state.currentFile);

    fetch('http://localhost:3001/api/uploadFile', {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      redirect: 'follow',
      referrer: 'no-referrer',
      body: data
    }).then(res => {
      if(this.state.currentFile === null)
      {
        let agenda = {
          'title': this.state.title,
          'description': this.state.description,
          'date': this.state.date,
          'image_id': 1
        }
        fetch("http://localhost:3001/agenda",
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + localStorage.getItem('token')
          }),
          body: JSON.stringify(agenda),
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(
          (res) => {
            fetch('http://localhost:3001/agenda',
              {
                headers: new Headers({
                  'Content-Type': 'application/json',
                  'authorization': 'Bearer ' + localStorage.getItem('token')
                }),
  
              }
            )
              .then(res => res.json())
              .then(res => this.setState({ agenda: res }))
              .then(
                () => console.log(this.state.agenda)
              )
          }
        )
      }
      else{
        let image = {
          'name': this.state.currentFile.name,
          'url': 'http://localhost:3001/images/'+this.state.currentFile.name,
          'alt': ''
        }
        fetch("http://localhost:3001/image",
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + localStorage.getItem('token')
          }),
          body: JSON.stringify(image),
        })
        .then(res => res.json())
        .then(
          (res) => {
            let agenda = {
              'title': this.state.title,
              'description': this.state.description,
              'date': this.state.date,
              'image_id': res.id
            }
            fetch("http://localhost:3001/agenda",
            {
              method: 'POST',
              headers: new Headers({
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token')
              }),
              body: JSON.stringify(agenda),
            })
            .then(res => res.json())
            .then(res => console.log(res))
            .then(
              (res) => {
                fetch('http://localhost:3001/agenda',
                  {
                    headers: new Headers({
                      'Content-Type': 'application/json',
                      'authorization': 'Bearer ' + localStorage.getItem('token')
                    }),
      
                  }
                )
                  .then(res => res.json())
                  .then(res => this.setState({ agenda: res }))
                  .then(
                    () => console.log(this.state.agenda)
                  )
              }
            )
            .then(
              (res) => {
                this.setState({
                  snackbarOpen: true,
                  snackbarMessage: "Agenda ajouté."
                })
                setTimeout(() => {
                  this.setState({ snackbarOpen: false })
                }, 3000);
              }
            )
          }
        )
      }
    })
  }

  handleOpenDeleteModal = (index) => {
    this.setState({ deleteModalOpen: true })
    this.setState({ deleteId: index })
  }

  handleCloseDeleteModal = (index) => {
    this.setState({ deleteModalOpen: false })
    this.setState({ deleteId: "" })
  }

  handleOpenPutModal = (index) => {
    this.setState({ putModalOpen: true })
    this.setState({ modifedId: index })
  }

  handleClosePutModal = (index) => {
    this.setState({ putModalOpen: false })
    this.setState({ modifedId: "" })
  }

  componentDidMount() {
    const token = {
      token: localStorage.getItem('token')
    }

    fetch("http://localhost:3001/token",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(token),
      })
      .then(res => res.json())
      .then(
        (res) => {
          this.setState(
            {
              isLogged: res.succes,
              redirect: res.succes ? false : true
            });
        }
      )
    fetch('http://localhost:3001/agenda',
      {
        headers: new Headers({
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + localStorage.getItem('token')
        }),

      }
    )
      .then(res => res.json())
      .then(res => this.setState({ agenda: res }))
      .then(
        () => console.log(this.state.agenda)
      )
  }

  deleteagenda = () => {
    this.handleCloseDeleteModal();
    const agenda_id = this.state.agenda[this.state.deleteId].id
    console.log(agenda_id)
    fetch('http://localhost:3001/agenda/' + agenda_id,
      {
        method: 'DELETE',
        headers: new Headers({
          'authorization': 'Bearer ' + localStorage.getItem('token')
        })
      }
    )
      .then(
        () => {
          fetch('http://localhost:3001/agenda',
            {
              headers: new Headers({
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + localStorage.getItem('token')
              }),
            }
          )
          .then(res => res.json())
          .then(res => this.setState({ agenda: res }))
          .then(
            () => console.log(this.state.agenda)
          )
        }
      )
      .then(
        (res) => {
          this.setState({
            snackbarOpen: true,
            snackbarMessage: "Agenda supprimé"
          })
          setTimeout(() => {
            this.setState({ snackbarOpen: false })
          }, 3000);
        }
      )
  }

  putagenda = () => {
    this.handleClosePutModal();
    let agenda = {
      'title': this.state.title,
      'description': this.state.description,
      'date': this.state.date
    }
    let agenda_id = this.state.agenda[this.state.modifedId].id
    console.log(agenda_id)
    fetch("http://localhost:3001/agenda/" + agenda_id,
    {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + localStorage.getItem('token')
        }),
        body: JSON.stringify(agenda),
    })
    .then(
      () => {
        fetch('http://localhost:3001/agenda',
        {
          headers: new Headers({
              'Content-Type': 'application/json',
              'authorization': 'Bearer ' + localStorage.getItem('token')
          }),

        }
        )
        .then(res => res.json())
        .then(res => this.setState({ agenda: res }))
        .then(
          () => console.log(this.state.agenda)
        )
        }
    )
    .then(res => this.setState({ snackbarMessage: "Agenda modifié." }))
    .then(
      (res) => {
        this.setState({ snackbarOpen: true })
        setTimeout(() => {
          this.setState({ snackbarOpen: false })
        }, 3000);
      }
    )
    .then(
      () => {
        const newArrayagenda = this.state.agenda
        newArrayagenda[this.state.modifedId] = {
          id: agenda_id,
          email: this.state.email
        }
        this.setState({ agenda: newArrayagenda })
      }
    )
  }

  logOut = () => {
    this.setState({ redirectLogOut: true })
    localStorage.setItem('token', "")
  }

  render() {
    const { agenda } = this.state
    return (
      <div>
        {this.state.redirect && <Redirect to="/login" />}
        {
          !this.state.redirect &&
          <div>
            <div class="header">
              <a class="nav-trigger" onClick={this.openMenu}><span></span></a>
            </div>
            <div class="side-nav">
              <div class="logo">
                <span>Ecole notre-dame</span>
              </div>
              <nav>
                <ul>
                  <li>
                    <Link to="/admin">
                      <span><i class="fa fa-user"></i></span>
                      <span>Utilisateurs</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/agenda">
                      <span><i class="fa fa-calendar"></i></span>
                      <span>Agenda</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/actualite">
                      <span><i class="fa fa-calendar"></i></span>
                      <span>Actualites</span>
                    </Link>
                  </li>
                  <li>
                    {this.state.redirectLogOut ? <Redirect to="/login" /> : ""}
                    <button type="button" class="btn btn-danger" onClick={this.logOut}>Déconnexion</button>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="main-content">
              <div class="title">
                Agenda
		          </div>
              <div class="main center">
                <div className="sub-title">
                  <h6>Vous pouvez remplir ce formulaire pour ajouter un nouvelle agenda !</h6>
                </div>
                <div className="form">

                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Title</Label>
                      <Input type="text" name="title" placeholder="Titre de l'agenda" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Description</Label>
                      <Input type="textarea" name="description" placeholder="Description de l'agenda" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Date</Label>
                      <Input type="date" name="date" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleFile">Image</Label>
                      <Input type="file" name="file" id="exampleFile" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="button" onClick={this.handleSubmit}>Envoyer</Button>
                  </Form>


                </div>
                <div className="agenda-admin">
                  {agenda.map((item, index) => (
                    <div>
                      <div key={index} className=" d-flex container-agenda-admin mb-4 border  container mt-lg-4 p-lg-3">
                        <div className="block1 mr-2 ml-3 ">
                          {item.image_id ? <img className="image text-center" src={item.url} alt="default" /> : <img className="image text-center" src="http://localhost:3000/agenda-default.png" alt="default" />}
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
                      </div>
                      <button type="button" class="btn btn-primary" onClick={() => this.handleOpenPutModal(index)}>Modifier</button>
                      <button type="button" class="btn btn-danger" onClick={() => this.handleOpenDeleteModal(index)}>Supprimer</button>
                    </div>
                  ))}
                  <Dialog
                    open={this.state.deleteModalOpen}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{"Suppression d'un utilisateur"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Etes vous sur de vouloir supprimer l'agenda ?
          </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleCloseDeleteModal} color="primary">
                        Non
          </Button>
                      <Button onClick={this.deleteagenda} color="primary" autoFocus>
                        Oui
          </Button>
                    </DialogActions>
                  </Dialog>

                  <Dialog open={this.state.putModalOpen} onClose={this.handleClosePutModal} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Modifier un agenda</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Pour modifer cette agenda veuillez saisir tous les informations.
            </DialogContentText>
                      <FormGroup>
                        <Label for="exampleEmail">Title</Label>
                        <Input type="text" name="title" placeholder="Titre de l'agenda" onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText">Description</Label>
                        <Input type="textarea" name="description" placeholder="Description de l'agenda" onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleText">Date</Label>
                        <Input type="date" name="date" onChange={this.handleChange} />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleFile">Image</Label>
                        <Input type="file" name="file" id="exampleFile" onChange={this.handleChange} />
                      </FormGroup>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleClosePutModal} color="primary">
                        Annuler
              </Button>
                      <Button onClick={this.putagenda} color="primary">
                        Modifier
              </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
            </div>

            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.state.snackbarOpen}
              message={this.state.snackbarMessage}
            />

          </div>
        }
      </div>
    );
  }
}

export default agendaAgenda;

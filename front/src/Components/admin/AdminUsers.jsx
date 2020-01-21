import React from 'react';
import './AdminUsers.css'
import { Table } from 'reactstrap';
import { MdDelete } from 'react-icons/md';
import { FaPen, FaPlusCircle, FaPlus } from 'react-icons/fa'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Fab } from '@material-ui/core';
import { Redirect, Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



class AdminUser extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      isLogged: true,
      redirect: false,
      newModalOpen: false,
      deleteModalOpen: false,
      deleteId: "",
      modifedId: "",
      snackbarMessage: "",
      snackbarOpen: false,
      email: "",
      password: "",
      sidebarOpen: false,
      putModalOpen: false,
      redirectLogOut: false
    }
  }

  deleteUser = () => {
    this.handleCloseDeleteModal();
    const user_id = this.state.user[this.state.deleteId].id
    fetch('http://localhost:3001/admin/' + user_id,
    {
      method: 'DELETE',
      headers: new Headers({
        'authorization': 'Bearer ' + localStorage.getItem('token')
      })
    }
    )
    .then(
      () => {
        fetch('http://localhost:3001/admin',
        {
          headers: new Headers({
              'Content-Type': 'application/json',
              'authorization': 'Bearer ' + localStorage.getItem('token')
          }),

        }
        )
        .then(res => res.json())
        .then(res => this.setState({ user: res }))
        .then(
          () => console.log(this.state.user)
        )
        }
    )
    .then(
      (res) => {
        this.setState({ 
          snackbarOpen: true,
          snackbarMessage: "Utilisateur supprimé"
          })
        setTimeout(() => {
          this.setState({ snackbarOpen: false })
        }, 3000);
      }
    )
  }

  handleChangeInput = (event) => {
    switch (event.target.name) {
      case 'email':
          this.setState({ email: event.target.value })
          break;
      case 'password':
          this.setState({ password: event.target.value })
          break;
      default:
          break;
    }
  }

  addUser = () => {
    this.handleCloseNewModal();
    let user = {
      'email': this.state.email,
      'password': this.state.password
    }
    fetch("http://localhost:3001/admin",
    {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + localStorage.getItem('token')
        }),
        body: JSON.stringify(user),
    })
    .then(res => {
      res.json()
      console.log(res)
    })
    .then(
      () => {
        fetch('http://localhost:3001/admin',
        {
          headers: new Headers({
              'Content-Type': 'application/json',
              'authorization': 'Bearer ' + localStorage.getItem('token')
          }),

        }
        )
        .then(res => res.json())
        .then(res => this.setState({ user: res }))
        .then(
          () => console.log(this.state.user)
        )
        }
    )
    .then(res => this.setState({ snackbarMessage: "Utilisateur ajouté." }))
    .then(
      (res) => {
        this.setState({ snackbarOpen: true })
        setTimeout(() => {
          this.setState({ snackbarOpen: false })
        }, 3000);
      }
    )
  }

  putUser = () => {
    this.handleClosePutModal();
    let user = {
      'email': this.state.email,
      'password': this.state.password
    }
    let user_id = this.state.user[this.state.modifedId].id
    console.log(user_id)
    fetch("http://localhost:3001/admin/" + user_id,
    {
        method: 'PUT',
        headers: new Headers({
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + localStorage.getItem('token')
        }),
        body: JSON.stringify(user),
    })
    .then(
      () => {
        fetch('http://localhost:3001/admin',
        {
          headers: new Headers({
              'Content-Type': 'application/json',
              'authorization': 'Bearer ' + localStorage.getItem('token')
          }),

        }
        )
        .then(res => res.json())
        .then(res => this.setState({ user: res }))
        .then(
          () => console.log(this.state.user)
        )
        }
    )
    .then(res => this.setState({ snackbarMessage: "Utilisateur modifié." }))
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
        const newArrayUser = this.state.user
        newArrayUser[this.state.modifedId] = {
          id: user_id,
          email: this.state.email
        }
        this.setState({ user: newArrayUser })
      }
    )
  }

  handleClosePutModal = () => {
    this.setState({ putModalOpen: false })
  }

  handleOpenPutModal = (index) => {
    this.setState({ putModalOpen: true })
    this.setState({ modifedId: index })
  }

  handleCloseDeleteModal = () => {
    this.setState({ deleteModalOpen: false })
  }

  handleOpenDeleteModal = (index) => {
    this.setState({ deleteModalOpen: true })
    this.setState({ deleteId: index })
  }

  handleOpenNewModal = () =>  {
    this.setState({ newModalOpen: true })
  }

  handleCloseNewModal = () => {
    this.setState({ newModalOpen: false })
  }

  openMenu = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
    const menu = document.querySelector('.side-nav')
    if (this.state.sidebarOpen == false) {
      menu.style.display = "block"
    }
    else {
      menu.style.display = "none"
    }
  }

  getData = () => {
    let user = []
    fetch('http://localhost:3001/admin',
    {
      headers: new Headers({
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + localStorage.getItem('token')
      }),

    }
    )
    .then(res => res.json())
    .then((res) => {
      this.setState({ user: res })
    })
  }

  componentDidMount(){
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
              redirect:  res.succes ? false : true
            });
        }
      )
    fetch('http://localhost:3001/admin',
    {
      headers: new Headers({
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + localStorage.getItem('token')
      }),

    }
    )
    .then(res => res.json())
    .then(res => this.setState({ user: res }))
    .then(
      () => console.log(this.state.user)
    )
  }

  logOut = () => {
    this.setState({ redirectLogOut: true })
    localStorage.setItem('token', "")
  }

  render() {
    return (
      <div>
        {this.state.redirect && <Redirect to="/login" />}
        {
          !this.state.redi && 
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
              Utilisateurs
		      	</div>
            <div class="main">
            <Fab color="primary" aria-label="add" onClick={this.handleOpenNewModal}><FaPlus/></Fab>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Action</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.user.map((row, index) => (
                      <tr key={row.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{row.email}</td>
                        <Button variant="contained" color="primary" onClick={() => this.handleOpenPutModal(index)}><FaPen/></Button>
                        <Button variant="contained" color="secondary" onClick={() => this.handleOpenDeleteModal(index)}><MdDelete/></Button>
                        <td>Admin</td>
                      </tr>
                ))}
                </tbody>
              </Table>
            </div>
          </div>

          <Dialog open={this.state.newModalOpen} onClose={this.handleCloseNewModal} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Crée un nouvelle utilisateur</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Pour crée un utilisateur veuillez saisir tous les informations.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Adresse mail"
                type="email"
                fullWidth
                name="email"
                onChange={this.handleChangeInput}
              />
              <TextField
                id="standard-password-input"
                label="Mot de passe"
                type="password"
                autoComplete="current-password"
                fullWidth
                name="password"
                onChange={this.handleChangeInput}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseNewModal} color="primary">
                Annuler
              </Button>
              <Button onClick={this.addUser} color="primary">
                Créer
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={this.state.deleteModalOpen}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">{"Suppression d'un utilisateur"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Etes vous sur de vouloir supprimer l'utilisateur ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCloseDeleteModal} color="primary">
            Non
          </Button>
          <Button onClick={this.deleteUser} color="primary" autoFocus>
            Oui
          </Button>
        </DialogActions>
      </Dialog>



      <Dialog open={this.state.putModalOpen} onClose={this.handleClosePutModal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Crée un nouvelle utilisateur</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Pour modifer cette utilisateur veuillez saisir tous les informations.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Adresse mail"
              type="email"
              fullWidth
              name="email"
              onChange={this.handleChangeInput}
            />
            <TextField
              id="standard-password-input"
              label="Mot de passe"
              type="password"
              autoComplete="current-password"
              fullWidth
              name="password"
              onChange={this.handleChangeInput}
            />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClosePutModal} color="primary">
                Annuler
              </Button>
              <Button onClick={this.putUser} color="primary">
                Modifier
              </Button>
            </DialogActions>
          </Dialog>


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

export default AdminUser;

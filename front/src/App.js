import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Accueil from "./Components/accueil/Accueil";
import ActPedago from "./Components/act-pedago/ActPedago";
/* import Agenda from "./Components/agenda/Agenda"; */
import Apel from "./Components/apel/Apel";
import Cantine from "./Components/cantine/Cantine";
import Historique from "./Components/historique/Historique";
import InfPrat from "./Components/inf-prat/InfPrat";
import Pastorale from "./Components/pastorale/Pastorale";
import Inscription from "./Components/inscription/Inscription";
import Actualité from "./Components/actualité/Actualité";
import LogIn from "./Components/login/LogIn"
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminUsers from './Components/admin/AdminUsers'
import AdminAgenda from './Components/admin/AdminAgenda/AdminAgenda'
import AdminActu from './Components/admin/AdminActualites/AdminActu'

class App extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/Activité" component={ActPedago} />
          <Route exact path="/Apel" component={Apel} />
          <Route exact path="/Cantine" component={Cantine} />
          <Route exact path="/Historique" component={Historique} />
          <Route exact path="/Info" component={InfPrat} />
          <Route exact path="/Pastorale" component={Pastorale} />
          <Route exact path="/Inscription" component={Inscription} />
          <Route exact path="/Actualité" component={Actualité} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/admin" component={AdminUsers} />
          <Route exact path="/admin/agenda" component={AdminAgenda} />
          <Route exact path="/admin/actualite" component={AdminActu} />
        </Switch>
      </div>
    );
  }
}

export default App;

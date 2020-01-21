import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import ResponsiveCard from "@material-ui/core/Card"
import "./LogIn.css";
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'



class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            token: "",
            open: false,
            snackbarMessage: "",
            isConnected: false,
            redirect: false
        }
    }

    handleChange = (event) => {
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

    handleSubmit = (event) => {
        if (
            this.state.email === "" ||
            this.state.password === ""
        ) {
            this.setState({ snackbarMessage: "Veuillez remplir tous les champs." })
            this.setState({ open: true })
            setTimeout(
                () => {
                    this.setState({ open: false })
                },
                3000
            )
        }
        else {
            fetch("http://localhost:3001/login",
                {
                    method: 'POST',
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    body: JSON.stringify(this.state),
                })
                .then(res => res.json())
                .then(
                    (res) => {
                        this.setState({ token: res.token, snackbarMessage: res.msg })
                    }
                )
                .then(
                    () => {
                        if(this.state.token === undefined)
                        {
                            this.setState({ open: true })
                        }
                        else
                        {
                            this.setState({ open: true })
                            localStorage.setItem('token', this.state.token)
                            this.setState({ isConnected: true })
                            setTimeout(
                                () => {
                                    this.setState({ redirect: true })
                                },
                                3000
                            )
                        }
                    }
                )
        }
    }

    render() {
        return (
            <>
            {this.state.redirect && <Redirect exact to="/admin" />}
                <div className="container-signin">
                    <Grid item xs={12} sm={6}>
                        <ResponsiveCard>
                            <form>
                                <CardHeader title="Connectez-vous" subheader="Pour rentrer dans la partie Administrateur du site" />
                                <CardContent>
                                    <TextField
                                        label="Enter votre email"
                                        fullWidth
                                        required
                                        name="email"
                                        onChange={this.handleChange}
                                    />
                                    <TextField
                                        label="Enter votre mot de passe"
                                        fullWidth
                                        required
                                        type="password"
                                        name="password"
                                        onChange={this.handleChange}
                                    />
                                </CardContent>
                                <CardActions style={{ justifyContent: "space-between" }}>
                                    {this.state.isConnected ?
                                    <CircularProgress />
                                    :
                                    <Button type="button" color="primary" onClick={this.handleSubmit}>
                                        SE CONNECTER
                                    </Button>
                                    }
                                </CardActions>
                            </form>
                        </ResponsiveCard>
                    </Grid>
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={this.state.open}
                        message={this.state.snackbarMessage}
                    />
                </div>
            </>
        );
    }
}

export default (Login);
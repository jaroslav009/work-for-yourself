import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.signLogin = this.signLogin.bind(this);
        this.usernameAction = this.usernameAction.bind(this);
        this.passwordAction = this.passwordAction.bind(this);
    }

    signLogin() {
        axios.post('http://localhost:3000/login', {
            name: this.state.username,
            password: this.state.password
        })
            .then(function (response) {
                console.log('success')
            })
            .catch(function (error) {
                console.log('error ' + error)
            }); 
    }

    usernameAction(val) {
        this.setState({username: val.target.value})
        console.log(this.state.username)
    }

    passwordAction(val) {
        this.setState({password: val.target.value});
        console.log(this.state.password)
    }

    render() {
        return (
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label className="sr-only">Email address</label>
                    <input type="text" id="inputEmail" value={this.state.username} onChange={this.usernameAction} className="form-control" placeholder="Email address" required/>
                    <label className="sr-only">Password</label>
                    <input type="password" id="inputPassword" value={this.state.password} onChange={this.passwordAction} className="form-control" placeholder="Password" required/>
                </form>
                <button className="btn btn-lg btn-primary btn-block" onClick={this.signLogin}>Sign in</button>
            </div>
        )
    }
}

export default Login;
import React, { Component } from 'react'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props);
        state = [];
    }

    componentDidMount() {
        axios.get('/login')
            .then(res => {
                console.log(res)
            })
    }

    render() {
        return (
            <div className="container">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="text" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>

                    <button class="btn btn-lg btn-primary btn-block">Sign in</button>
                </form>
            </div>
        )
    }
}

export default Login;
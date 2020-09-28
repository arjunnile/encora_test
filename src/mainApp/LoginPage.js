import React, { Component } from 'react';
import './LoginPage.scss';

const userNameValue = "encora";
const passwordValue = 'encora1234';

class LoginComponent extends Component {
    state = {
        username: '',
        password: '',
        errorUsername: false,
        errorPassword: false,
        errorLoginBox: ''
    }

    handleInputChange = (event) => { // Handle on change event of username and password field.
        let previousStateValues = this.state;
        previousStateValues[event.target.name] = event.target.value;

        this.setState({ previousStateValues });
    }

    onLoginClick = () => { // On click login button to validate username and password for procced to app login.
        let { errorUsername, errorPassword, errorLoginBox, username, password } = this.state;

        if (username && password) { // Check username and password valid values.
            if (username === userNameValue && password === passwordValue) { // Check username and password is matched with credentials
                this.props.onSuccessLogin();
            }
            else {
                errorLoginBox = 'Incorrect credentials ! Please enter valid username and password.'
                errorUsername = false;
                errorPassword = false;

                this.setState({
                    errorUsername,
                    errorPassword,
                    errorLoginBox
                });
            }
        }
        else {
            errorLoginBox = '';
            if (!username)
                errorUsername = true;

            if (!password)
                errorPassword = true;

            this.setState({
                errorUsername,
                errorPassword,
                errorLoginBox
            })
        }
    }

    render() {
        return (
            <div className="login-root">

                <div className="row login-field-box">
                    <div className="col-12">
                        <div>
                            <label className="label-cs">Username</label>
                            <label className="label-cs">*</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="username"
                                onChange={this.handleInputChange}
                            />
                            {this.state.errorUsername && <div className="error-msg-cs">*Username is required</div>}
                        </div>

                        <div>
                            <label className="label-cs">Password</label>
                            <label className="label-cs">*</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                onChange={this.handleInputChange}
                            />
                            {this.state.errorPassword && <div className="error-msg-cs">*Password is required</div>}
                        </div>

                        <div className="error-msg-cs">{this.state.errorLoginBox}</div>

                        <div>
                            <button
                                className="btn btn-block login-btn"
                                type="submit"
                                onClick={this.onLoginClick}>Login</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default LoginComponent;
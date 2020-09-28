import React, { Component } from 'react';
import LoginComponent from './LoginPage';
import NotesComponent from './NotesPage';

class MainApp extends Component {
    state = {
        isLoginPage: true,
    };

    onSuccessLogin = () => { // Get the login success event then redirect to next notes page
        this.setState({ isLoginPage: false });
    }

    onLogout = () => { // Logout the application and redirect to login page again
        this.setState({ isLoginPage: true });
    }

    render() {
        return (
            <div className="container-fluid h-100">
                {this.state.isLoginPage ?
                    <LoginComponent onSuccessLogin={this.onSuccessLogin} />
                    :
                    <NotesComponent />
                }

            </div>
        );
    }
}

export default MainApp;
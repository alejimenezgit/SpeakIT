import React, { Component } from "react";
import apiClient from "../services/users";
export const AuthContext = React.createContext();

export const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {({ handleLogin, handleRegister, handleLogout, user, isLoggedIn }) => {
            return (
              <Comp
                handleLogin={handleLogin}
                handleRegister={handleRegister}
                handleLogout={handleLogout}
                user={user}
                isLoggedIn={isLoggedIn}
                {...this.props}
              />
            );
          }}
        </AuthContext.Consumer>
      );
    }
  };
};

class AuthProvider extends Component {
    state = {
        isLoggedIn: false,
        user: null,
        isLoading: true,
    };

    componentDidMount() {
        apiClient
            .whouseris()
            .then((user) => {
                console.log(user, 'estas conectado');
                this.setState({
                    isLoading: false,
                    isLoggedIn: true,
                    user,
                });
            })
            .catch((error) => {
                console.log('no estas conectado');
                this.setState({
                    isLoading: false,
                    isLoggedIn: false,
                    user: null,
                });
            });
    }

    handleLogin = ({ email, password }) => {
        apiClient
            .getUserLogin({ email, password })
            .then(({ data: user }) => {
                this.setState({
                    isLoggedIn: true,
                    user,
                });
            })
            .catch((error) => {
                this.setState({
                    isLoggedIn: false,
                    user: null,
                });
            });
    };

    handleRegister = ({ name, surnames, email, password }) => {
        apiClient
            .getUserRegister({ name, surnames, email, password })
            .then(({ data: user }) => {
                console.log({ data: user })
                this.setState({
                    isLoggedIn: true,
                    user,
                });
            })
            .catch((error) => {
                this.setState({
                    isLoggedIn: false,
                    user: null,
                });
            });
    };

    handleLogout = () => {
        console.log('entrada en logout')
        apiClient
            .logout()
            .then(() => {
            this.setState({
                isLoggedIn: false,
                user: null,
            });
            })
            .catch((error) => {
            console.log(error);
            });
        };

    render() {
        const { children } = this.props;
        const { isLoggedIn, user } = this.state;
        return (
        <AuthContext.Provider
            value={{
            isLoggedIn,
            user,
            handleLogin: this.handleLogin,
            handleRegister: this.handleRegister,
            handleLogout: this.handleLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
        );
    }
}

export default AuthProvider;

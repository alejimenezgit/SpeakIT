import React, { Component } from "react";
import apiClient from "../services/users";
export const AuthContext = React.createContext();

export const withAuth = (Comp) => {
  return class WithAuth extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {({ handleLogin, handleRegister, handleLogout, user, isLoggedIn, isRegister }) => {
            return (
              <Comp
                handleLogin={handleLogin}
                handleRegister={handleRegister}
                handleLogout={handleLogout}
                user={user}
                isLoggedIn={isLoggedIn}
                isRegister={isRegister}
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
        isRegister: false,
    };

    componentDidMount() {
        apiClient
            .whouseris()
            .then((user) => {
                console.log('user asdasdf',user)
                this.setState({
                    isLoading: false,
                    isLoggedIn: true,
                    user,
                });
            })
            .catch((error) => {
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
                    isRegister: false,
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

    handleRegister = ({ name, surnames, email, password, nativeLanguages, comunications, match }) => {
        apiClient
            .getUserRegister({ name, surnames, email, password, nativeLanguages, comunications, match })
            .then(({ data: user }) => {
                this.setState({
                    isLoggedIn: true,
                    user,
                    isRegister: true
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
        const { isLoggedIn, user, isRegister } = this.state;
        return (
        <AuthContext.Provider
            value={{
            isLoggedIn,
            user,
            isRegister,
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

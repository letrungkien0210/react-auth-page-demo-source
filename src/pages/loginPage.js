import React from 'react';
import { LoginComponent } from 'react-auth-page';

class LoginPage extends React.Component{
  render(){
    const authUrl = process.env.REACT_APP_AUTH_URL ? process.env.REACT_APP_AUTH_URL: '';
    const tokenUrl = process.env.REACT_APP_TOKEN_URL ? process.env.REACT_APP_TOKEN_URL : 'https://novacloud.eu.auth0.com/oauth/token';
    const clientId = process.env.REACT_APP_CLIENT_ID ? process.env.REACT_APP_CLIENT_ID : 'mhjoWWbu6ByAfXKt73jMqNMjoFpA8vyQ';
    const scope = process.env.REACT_APP_SCOPE ? process.env.REACT_APP_SCOPE : 'email';
    
    const params = {
      logoTitle: "Login Page",
      boxMessage: "Sign in to start your session",
      userCredentialsEnabled: true,
      authProviders: ["facebook", "google", "gitlab"],
      authUrl,
      tokenUrl,
      redirectUrl: "/content",
      clientId,
      scope
    };
  
    return(
      <LoginComponent {...params}/>
    );
  }
}

export default LoginPage;

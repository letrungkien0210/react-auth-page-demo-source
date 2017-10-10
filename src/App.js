import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/loginPage';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={LoginPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;

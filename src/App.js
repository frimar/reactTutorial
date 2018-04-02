import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import TestComp from './MyComps/TestComp';
import Calculator from './MyComps/Calculator';
import PresenceToggle from './components/PresenceToggle';
import constants from './const';

const cbFun = () => {
  return 'hier stehen die Scopes...';
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 3
    };
    this.handleTempChange = this.handleTempChange.bind(this);

  }

  handleTempChange(newTemp) {
    console.log('temp changed: ', newTemp);

    this.setState({
      temp: newTemp
    })
  }


  render() {
    return (
      <div className="App" >
        <br />
        <ul className="flex flex-column flex-1 list-unstyled">

          <PresenceToggle
            myStyle={'presenceToggle'}
            person={
              {
                firstName: 'Heinz',
                lastName: 'Schmitt',
                presence: constants.statusPresent
              }
            }
            scopeDescriptions={
              cbFun()
            }
            txtLastChange='Bisher keine Änderungshistorie'
            iconName={constants.iconPersonToBeClarified}
          />
        </ul>
        <hr />
        <Calculator className="myCalc" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload!
        </p>
        <TestComp callback={this.handleTempChange} />
      </div>
    );
  }
}

export default App;

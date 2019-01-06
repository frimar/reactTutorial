import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CoordSystem from './components/CoordSystem';
import CoordSystemContainer from './containers/CoordSystemContainer';
import InputArea from './components/InputArea';
import logo from './logo.svg';
import './App.css';
import './style.css';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    </div>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <InputArea callback="this.inputChanged"></InputArea>
    <CoordSystemContainer />
    <CoordSystem width="500px" height="500px" backgroundColor="#cccccc" />
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;

// import React, { Component } from 'react';

// class App extends Component {

//   constructor(props) {
//     super(props);

//     this.inputChanged = this.inputChanged.bind(this);
//   }

//   inputChanged() {

//   }

//   render() {
//     return (
//       <div className="App" >
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <InputArea callback="this.inputChanged"></InputArea>
//         <CoordSystemContainer />
//         <CoordSystem width="500px" height="500px" backgroundColor="#cccccc"/>
//       </div>
//     );
//   }
// }

// export default App;

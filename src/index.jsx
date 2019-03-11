import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";

// JSON import
import navFile from './navigation.json';

// Component imports
import Navigation from './components/navigation';
import Information from './components/information';

const App = () => (
  <div className="app">
    <Navigation routes={navFile} />
    <Information routes={navFile} />
  </div>
);

ReactDOM.render((
  <HashRouter>
    <App />
  </ HashRouter>
), document.body);

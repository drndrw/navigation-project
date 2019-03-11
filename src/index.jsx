import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";

// JSON import
import navFile from './navigation.json';

// Component imports
import Navigation from './components/navigation';

const App = () => (
  <div className="app">
    <Navigation routes={navFile} />
  </div>
);

ReactDOM.render((
  <HashRouter>
    <App />
  </ HashRouter>
), document.body);

import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Redirect, Switch} from "react-router-dom";

// JSON import
import navFile from './navigation.json';

// Component imports
import CityInformation from './components/city-information';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {this.props.routes.cities.map((city) => (
            <Route exact path={'/' + city.section} render={(props) => <CityInformation section={city.section} label={city.label} timeZone={city.timeZone} routes={this.props.routes} />} />
          ))}
          <Route render={() => <Redirect to={'/' + this.props.routes.cities[0].section} />} />
        </Switch>
      </ HashRouter>
    );
  }
}

ReactDOM.render((
  <App routes={navFile} />
), document.body);

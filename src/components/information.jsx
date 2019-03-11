import React from 'react';
import {Route, Redirect, Switch} from "react-router-dom";
import CityInformation from "./city-information";

class Information extends React.Component {

  render () {
    return (
      <Switch>
        {this.props.routes.cities.map((city) => (
          <Route exact path={'/' + city.section} render={(props) => <CityInformation section={city.section} label={city.label} />} />
        ))}
        <Route render={() => <Redirect to={'/' + this.props.routes.cities[0].section} />} />
      </Switch>
    );
  }
}

export default Information;

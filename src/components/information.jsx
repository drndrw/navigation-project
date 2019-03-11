import React from 'react';
import {Route} from "react-router-dom";
import CityInformation from "./city-information";

class Information extends React.Component {

  render () {
    return (
      <div className="information">
        {this.props.routes.cities.map((city) => (
          <Route exact path={'/' + city.section} render={(props) => <CityInformation section={city.section} label={city.label} />} />
        ))}
      </div>
    );
  }
}

export default Information;

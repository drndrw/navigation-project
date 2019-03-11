import React from 'react';
import {Route} from "react-router-dom";

class Information extends React.Component {

  render () {
    return (
      <div className="information">
        {this.props.routes.cities.map((city) => (
          <Route exact path={'/' + city.section} render={(props) => <h1>{city.label}</h1>} />
        ))}
      </div>
    );
  }
}

export default Information;

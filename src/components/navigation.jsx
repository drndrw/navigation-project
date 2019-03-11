import React from 'react';
import {NavLink} from "react-router-dom";

class Navigation extends React.Component {

  render () {
    return (
      <div className="navigation">
        <ul>
          {this.props.routes.cities.map((city) => (
            <li><NavLink exact to={city.section} className="nav-link" activeClassName="nav-active">{city.label}</NavLink></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Navigation;

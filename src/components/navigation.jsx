import React from 'react';
import {Link} from "react-router-dom";

class Navigation extends React.Component {

  componentDidMount() {
    console.log(this.props.routes.cities);
  }

  renderNav() {
    let navItems = this.props.routes.cities.map(city => {
      <p>{city.section}</p>
    });
    return navItems;
  }

  render () {
    return (
      <div className="navigation">
        <ul>
          {this.props.routes.cities.map((city) => (
            <li><Link to={city.section}>{city.label}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Navigation;

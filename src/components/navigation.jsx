import React from 'react';
import {NavLink} from "react-router-dom";

class Navigation extends React.Component {

  componentDidMount() {
    this.updateLine(this.props.activeRoute, true);
  }

  updateLine(element, initial=false) {
    if (initial) {
      var location = document.getElementById(element).getBoundingClientRect();
    } else {
      var location = document.getElementById(element.target.id).getBoundingClientRect();
    }
    let leftOffset = document.getElementById('nav-line').getBoundingClientRect().left
    document.getElementById('link-select').setAttribute('x1', location.left - leftOffset);
    document.getElementById('link-select').setAttribute('x2', location.right - leftOffset);
  }

  render () {
    return (
      <div className="navigation">
        <ul>
          {this.props.routes.cities.map((city) => (
            <li><NavLink exact to={'/' + city.section} id={city.section} onClick={this.updateLine} className="nav-link" activeClassName="nav-active">{city.label}</NavLink></li>
          ))}
        </ul>
        <svg height="1" width="100%">
          <line id="nav-line" x1="0" y1="0" x2="100%" y2="0" />
          <line id="link-select" x1="0" y1="0" x2="0" y2="0" />
        </svg>
      </div>
    );
  }
}

export default Navigation;

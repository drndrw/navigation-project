import React from 'react';
import {NavLink} from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x1: 0,
      x2: 0,
      x1Previous: 0,
      x2Previous: 0,
      leftOffset: 0
    };
    this.updateLine = this.updateLine.bind(this);
  }

  updateLine(e, animate=true) {
    let location = document.getElementById(e.target.id).getBoundingClientRect();
    let leftOffset = document.getElementById('nav-line').getBoundingClientRect().left
    this.setState({
      x1Previous: this.state.x1,
      x2Previous: this.state.x2,
      x1: location.left,
      x2: location.right,
      leftOffset: leftOffset
    }, () => {
      console.log(this.state.x1);
      console.log(this.state.x2);
      console.log(this.state.leftOffset);
    });
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

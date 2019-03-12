import React from 'react';
import {NavLink} from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: null,
      x1: 0,
      x2: 0,
      leftOffset: 0
    };
    this.updateLine = this.updateLine.bind(this);
  }

  componentDidMount() {
    this.updateLine(this.props.activeRoute, true);
    window.addEventListener("resize", this.resizeLine.bind(this));
  }

  resizeLine() {
    let leftOffset = document.getElementById('nav-line').getBoundingClientRect().left;
    let location = document.getElementById(this.state.activeSection).getBoundingClientRect();
    this.setState({x1: location.left - leftOffset, x2: location.right - leftOffset, leftOffset: leftOffset});
  }

  updateLine(element, initial=false) {
    let leftOffset = document.getElementById('nav-line').getBoundingClientRect().left;
    if (initial) {
      let location = document.getElementById(element).getBoundingClientRect();
      this.setState({activeSection: element, x1: location.left - leftOffset, x2: location.right - leftOffset, leftOffset: leftOffset});
    } else {
      let location = document.getElementById(element.target.id).getBoundingClientRect();
      this.setState({activeSection: element.target.id, x1: location.left - leftOffset, x2: location.right - leftOffset, leftOffset: leftOffset});
    }
  }

  moveLine(activeSection) {
    let location = document.getElementById(activeSection).getBoundingClientRect();
    let leftOffset = document.getElementById('nav-line').getBoundingClientRect().left;
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
          <line id="link-select" x1={this.state.x1} y1="0" x2={this.state.x2} y2="0" />
        </svg>
      </div>
    );
  }
}

export default Navigation;

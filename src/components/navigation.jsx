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
      leftOffset: 0,
      willAnimate: false
    };
    this.updateLine = this.updateLine.bind(this);
  }

  componentDidMount() {
    console.log(this.props.activeRoute);
    this.updateLine(this.props.activeRoute, false);
  }

  updateLine(element, animate=true) {
    if (animate) {
      var location = document.getElementById(element.target.id).getBoundingClientRect();
    } else {
      var location = document.getElementById(element).getBoundingClientRect();
    }
    let leftOffset = document.getElementById('nav-line').getBoundingClientRect().left
    this.setState({
      x1Previous: this.state.x1,
      x2Previous: this.state.x2,
      x1: location.left,
      x2: location.right,
      leftOffset: leftOffset,
      willAnimate: animate
    }, () => {
      console.log(this.state.x1Previous);
      console.log(this.state.x2Previous);
      console.log(this.state.x1);
      console.log(this.state.x2);
      console.log(this.state.leftOffset);
      console.log('ANIMATE:' + this.state.willAnimate);
      if (this.state.willAnimate) {
        console.log('will animate here');
      } else {
        document.getElementById('link-select').setAttribute('x1', this.state.x1 - this.state.leftOffset);
        document.getElementById('link-select').setAttribute('x2', this.state.x2 - this.state.leftOffset);
      }
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

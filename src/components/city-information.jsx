import React from 'react';
import Navigation from './navigation'
import Time from './time';

class CityInformation extends React.Component {

  componentDidMount() {
    document.title = this.props.label;
  }

  componentDidUpdate() {
    document.title = this.props.label;
  }

  render () {
    return (
      <div className='app'>
        <Navigation routes={this.props.routes} activeRoute={this.props.section} />
        <h1>{this.props.label}</h1>
        <Time timeZone={this.props.timeZone} />
      </div>
    );
  }
}

export default CityInformation;

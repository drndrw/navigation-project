import React from 'react';
import Navigation from './navigation'

class CityInformation extends React.Component {

  componentDidMount() {
    document.title = this.props.label;
  }

  componentDidUpdate() {
    document.title = this.props.label;
  }

  render () {
    return (
      <div className='app' id={this.props.section}>
        <Navigation routes={this.props.routes} activeRoute={this.props.section} />
        <h1>{this.props.label}</h1>
      </div>
    );
  }
}

export default CityInformation;

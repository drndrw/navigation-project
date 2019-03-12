import React from 'react';

class CityInformation extends React.Component {

  componentDidMount() {
    document.title = this.props.label;
  }

  componentDidUpdate() {
    document.title = this.props.label;
  }

  render () {
    return (
      <div className='information' id={this.props.section}>
        <h1>{this.props.label}</h1>
      </div>
    );
  }
}

export default CityInformation;

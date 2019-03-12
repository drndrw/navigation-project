import React from 'react';

class Time extends React.Component {

  render () {
    var date = new Date().toLocaleString("en-US", {timeZone: this.props.timeZone}).toString();
    return (
      <em>{date}</em>
    );
  }
}

export default Time;

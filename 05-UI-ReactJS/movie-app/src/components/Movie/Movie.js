import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    const {title,duration,year} = this.props.info;
    return (
      <div>
        <h3>{title}</h3>
        <h4>{year}</h4>
        <p>{duration}</p>
      </div>
    )
  }
}

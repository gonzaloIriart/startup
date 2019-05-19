import React, { Component } from 'react';
import Movie from '../Movie/Movie';

export default class MovieList extends Component {
  render() {
    
    return (
      <div>
        {this.props.movies.map((item,index) =>(
          <Movie key = {item.title} id = {index} info = {item} editMovie = {this.props.editMovie} deleteMovie = {this.props.deleteMovie}/>
        ))}
      </div>
    )
  }
}

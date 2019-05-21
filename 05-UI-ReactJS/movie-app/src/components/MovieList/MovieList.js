import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';

class MovieList extends Component {
    
    render(){
      const {movies} = this.props.movies;
    return movies.map((movie,index)=>{
        return(
          <Movie info = {movie} key = {movie.title} id = {index}/>
        )
      })    
  }
  
}
const mapStateToProps = (state) =>{
  return { movies: state.movies };
}

export default connect(mapStateToProps)(MovieList);

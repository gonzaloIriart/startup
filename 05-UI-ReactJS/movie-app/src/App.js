import React from 'react';
import './App.css';
import NewMovieForm from './components/NewMovieForm/NewMovieForm';
import MovieList from './components/MovieList/MovieList';


class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
    movies : [{"title":"Titanic","duration":150,"year":1995}]
  };
  this.handleAddNewMovie = this.handleAddNewMovie.bind(this);

}
 
 handleAddNewMovie(title,year,duration){  
  const movie = {
    title,
    year,
    duration
  }

  //console.log(this.state.movies);
  this.setState((state)=>({
    movies : [...state.movies, movie]
    })
  );
};
  
render(){
  return (
    <div className="App">
      <header className="App-header">
        Movie List App
      </header>
      <NewMovieForm addNewMovie = {this.handleAddNewMovie}/>
      <MovieList movies = {this.state.movies}/>  
    </div>
    );
  }
}

export default App;

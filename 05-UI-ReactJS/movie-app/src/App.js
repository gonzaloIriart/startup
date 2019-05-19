import React from 'react';
import './App.css';
import NewMovieForm from './components/NewMovieForm/NewMovieForm';
import MovieList from './components/MovieList/MovieList';


class App extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
    movies : []
  };

  this.handleAddNewMovie = this.handleAddNewMovie.bind(this);
  this.handleEditMovie = this.handleEditMovie.bind(this);
  this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
}
 
 handleAddNewMovie(title,year,duration){  
  const movie = {
    title,
    year,
    duration
  }

  const newMovieArray = this.state.movies.slice();
  newMovieArray.push(movie);
  this.setState({movies : newMovieArray})
};


handleEditMovie(title,year,duration,index){     
      const editedMovie = {
      title,
      year,
      duration
    }

    const newMovieArray = this.state.movies.slice()
    newMovieArray.splice(index,1,editedMovie);
    this.setState({movies : newMovieArray})
};

handleDeleteMovie(index){

  const newMovieArray = this.state.movies.slice()

  if(index !== -1){
    newMovieArray.splice(index,1) 
  }
  
  this.setState({movies : newMovieArray})
};
  
render(){
  return (
    <div className="App">
      <header className="App-header">
        Movie List App
      </header>
      <NewMovieForm addNewMovie = {this.handleAddNewMovie}/>
      <MovieList movies = {this.state.movies} editMovie = {this.handleEditMovie} deleteMovie = {this.handleDeleteMovie}/>  
    </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import NewMovieForm from './components/NewMovieForm/NewMovieForm';
import MovieList from './components/MovieList/MovieList';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    movies : []
  }
}

  handleAddNewMovie(title,year,duration){    
    //this.state.movies.push({'title':title,'year': year,'duration':duration})
    const movie = {
      title,
      year,
      duration
    }
    console.log(movie);
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        Movie List App
      </header>
      <NewMovieForm addNewMovie = {this.handleAddNewMovie}/>
      <MovieList />  
    </div>
    );
  }
}

export default App;

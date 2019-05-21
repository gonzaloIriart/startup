import React from 'react';
import './App.css';
import NewMovieForm from '../NewMovieForm/NewMovieForm';
import MovieList from '../MovieList/MovieList';

class App extends React.Component {
 

render(){
  
  return (
    <div className="App">
      <header className="App-header">
        Movie List App
      </header>
      <NewMovieForm />
      <MovieList  />  
    </div>
    );
  }
}



export default App;

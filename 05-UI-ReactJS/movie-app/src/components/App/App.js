import React from 'react';
import './App.css';
import NewMovieForm from '../NewMovieForm/NewMovieForm';
import MovieList from '../MovieList/MovieList';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const newMovieForm = () => {
  return <NewMovieForm />
}

const movieList = () =>{
  return <MovieList />
  
}

class App extends React.Component {
 

render(){
  
  return (
    <div className="App">
      <header className="App-header">
        Movie List App
      </header>
     
      <BrowserRouter>
      <nav>
        <Link className="navlink" to='/'>Add New Movie</Link>
        <Link className="navlink" to='/movielist'>Movie List</Link>
      </nav>
        <div>
          <Route path='/' exact component = {newMovieForm}/>
          <Route path='/movielist' component = {movieList}/>
        </div>
      </BrowserRouter>
    </div>
    );
  }
}



export default App;

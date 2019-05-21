import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewMovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          year: 0,
          duration: 0
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddNewMovie = this.handleAddNewMovie.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleAddNewMovie= e => {
          e.preventDefault();
          this.props.addMovie(this.state.title,this.state.year,this.state.duration)
          this.setState({
            title:'',
            year:'',
            duration:''
        })
      }


  render() {
    return (
        <div>
            <form onSubmit={this.handleAddNewMovie}>
        <label>
            Title: 
            <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange} />
        </label>
        <label>
            Year: 
            <input
            name="year"
            type="number"
            value={this.state.year}
            onChange={this.handleInputChange} />
        </label>
        <label>
            Duration: 
            <input
            name="duration"
            type="number"
            value={this.state.duration}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (title,duration,year) => {
      dispatch({
        type: 'ADD_MOVIE',
        payload: {'title':title,
          'duration':duration,
          'year':year}})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewMovieForm)
import React, { Component } from 'react'

export default class NewMovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          year: 0,
          duration: 0
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        
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
          this.props.addNewMovie(this.state.title,this.state.year,this.state.duration)
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

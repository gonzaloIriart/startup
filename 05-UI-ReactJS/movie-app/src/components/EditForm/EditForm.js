import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          year: 0,
          duration: 0
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEditMovie = this.handleEditMovie.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleEditMovie= e => {
          e.preventDefault();
          this.props.editMovie(this.state.title,this.state.year,this.state.duration,this.props.id)
          this.setState({
            title:'',
            year:'',
            duration:''
        })
      }


  render() {
    return (
        <div>
            <form onSubmit={this.handleEditMovie}>
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
    editMovie: (title,duration,year,id) => {
      dispatch({
        type: 'EDIT_MOVIE',
        payload: {'title':title,
          'duration':duration,
          'year':year,
          'id':id}})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm)
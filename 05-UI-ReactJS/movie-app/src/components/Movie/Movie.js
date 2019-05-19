import React, { Component } from 'react'
import EditForm from '../../components/EditForm/EditForm';

export default class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibility:false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility(){
    this.setState({
    visibility: !this.state.visibility
    })
    console.log(this.state.visibility)
    }

  render() {
    const {title,duration,year} = this.props.info;
    if(!this.state.visibility){
      return (
        <div>
          <h3>{title}</h3>
          <h4>{year}</h4>
          <p>{duration}</p>
          <button onClick = {this.toggleVisibility} >edit</button>
          <button onClick = {this.props.deleteMovie} >delete</button>
          
        </div>
      )
    }else{
      return (
        
        <div>
          <h3>{title}</h3>
          <h4>{year}</h4>
          <p>{duration}</p>
          <button onClick={this.toggleVisibility}>Cancel edit</button>
          <button onClick={this.props.deleteMovie}>delete</button>
         < EditForm editMovie = {this.props.editMovie} id = {this.props.id}/>
          
        </div>
      )
    }
  }
}

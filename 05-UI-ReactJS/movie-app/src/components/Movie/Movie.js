import React, { Component } from 'react'
import EditForm from '../../components/EditForm/EditForm';
import { connect } from 'react-redux';

class Movie extends Component {
  constructor(props){
    super(props);
    this.state = {
      visibility:false
    }
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(){
    this.props.deleteMovie(this.props.id)
  }
  toggleVisibility(){
    this.setState({
    visibility: !this.state.visibility
    })
    
    }

  render() {
    
    const {title,duration,year,id} = this.props.info;
    if(!this.state.visibility){
      return (
        <div>
          <h3>{title}</h3>
          <h4>{year}</h4>
          <p>{duration}</p>
          <button onClick = {this.toggleVisibility} >edit</button>
          <button onClick = {this.handleDelete} >delete</button>
          
        </div>
      )
    }else{
      return (
        
        <div>
          <h3>{title}</h3>
          <h4>{year}</h4>
          <p>{duration}</p>
          <button onClick={this.toggleVisibility}>Cancel edit</button>
          <button onClick={this.handleDelete}>delete</button>
         < EditForm  id = {id}/>
          
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (id) => {
      dispatch({
        type: 'DELETE_MOVIE',
        payload: id})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
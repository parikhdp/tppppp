import React, { Component } from 'react'

export class TaskItem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div style={{display:"flex" , justifyContent:"space-between"}}>
          <a href="/" className="btn btn-sm" style={{backgroundColor: "red", color: "white"}}>Delete</a> 
          <a href="/" className="btn btn-sm" style={{backgroundColor: "green", color: "white"}}>Mark Complete</a> 
          </div>
          </div>
          </div>
        </div>
    )
  }
}

export default TaskItem
import React, { Component } from 'react';
import TaskItem from './TaskItem';

class Task extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <div className="container my-3">
          <h1 className="text-center">Tasks to be accomplished</h1>
          <div className="row">
            <div className="col-md-4">
              <TaskItem title="Task 1" description="Finish DA" />
            </div>
            <div className="col-md-4">
              <TaskItem title="Task 2" description="Finish DA" />
            </div>
            <div className="col-md-4">
              <TaskItem title="Task 3" description="Finish DA" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;

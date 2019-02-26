import React, { Component } from 'react';
import Task from '../Task';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  renderTasks() {
    return this.props.tasks.map((t) => {
      return <Task index={this.props.index} moveRight={this.props.moveRight} {...t} />
    });
  }

  render() {
    return (
      <div className="board">{this.renderTasks()}</div>
    );
  }
}

export default Board;


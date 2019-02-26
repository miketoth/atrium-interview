import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className="task">
          <span
            className="left-arrow"
            role="img"
            onClick={() => this.props.moveLeft(this.props.id)}
            aria-label="unarchive">
            &#11013;
          </span>
        <span>{this.props.name}</span>
          <span
            className="right-arrow"
            role="img"
            onClick={() => this.props.moveRight(this.props.id, this.props.index)}
            aria-label="unarchive">
            &#10145;
          </span>
      </div>
    );
  }
}

/**
 *
          <span
            className="close-button"
            role="img"
            aria-label="unarchive"
            onClick={() => this.props.moveTodo(this.props.id)}>
          &#128229;
          </span>
 * */

export default Task;

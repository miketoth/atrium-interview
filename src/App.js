import React, { Component } from 'react';
import Board from './components/Board';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        [{ id: 0, name: 'task1'}, { id: 1, name: 'task2'}],
        [{id: 2, name: 'task3'}],
        [{id: 4, name: 'task4'}],
      ]
    }
  }

  renderBoards() {
    return this.state.data.map((b, index) => {
      return <Board index={index} moveRight={(id) => this.moveRight(id)} tasks={b} />
    });
  }

  moveRight(id, parent) {
    console.log(parent);
    const found = this.state.data[parent].find((element) => {
      return element.id === id;
    });

    if(found) {
      const outBoard = this.state.data[parent].filter((element) => {
        return element.id !== id;
      });
      this.state.data[parent] = outBoard;

      console.log(parent, this.state.data, found);
      if(this.state.data.length > parent) {
        this.state.data[parent+1].push(found);
      }
    }

    this.setState({
      data: this.state.data
    });
  }

  moveLeft(id) {
    this.state.data.forEach((board, index) => {
      const found = board.find((element) => {
        return element.id === id;
      });

      if(found) {
        // remove
        // move to index-1 if it exists
      }
    });
  }

  render() {
    return (
      <div className="board-container">
      {this.renderBoards()}
      </div>
    );
  }
}

export default App;

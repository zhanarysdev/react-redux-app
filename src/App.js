import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/book-list'

class App extends Component {
  render() {
    return (
      <div className="App">
       <BookList />
      </div>
    );
  }
}

export default App;

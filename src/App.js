import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <div className="App">
          <NavBar/>
          <Search/>
          <Main/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ArticleContainer from './containers/Article.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to DruHeUI</h2>
        </div>
        <div className="Container">
          <ArticleContainer />
        </div>
      </div>
    );
  }
}

export default App;

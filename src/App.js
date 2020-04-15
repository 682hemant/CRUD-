import React, { Component } from 'react';

import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ol>
          <li>Heyyou!! add you want to add</li>
          
        </ol>
        <Persons />
      </div>
    );
  }
}

export default App;

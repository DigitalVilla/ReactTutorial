import React, { Component } from 'react';
import Header from './Header'
import Contacts from './Contacts'

class App extends Component {


  render() {
    return (
      <div className="App" >
        <Header text="Contacts App" />
        <Contacts />
      </div>
    );
  }
}

export default App;

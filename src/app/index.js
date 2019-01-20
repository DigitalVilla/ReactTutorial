import React, { Component } from 'react';
import Header from './components/Header'
import Contacts from './components/Contacts'
import {Provider} from './Context'

class App extends Component {

  render() {
    return (
        <Provider>
            <div className="App" >
                <Header text="Contacts App" />
                <Contacts />
            </div>
        </Provider>
    );
  }
}

export default App;

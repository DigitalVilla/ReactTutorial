import React, { Component } from 'react';
import Header from './react/components/Header'
import Contacts from './react/components/Contacts'
import {Provider} from './react/Context'

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

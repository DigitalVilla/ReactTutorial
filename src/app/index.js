import React, { Component } from 'react';
import Header from './react/components/Header'
import About from './react/pages/About'
import Contacts from './react/pages/Contacts'
import NotFound from './react/pages/NotFound'
import { Provider } from './react/Context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header text="Contacts App" />
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts} />
                                <Route exact path="/about" component={About} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;

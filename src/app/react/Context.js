import React, { Component } from 'react'
import {API} from '../js/utility'
const Context = React.createContext();

const reducer = (state, action) => { 
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter((c) => c.id !== action.payload)
            }
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case "SHOW_FORM":
            return {
                ...state,
                newContact: action.payload
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: 
        [
          
        ],
        newContact: false,
        dispatch : action => this.setState(state => reducer (state,action))
    };

componentDidMount() {
    API("https://jsonplaceholder.typicode.com/users")
    .then(res => this.setState({contacts:res}))
}

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
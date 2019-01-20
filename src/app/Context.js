import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => { 
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter((c) => c.id !== action.payload)
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: "001",
                name: "Macarena Hevia",
                email: "Hevia@email.com",
                phone: "4034325672",
            },
            {
                id: "002",
                name: "Roxanne Howard",
                email: "Howard@email.com",
                phone: "5876345623",
            },
            {
                id: "003",
                name: "Trevor LeBlanc",
                email: "LeBlanc@email.com",
                phone: "4034525644",
            },
            {
                id: "004",
                name: "Troy Fournier",
                email: "Fournier@email.com",
                phone: "4037471667",
            },
            {
                id: "005",
                name: "Omar Villanueva",
                email: "Villanueva@email.com",
                phone: "4037771212",
            }
        ],
        dispatch : action => this.setState(state => reducer (state,action))
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
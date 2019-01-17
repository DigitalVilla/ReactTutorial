import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {
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
        ]
    };

    deleteContact = (id) => {
        this.setState(
            {contacts: this.state.contacts.filter (cont => {
                return cont.id !== id
            })}
        )
    }

    render() { 
        const { contacts } = this.state;
        return (
            <div>
                {
                    contacts.map((cont) => {
                        return (<Contact key={cont.id}
                            deleteHandler={this.deleteContact.bind(this, cont.id)}
                            name={cont.name}
                            email={cont.email}
                            phone={parseInt(cont.phone)} />)
                    })
                }
            </div>
        )
    }
}

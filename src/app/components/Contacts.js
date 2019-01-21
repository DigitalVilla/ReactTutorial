import React from 'react'
import Contact from './Contact'
import { Consumer } from '../Context'
import NewContact from '../components/NewContact'

const Contacts = () => {
    return (
        <Consumer>
            {value => {
                const { contacts, newContact } = value;
                return (
                    <React.Fragment>
                        {newContact && <NewContact />}
                        {
                            contacts.map((cont) => {
                                return (<Contact key={cont.id}
                                    id={cont.id}
                                    name={cont.name}
                                    email={cont.email}
                                    phone={parseInt(cont.phone)} />)
                            })
                        }
                    </React.Fragment>
                )
            }}
        </Consumer>
    )
}

export default Contacts;
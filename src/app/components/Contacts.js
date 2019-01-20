import React from 'react'
import Contact from './Contact'
import { Consumer } from '../Context'

const Contacts = () => {
    return (
        <Consumer>
            {value => {
                const { contacts } = value;
                return (
                    <React.Fragment>
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
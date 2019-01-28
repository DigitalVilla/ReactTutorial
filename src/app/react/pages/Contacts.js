import React from 'react'
import Contact from '../components/Contact'
import NewContact from '../components/NewContact'
import { Consumer } from '../Context'

const Contacts = (props) => {


    const showForm = (dispatch, e) => {
        dispatch({ type: 'SHOW_FORM', payload: true })
    }


    return (
        <Consumer>
            {value => {
                const { contacts, newContact, dispatch } = value;
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
                          {newContact && <NewContact />}
                        {!newContact &&
                            <div className="contact flexCenter">
                                <h3> Add New Contact</h3>
                                <button onClick={showForm.bind(this, dispatch)}>
                                    <i className="fas fa-plus-circle" style={{ color: "#3688ae" }} />
                                </button>
                            </div>
                        }
                    </React.Fragment>
                )
            }}
        </Consumer>
    )
}

export default Contacts;
import React, { Component } from 'react'
import { Consumer } from '../Context'

class NewContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, phone, email } = this.state;

        const newContact = {
            id: "" + ~~(1000 + (9999 + 1 - 1000) * Math.random()),
            name,
            phone,
            email
        }
        dispatch({ type: 'ADD_CONTACT', payload: newContact})
        this.closeForm(dispatch);
    };

    closeForm = (dispatch, e) => {
        dispatch({ type: 'SHOW_FORM', payload: false}) 
    }

    render() {
        const { name, email, phone } = this.state;
        const style = {
            fontSize: "1.8rem",
        }
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <form className="contact" onSubmit={this.onSubmit.bind(this, dispatch)}>
                            <h3 className="NewCont">
                                <div>
                                    Name: <input name="name" onChange={this.onChange} type="text" value={name} placeholder="Enter Name..." />
                                </div>
                                <div>
                                    <button type="submit" value="text" style={{ marginRight: ".8rem", }}>
                                        <i style={{ ...style, color: "#00cc99" }} className="fas fa-check-circle" />
                                    </button>
                                    <button onClick={this.closeForm.bind(this, dispatch)} 
                                    type="reset" value="text" style={{ marginRight: ".5rem" }} >
                                        <i onClick={null} className="fas fa-times-circle" style={style} />
                                    </button>
                                </div>
                            </h3>
                            <ul>
                                <li>Email: <input name="email" onChange={this.onChange} type="text" value={email} placeholder="Enter Email..." /></li>
                                <li>Phone: <input name="phone" onChange={this.onChange} type="text" value={phone} placeholder="Enter Phone..." /></li>
                            </ul>
                        </form>
                    )
                }}
            </Consumer>
        )
    }
}
export default NewContact
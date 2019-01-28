import React, { Component } from 'react'
import { Consumer } from '../Context'
import InputBox from '../utils/InputBox'
import { isNumber, isEmpty } from '../../js/utility'
import {withRouter} from 'react-router-dom'

class NewContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, phone, email } = this.state;

        new Promise((res, rej) => {
            // check errors
            res(this.validate(name, phone, email))
        }).then((errors) => {
            
            if (!isEmpty(errors)) {
                this.setState({errors}) 
                return;
            }
            
            const newContact = {
                id: "" + ~~(1000 + (9999 + 1 - 1000) * Math.random()),
                name,
                phone,
                email
            }
            dispatch({ type: 'ADD_CONTACT', payload: newContact })

            //Clear
            this.setState({
                name: '',
                email: '',
                phone: '',
                errors: {}
            })

            console.log(this.props.history);
            // this.props.history.push('/about');
            
        })
    };

    closeForm = (dispatch, e) => {
        dispatch({ type: 'SHOW_FORM', payload: false })
    }

    validate(name, phone, email) {
        const errors = {}
        if (name === "" || name.length < 1)
            errors.name = "Name is required";
        if (email === "" || email.length < 1)
            errors.email = "Email is required";
        if (phone === "" || phone.length !== 10)
            errors.phone = "Phone must be 10 digits with no symbols or spaces";
        else if (!isNumber(phone))
            errors.phone = "Please enter a valid number";
        return errors
    }

    render() {
        const { errors, name, email, phone } = this.state;
        const style = {
            fontSize: "1.8rem",
        }
        
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <form className="contact" onSubmit={this.onSubmit.bind(this, dispatch)}>
                            <h3 className="flexCenter">
                                <div>
                                    <InputBox error={errors.name} label="Name: " name="name" onChange={this.onChange} value={name} placeholder="Enter Name..." />
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
                                <li> <InputBox error={errors.email} label="Email: " name="email" onChange={this.onChange} type="email" value={email} placeholder="Enter Email..." /></li>
                                <li><InputBox error={errors.phone} label="Phone: " name="phone" onChange={this.onChange} value={phone} placeholder="Enter Phone..." /></li>
                            </ul>
                        </form>
                    )
                }}
            </Consumer>
        )
    }
}
export default withRouter(NewContact);
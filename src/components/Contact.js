import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            showInfo: false
        }
    }

    formatPhone(phone) {
        return phone.split("").map((n, i) => {
            n = i === 0 ? '(' + n : i === 3 ? ') ' + n : i === 6 ? ' - ' + n : n;
            return n
        })
    }

    toggleShowInfo = (name,e) => {
        this.setState({showInfo: !this.state.showInfo})
        // console.log(name,e.target);
        
    }

    render() {
        const { name, email, phone, deleteHandler } = this.props;
        return (
            <div className="contact">
                <h3>{name}
                    <i onClick={this.toggleShowInfo.bind(this,name)} className="fas fa-sort-down" />
                    <i onClick={deleteHandler} className="fas fa-times" />
                </h3>
                {this.state.showInfo && (
                <ul>
                    <li>Email: {email}</li>
                    <li>Phone: {this.formatPhone(phone+"")}</li>
                </ul>)}
            </div>
        )
    }
}

Contact.defaultProps = {
    name: 'Full Name',
    email: 'No Email',
    phone: 'No  Phone'
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
  deleteHandler: PropTypes.func.isRequired
}

// optionalArray: PropTypes.array,
// optionalBool: PropTypes.bool,
// optionalFunc: PropTypes.func,
// optionalNumber: PropTypes.number,
// optionalObject: PropTypes.object,
// optionalString: PropTypes.string,
// optionalSymbol: PropTypes.symbol,
export default Contact;
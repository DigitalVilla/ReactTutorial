import React from 'react'
import { Consumer } from '../Context'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <Consumer>
            {value => {
                return (
                    <header>
                        <div className="container flexCenter">
                            <h1> {props.text || 'Header'}</h1>
                            <div className="header-links flexCenter">
                                <Link to="/">
                                    <i className="fas fa-home" style={{ color: "#eee" }} />
                                </Link>
                                <Link to="/other">
                                    <i className="fas fa-compass" style={{ color: "#eee" }} />
                                </Link>
                                <Link to="/about">
                                    <i className="fas fa-question" style={{ color: "#eee" }} />
                                </Link>
                            </div>
                        </div>
                    </header>
                )
            }}
        </Consumer>
    )
}

export default Header

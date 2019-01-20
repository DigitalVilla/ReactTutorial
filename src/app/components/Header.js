import React from 'react'

const Header = (props) => {
    const Styles = {
        // color: "#f0F",
        // fontFamily: "Arial"
    }

    return (
        <header>
            <h1 style={Styles}> {props.text || 'Header'}</h1>
        </header>
    )
}

export default Header

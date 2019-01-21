import React from 'react'
import {Consumer} from '../Context'

const Header = (props) => {

    const showForm = (dispatch,e) => {
        dispatch({type:'SHOW_FORM', payload:true})
    }

    return (
        <Consumer>
            {value => {
                const {dispatch} = value;
                return (
                    <header>
                        <div className="container">
                            <h1> {props.text || 'Header'}</h1>
                            <button onClick={showForm.bind(this, dispatch)}>
                                <i className="fas fa-plus-circle" style={{color:"#eee"}}/>
                            </button>
                        </div>
                    </header>
                )
            }}
        </Consumer>
    )
}

export default Header

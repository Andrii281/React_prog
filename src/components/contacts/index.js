import React from 'react';
import Contact from '../contact'

const Contacts = (contacts) => {
    return(
        contacts.props.map( (contact, key) => {
            return(
                <li key = {key + contact}>
                <Contact contact = {contact}/>
                </li>
            )
        })
    )
}

export default Contacts;
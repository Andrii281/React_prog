import React, { Component } from 'react';

class Contact extends Component{
    state = {
        curentState: 'addInfoHiden',
        stateGen: () => {
            this.setState((state) => {
                return{
                    curentState: this.state.curentState === 'addInfoHiden' ? 'addInfoActive' : 'addInfoHiden',
            }})
        },
        }

    render(){
        return(
            <div className = 'contact' onClick = {this.state.stateGen}>
                {this.props.contact.lastName}
                <div className = {this.state.curentState}>
                    <p>name: {this.props.contact.firstName}</p>  
                    <p>phone: {this.props.contact.phone}</p>
                    <p>gender {this.props.contact.gender}</p>
                </div>
            </div>
        )
    }
}

export default Contact;
import React, { Component } from 'react'

export default class AddContact extends Component {
  render() {
    return (
      <div>
        <input  
        type="email"
        onChange={(e) => {this.props.setEmail (e.target .value)}} />

        <input 
        type="password"
         onChange={(e) => {this.props.setName(e.target.value)}} />

        <button 
        onClick={()=> {
             this.props.addContact(

               this.props.user.name,
               this.props.user.email 
               
             )
        }}>Login</button>
      </div>
    )
  }
}

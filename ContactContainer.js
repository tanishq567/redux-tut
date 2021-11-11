import React, { Component } from 'react'
import {connect} from 'react-redux'
import { setName ,setEmail,addContact} from '../Action/ContactAction'
import AddContact from '../Components/AddContact'

 class ContactContainer extends Component {
    render() {
          console.log(this.props)
        return (
            <div>
                <AddContact {...this.props}/>
            </div>
        )
    }
}
export const mapStateToProps=(store)=> {
return{
    user:store.ContactReducer
}
}
export const mapDispatchToProps=(dispatch)=>{
    return{
        setEmail:(email)=>{
            dispatch(setEmail(email))
        },
        setName:(name)=>{
            dispatch(setName(name))
        },
        addContact:(name,email)=>{
            dispatch(addContact(name,email))
        }
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactContainer)
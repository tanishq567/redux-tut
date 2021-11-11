import {SET_EMAIL,SET_NAME} from '../Constants/ContactConstant.js'
export function setName(name){
    return{
        type:SET_NAME,
        payload:name
    }
}
export function setEmail(email){
    return{
        type:SET_EMAIL,
        payload:email
    }
}
export function addContact(name,email) {
    return ()=>{
   
    
    fetch("https://reqres.in/api/login " , {
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            email:email,
            password:name
        })
    }).then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson)
        alert("inserted successfully")
    })
    .catch((error) => {
        console.log(error);
    });
}
}
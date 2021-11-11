import {SET_EMAIL,SET_NAME,ADD_CONTACT} from '../Constants/ContactConstant.js'

const initial_state={
    name:"",
    email:""
}
export function ContactReducer (state=initial_state,action){
    switch(action.type){
        case SET_EMAIL:
            return state={...state,email:action.payload}
            case SET_NAME:
    
        return state={...state,name:action.payload}
         default: return state;

    }
}
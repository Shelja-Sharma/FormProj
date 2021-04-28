import React from 'react'
import { ActionType } from '../ActionType'

let initialvalue = {
    address: []
}


const AddressReducer = (state = initialvalue,action)=>{
    // console.log("address reducer",action.payload )
    switch (action.type) {
        case ActionType.PLACE_ADDRESS:
            console.log("address in side reducer")
            return ({
                ...state,
                address:action.payload
            }
        )
            
        default:
           return state;
    }

}

export default AddressReducer
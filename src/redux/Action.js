import { ActionType } from "./ActionType"

export const RegisterAction = (payload)=>{
    return{
        type:ActionType.REGISTER,
        payload
    };
}

export const LogOutAction = ()=>{
    return{
        type:ActionType.LOGOUT
    };
}

export const AddItemAction = (payload)=>{
    return{
        type:ActionType.ADD_ITEM,
        payload
    };
}

export const RemoveItemAction = (payload)=>{
    return{
        type:ActionType.REMOVE_ITEM,
        payload
    };
}

//increment action
export const IncrementItemAction = (payload)=>{
    return{
        type:ActionType.INCREMENT_ITEM,
        payload
    };
}

//decrement action
export const DecrementItemAction = (payload)=>{
    return{
        type:ActionType.DECREMENT_ITEM,
        payload
    };
}


//add address

export const AddressAction = (payload)=>{
    return{
        type:ActionType.PLACE_ADDRESS,
        payload
    }
}

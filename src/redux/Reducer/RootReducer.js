import React from 'react'
import { combineReducers } from 'redux'
import AddressReducer from './AddressReducer'

import DataReducer from './DataReducer'
import AuthReducer from './Reducer'

const RootReducer = combineReducers({
    authRedu:AuthReducer,
    dataRedu:DataReducer,
    addressRedu:AddressReducer
})

export default RootReducer

import {combineReducers } from "redux"
import cakeReducer from './Cakes/CakeReducer'
import iceCreamReducer from './Icecream/IceReducers'

const rootReducer= combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer;
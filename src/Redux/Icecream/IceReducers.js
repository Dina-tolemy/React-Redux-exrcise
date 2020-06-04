import {BUY_ICECREAM} from './IceTypes'

const inititalState ={
    numOfIcecream:50
}

const IceCreamReducer=(state= inititalState,action)=>{

    switch(action.type){

        case BUY_ICECREAM: return{
            ...state,
            numOfIcecream: state.numOfIcecream -1
        }
        default: return state
    }
}

export default IceCreamReducer;
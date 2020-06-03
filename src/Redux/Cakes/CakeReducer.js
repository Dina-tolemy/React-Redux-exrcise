import {BUY_CAKE} from './CakeTypes'

const inititalState ={
    numOfCakes:10
}

const CakeReducer=(state= inititalState,action)=>{

    switch(action.type){

        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes -1
        }
        default: return state
    }
}

export default CakeReducer;
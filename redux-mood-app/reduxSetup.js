INITIAL_STATE = { feeling : null }
const countReducer = ( state=INITIAL_STATE, action ) =>{
    switch(action.type){
        case 'HAPPY':
            return {...state, feeling: action.payload }
        case 'SAD':
            return {...state, feeling: action.payload }
        case 'ANGRY':
            return {...state, feeling: action.payload }
        case 'CONFUSED':
            return {...state, feeling: action.payload }

        default :
            return state
    }

}
const store = Redux.createStore(countReducer);
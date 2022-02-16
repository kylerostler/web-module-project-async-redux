import * as types from './action-types'

const initialFacts = []

function factsReducer(state = initialFacts, action) {
    switch (action.type) {
        case types.ADD_NEW_FACT:
            return [...state, action.payload]
        default:
            return state
    }
}

export default factsReducer;
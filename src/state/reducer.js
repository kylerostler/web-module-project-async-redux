import * as types from './action-types'

const initialFacts = []

function facts (state = initialFacts, action)  {
    switch (action.type) {
        case types.ADD_NEW_FACT:
            return action.payload
        default:
            return state
    }
}

export default facts;
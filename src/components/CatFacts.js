import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import Fact from './Fact'

export class CatFacts extends React.Component {
    render () {
        return (
            <div id="catfacts">
                <h2>Cat Facts Here:</h2>
                <Fact />
            </div>
        )
    }
}

export default connect(state => state, actionCreators)(CatFacts)
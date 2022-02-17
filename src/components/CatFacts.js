import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import Fact from './Fact'

export class CatFacts extends React.Component {
    render () {
        const { facts , getFactFromApi } = this.props
        console.log(this.props)
        return (
            <div id="catfacts">
                <h2>Cat Facts Here:</h2>
                    <Fact getFactFromApi={getFactFromApi} key={Date.now()} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        state: state,
        getFactFromApi: actionCreators.getFactFromApi
    })
}

export default connect(mapStateToProps)(CatFacts)
import React from 'react'
import { connect } from 'react-redux'

export  class Fact extends React.Component {
    render() {
        const { facts, getFactFromApi } = this.props
        console.log(this.props)
        return (
            <div>
                <button onClick={getFactFromApi()}> Click here for a fact! </button>
                <p>{}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        state: state
    })
}

export default connect(mapStateToProps)(Fact)
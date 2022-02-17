import React from 'react'

export default class Fact extends React.Component {
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
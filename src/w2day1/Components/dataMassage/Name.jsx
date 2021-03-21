import React, { Component } from 'react'

export default class Name extends Component {
    render() {
        return (
            <div style={{fontSize:30, marginLeft:50}}>
                {this.props.name}
            </div>
        )
    }
}

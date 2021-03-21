import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <h2 className="cardTitle">{this.props.name}</h2>
                <img  src={this.props.url} alt="" />
            </div>
        )
    }
}

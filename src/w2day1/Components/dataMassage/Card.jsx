import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div style={{fontSize:30,marginLeft:50}}>
                name: {this.props.name}<br/>
                birthday: {this.props.birthday}<br/>
                favorite meats: {this.props.favoriteMeats}<br/>
                favorite fish: {this.props.favoriteFish}
                <div><br/></div>
            </div>
        )
    }
}

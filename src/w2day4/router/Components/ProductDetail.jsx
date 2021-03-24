import React, { Component } from 'react'
import productDetails from '../store'
import { Link } from 'react-router-dom'
import NotFound from './NotFound'
export default class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            products: productDetails
        }
    }
    render() {
        if (this.state.id > this.state.products.length) {
            return <NotFound />
        }

        else {
            return (
                <div key={this.state.products[this.state.id - 1].id} className="card">
                    <div>{this.state.products[this.state.id - 1].title}</div>
                    <div><img src={this.state.products[this.state.id - 1].imageUrl} alt="img" /></div>
                    <div>Price: {this.state.products[this.state.id - 1].price}</div>
                    <div>Size: {this.state.products[this.state.id - 1].size}</div>
                    <Link to={'/products'}>
                        <button>Back</button>
                    </Link>
                </div>
            )
        }
    }
}

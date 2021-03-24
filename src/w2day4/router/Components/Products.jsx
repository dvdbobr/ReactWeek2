import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import productDetails from '../store'
export default class Products extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        this.setState({ products: productDetails })

    }
    render() {
        return (
            <div>
                {
                    this.state.products.map(p => {
                        return <Link key={p.id} to={`/products/${p.id}`}>{p.title}</Link>
                    })
                }
            </div>

        )
    }
}

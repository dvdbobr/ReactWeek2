import axios from 'axios'
import React, { Component } from 'react'

export default class ChuckNorris extends Component {
    state = { joke: '', categories: [], categoryJoke: '' }
    getJoke = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/random')
        this.setState({ joke: response.data.value })
        console.log(response.data.value);
    }
    getCategories = async () => {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories')
        this.setState({ categories: response.data })
        console.log(response.data);
    }
    getCategoryJoke = async (category) => {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        this.setState({ categoryJoke: response.data.value })
        console.log(response.data.value);
    }
    render() {
        return (
            <div>
                <button onClick={this.getJoke}>RADNDOM JOKE</button>
                <div>{this.state.joke}</div>
                <button onClick={this.getCategories}>GET CATEGORIES</button>
                <div>
                    {
                        this.state.categories.map(category => {
                            return <button key={category} onClick={() => { this.getCategoryJoke(category) }}>{category}</button>
                        })
                    }
                </div>

                <div>
                    {this.state.categoryJoke}
                </div>
            </div>
        )
    }
}

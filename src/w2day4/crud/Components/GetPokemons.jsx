import React, { Component } from 'react'
import axios from 'axios'
import endpoint from '../api.jsx'
import Card from './Card.jsx'
export default class GetPokemons extends Component {
    state = {
        data: [],
        name: '',
        picUrl: '',
        type: '',
        pokemon: {},
    }
    getPokemons = async () => {
        const response = await axios.get(endpoint + 'pokemons')
        this.setState({ data: response.data })
        console.log(response.data);
    }
    inputsHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        //console.log(e.target.name, e.target.value)
    }
    componentDidMount() {
        this.getPokemons()
    }
    createPokemon = () => {
        const pokemon = {
            name: this.state.name,
            picUrl: this.state.picUrl,
            type: this.state.type
        };
        axios.post(endpoint + 'pokemons', pokemon)
            .then(res => {
                console.log(res);
                console.log(res.data);
            }).then(
                this.getPokemons
            )
    }
    removePokemon = (id) => {
        const removeArr = [...this.state.data].filter(p => p.id !== id)
        this.setState({ data: removeArr })
        axios.delete(endpoint + 'pokemons/' + id)
    }
    updatePokemon = (id, name, picUrl, type) => {
        console.log(id, name, picUrl, type);
        let index = null;
        this.state.data.forEach((p, i) => {
            if (p.id === id)
                index = i
        })
        const newData = this.state.data;
        const pokemon = this.state.data[index];
        pokemon.name = name;
        pokemon.picUrl = picUrl;
        pokemon.type = type;
        newData.splice(index, 1, pokemon)
        this.setState({ data: newData })
        axios.put(endpoint + 'pokemons/' + id, pokemon)

    }

    render() {
        //console.log(this.state.data);

        return (
            <div className="container">
                < div  className="createDiv">
                    <label>Name: </label>
                    <input type="text" name="name" onChange={this.inputsHandler} />
                    <label>PicUrl: </label>
                    <input type="text" name="picUrl" onChange={this.inputsHandler} />
                    <label>Type: </label>
                    <input type="text" name="type" onChange={this.inputsHandler} />
                    <button className="createBtn" onClick={this.createPokemon}>CREATE POKEMON</button>
                </div>
                {
                    <div className="cards">
                        {
                            this.state.data.map(p => {
                                return <Card key={p.id}
                                    name={p.name}
                                    picUrl={p.picUrl}
                                    type={p.type}
                                    id={p.id}
                                    removePokemon={this.removePokemon}
                                    updatePokemon={this.updatePokemon}
                                />
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

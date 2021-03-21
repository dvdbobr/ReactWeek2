import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
export default class Avatars extends Component {
    state = {
        relevantData: [],
        filterAvatars: [],
        input: ''
    }
    getUsers = async () => {
        const response = await axios.get(`https://randomuser.me/api/?results=9`)
        //this.setState({ joke: response.data.value })
        console.log(response.data.results);
        let filterData = []
        response.data.results.map(user => {
            filterData.push({
                name: user.name.first + ' ' + user.name.last,
                picture: user.picture.large
            })
        })
        this.setState({ relevantData: filterData })
    }
    changeInputHander = (e) => {
        console.log(e.target.value);
        this.setState({
            input: e.target.value,
        });
    };
    componentDidMount() {
        this.getUsers()
    }
    onClickSearchHandler = () => {
        let input = this.state.relevantData.filter((p) => {
            //console.log(p);
            return p.name.includes(this.state.input);
        });
        console.log(input);
        this.setState({ filterAvatars: input });
    };
    render() {
        //let filter = relevantData.filter(u => u.name.includes(typedValue));
        let Display = this.state.filterAvatars.map(u => {
            return <Card key={u.name} name={u.name} url={u.picture} />
        })
        return (
            <div style={{ width: '100vw', height: '100vh' }}>
                <div className="searchBar">
                    <input value={this.state.input} onChange={this.changeInputHander} />
                    <button onClick={this.onClickSearchHandler}>Search</button>
                </div>
                <div className="searchContainer">
                    {Display}
                </div>
                <div className="container">
                    {
                        this.state.relevantData.map(u => {
                            return <Card key={u.name} name={u.name} url={u.picture} />
                        })
                    }
                </div>
            </div>

        )
    }
}

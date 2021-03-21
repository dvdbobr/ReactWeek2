import React, { Component } from 'react'
import Name from './Name'
import data from './Data'
import Card from './Card'
export default class DataMassage extends Component {
    state = { people: data.data, names: [], modifiedPeople: [] }

    getNames = () => {
        console.log(this.state.people);
        const names = this.state.people.map(person => {
            return person.name
        })
        console.log(names);
        this.setState({ names: names })
        return names
    }
    bornBefore90s = () => {
        // const age = parseInt(this.state.people[0].birthday.split('-').splice(2))
        // console.log(age);
        const ninetys = []
        this.state.people.map(person => {
            if (parseInt(person.birthday.split('-').splice(2)) < 1990)
                ninetys.push(person)
        })
        console.log(ninetys);
        this.setState({ modifiedPeople: ninetys })
    }
    componentDidMount() {
        this.getNames()
        this.bornBefore90s()
    }
    render() {
        return (
            <div>
                {/* <button onClick={() => this.getNames()}>GET NAMES</button>
                <button onClick={() => this.bornBefore90s()}>PUSH BEFORE 90's </button> */}
                {
                    this.state.people.map(p => {
                        return <Name key={p.name} name={p.name} />
                    })
                }
                <br />
                <br />
                <br />
                {
                    this.state.modifiedPeople.map(p => {
                        let meats = p.favoriteFoods.meats.join(", ")
                        let fish = p.favoriteFoods.fish.join(", ")
                        console.log(p.favoriteFoods.fish);
                        console.log(meats);
                        return (
                            <Card
                                key={p.name}
                                name={p.name}
                                birthday={p.birthday}
                                favoriteMeats={meats}
                                favoriteFish={fish}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

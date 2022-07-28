import React, {Component} from "react";

class Pokedex extends Component {
    state = {
        pokemon: []
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
        .then(res => res.json())
        .then(res => {
            this.setState({ pokemon: res.results })
        })
        .catch(err =>console.error(err))
    }

    componentDidUpdate(prevProps, prevState) {
        // if you want to fetch on an update need to have the fetch inside an if statement
        if (prevState.pokemon.length < 149) {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
                .then(res => res.json())
                .then(res => {
                    this.setState({ pokemon: res.results })
                })
                .catch(err =>console.error(err))
            }
        }

    componentWillUnmount() {
        //code block end
        //never want to attach to a click function
    }

    render () {
        return (
            <>Hello there</>
        )
    }
}

export default Pokedex
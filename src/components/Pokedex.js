import React, { Component } from 'react'

class Pokedex extends Component {
    state = {
        pokemon: []
    }

    // this is how you do API calls
    componentDidMount () {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=150')

        // convert response into a json object
        .then(res => res.json())
        .then(res => {
            // set the state
            // name the object pokemon
            // populate object (pokemon) with response results
            this.setState({ pokemon: res.results })
        })
        .catch(err => console.error(err))
    }


    // how to handle updates
    componentDidUpdate(prevProps, prevState) {
        if (prevState.pokemon.length < 149) {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
            // convert response into a json object
                .then(res => res.json())
                .then(res => {
                    // set the state
                    // name the object pokemon
                    // populate object (pokemon) with response results
                    this.setState({ pokemon: res.results })
                })
                .catch(err => console.error(err))
        }
    }

    // only use in specific circumstances
    // usually done at the bottom
    componentWillUnmount() {
        // code block
    }

    render () {
        return (
            // <>Hello There</>
            <>{this.state.pokemon.length >= 149 && <p>whatever we want to render</p>}</>
        )
    }
}

export default Pokedex
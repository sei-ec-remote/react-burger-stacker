// import React, { Component } from 'react'


// class Pokedex extends Component {
//   state = {
//     pokemon: []
//   }

//   componentDidMount() {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//     .then(res => res.json())
//     .then(res => {
//       this.setState({ pokemon: res.results })
//     })
//     .catch((err) => console.err(err))
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.pokemon.length < 149 ) {
//       fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//       .then(res => res.json())
//       .then(res => {
//         this.setState({ pokemon: res.results })
//       })
//       .catch((err) => console.err(err))
//     }
//   }


//   render() {
//       return (
//           <>Hello There {this.state.pokemon.length > 149}</>
//       )
//   }
// }

// export default Pokedex
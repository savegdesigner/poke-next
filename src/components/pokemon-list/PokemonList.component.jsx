import React from "react"
import Pokemon from "../pokemon/Pokemon.component"

const PokemonList = ({ pokemonList }) => {
  return (
    <ul>
      {pokemonList.map((pokemon) => (
        <Pokemon key={pokemon.entry_number} name={pokemon.pokemon_species.name} />
      ))}
    </ul>
  )
}

export default PokemonList

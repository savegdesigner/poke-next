import React, { useState, useEffect } from "react"

const Pokedex = () => {
  const url = "https://pokeapi.co/api/v2/pokedex/14"
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetchPokemonApi()
  }, [])

  const fetchPokemonApi = () => {
    fetch(url)
      .then((data) => {
        if (data.ok) return data.json()
      })
      .then((data) => {
        setPokemonList(data.pokemon_entries)
        console.log(pokemonList)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <h1>Poke Next</h1>

      {pokemonList.map((pokemon) => (
        <li>{pokemon.pokemon_species.name}</li>
      ))}
    </div>
  )
}

export default Pokedex

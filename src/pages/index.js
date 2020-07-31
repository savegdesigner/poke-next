import React from "react"
import PokemonList from "../components/pokemon-list/PokemonList.component"
import Wrapper from "./main.styles"
import { createGlobalStyle } from "styled-components"

export async function getStaticProps(context) {
  const url = "https://pokeapi.co/api/v2/pokedex/14"

  const pokemonData = await fetch(url)
    .then((data) => {
      if (data.ok) return data.json()
    })
    .then((objectData) => {
      return objectData.pokemon_entries
    })
    .catch((error) => {
      return error
    })

  return {
    props: {
      pokemonData,
    },
  }
}

const Pokedex = ({ pokemonData }) => {
  return (
    <Wrapper>
      <GlobalStyle />

      <h1>Poke Next</h1>

      <PokemonList pokemonList={pokemonData} />
    </Wrapper>
  )
}

export default Pokedex

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500&display=swap');

  * {
    font-family: 'Ubuntu', sans-serif;
  }
`

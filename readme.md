# Poke Next

> A simple project to learn about the Next.js concepts

## About :question:

In this application I fetch a Pokemon API, and display the data into the page using the following Next function:

```
    export async function getStaticProps(context) {

        const fetchedData = await fetch(url)
        // Fetch data from the API and set as a Prop

        return {
        props: {
            fetchedData
        },
    }
}

```

That function enable us to Fetch data at build time.

Then in our component:

```
    const Pokedex = ({fetchedData}) {

        return (
            <ul>
                {fetchedData.map((pokemon) => (
                    <li key={pokemon.entry_number}>
                        {pokemon.pokemon_species.name}
                    </li>
                ))}
            </ul>
        )
}

```

After all the data is loaded, you can inspect the elements and check if every list item is rendered as planned :sunglasses:

## Installing :computer:

1. Clone this repo:

```
    git clone https://github.com/savegdesigner/poke-next.git
    cd poke-next

```

2. Install all packages

```
    yarn install

```

3. Start application

```
    yarn run dev

```

:+1:

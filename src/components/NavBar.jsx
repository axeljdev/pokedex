
function NavBar({ pokemonList, setPokemonIndex }) {

    const handleClick = (index) => {
        setPokemonIndex(index)
    }
    return (
        <>
            {pokemonList.map((pokemon, index) => <button onClick={() => handleClick(index)} key={pokemon.name}>{pokemon.name}</button>)}
        </>
    )
}

export default NavBar;

// { pokemonIndex > 0 && <button type="button" onClick={() => setPokemonIndex(pokemonIndex - 1)}>précédents</button> }
// { pokemonIndex < pokemonList.length - 1 && <button type="button" onClick={() => setPokemonIndex(pokemonIndex + 1)}>suivants</button>}
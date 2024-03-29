
function NavBar({ handleClickPrevious, handleClickNext, pokemonIndex, pokemonList }) {
    return (
        <>
            { pokemonIndex > 0 &&  <button type="button" onClick={handleClickPrevious}>précédents</button>}
            { pokemonIndex < pokemonList.length - 1 &&  <button type="button" onClick={handleClickNext}>suivants</button>}

        </>
    )
}

export default NavBar;

// { pokemonIndex > 0 && <button type="button" onClick={() => setPokemonIndex(pokemonIndex - 1)}>précédents</button> }
// { pokemonIndex < pokemonList.length - 1 && <button type="button" onClick={() => setPokemonIndex(pokemonIndex + 1)}>suivants</button>}
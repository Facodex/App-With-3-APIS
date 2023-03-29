export const useDataPokemon = async(pokemonName, setLoader, setState) => {

    setLoader(true)
    
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const response = await request.json();
    const moves = response.moves.map((item) => item.move.name);

    const cleanPokemon = {
        name: response.forms[0].name,
        moves: moves,
        image: response.sprites.other.dream_world.front_default,
    }
    
    setTimeout(() => {
        setLoader(false);
        setState(cleanPokemon);
    }, 1500);
    
}
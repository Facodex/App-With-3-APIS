export const useGetAbilitie = async (name, setState) => {
    const request = await fetch(`https://pokeapi.co/api/v2/move/${name}`);
    const response = await request.json();
    const cleanAbilitie = {
        name: response.name,
        effect: response.effect_entries[0].effect,
        shortEffect: response.effect_entries[0].short_effect
    }
    setState(cleanAbilitie);
}
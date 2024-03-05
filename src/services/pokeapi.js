import axios from "axios";

export const pokemon = async (pokemon) => {
    const data = String(pokemon).toLowerCase();
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`)
    return response.data
}

export const generations = async () => {
    const generations = await axios.get('https://pokeapi.co/api/v2/generation');
    const generationLength = generations.data.count;

    const pokemonData = [];
    for (let i = 1; i < generationLength + 1; i++) {
        const response = await axios.get(`https://pokeapi.co/api/v2/generation/${i}`);
        pokemonData.push(response.data);
    }
    return pokemonData;
}


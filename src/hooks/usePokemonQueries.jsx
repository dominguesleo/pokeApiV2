import { useQuery } from "@tanstack/react-query"
import { pokemon, generations } from "../services/pokeapi"



export const useGetPokemon = (value) => {
    return useQuery({
        queryKey: ['pokemon', value],
        queryFn : () => pokemon(value),
    })
}

export const useGetGenerations = () => {
    return useQuery({
        queryKey: ['generations'],
        queryFn : () => generations(),
    })
}
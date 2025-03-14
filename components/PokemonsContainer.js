import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { Pokemon} from '../components/Pokemon';
import { GET_POKEMONS } from '../graphql/get-pokemons';

export function PokemonsContainer() {

    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 9 },
    });

    return (
        <div className='container'>
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon = {pokemon} />)}
        </div>
    );
}

import { useState } from 'react';
import { useGetPokemon } from '../hooks/usePokemonQueries';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircularProgress from '@mui/material/CircularProgress';
import { Card } from '../components/Card';
import '../styles/pokemonStyles.css'

function Pokemon() {

	const [pokemon, setPokemon] = useState(1);
	const [search, setSearch] = useState("");
	const { data, isPending, isSuccess } = useGetPokemon(pokemon);

	const searchVerification = (value) => {
		return (Number(value) >= 1 && Number(value) <= 1025)
	}

	return (
		<div className='center'>
			<div className='card'>
				{isPending && <CircularProgress />}
				{isSuccess && <Card pokemon={data} />}
			</div>
			<div className='buttons'>
				<button disabled={pokemon == 1} className={pokemon === 1 ? 'disabled-button' : ''} onClick={() => setPokemon(pokemon - 1)}><ArrowBackIcon /></button>
				<button disabled={pokemon == 1025} className={pokemon === 1025 ? 'disabled-button' : ''} onClick={() => setPokemon(pokemon + 1)}><ArrowForwardIcon /></button>
			</div>
			<div className='buttons'>
				<input type="text" placeholder='#...' value={search} onChange={(e) => setSearch(e.target.value)} />
				<button
					onClick={() => { setPokemon(Number(search)); setSearch("") }}
					disabled={!searchVerification(search)}
					className={!searchVerification(search) ? 'disabled-button' : ''}>Search</button>
			</div>
		</div>
	)
}

export default Pokemon

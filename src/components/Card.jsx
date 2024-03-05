import { Stats } from './Stats'
import '../styles/cardStyles.css'

export const Card = ({ pokemon }) => {

  return (
    <>
      <div className="top">
        <div className="title">
          <h1>{(pokemon.name).toUpperCase()}</h1>
          <span># {pokemon.id}</span>
        </div>
        <div className='types'>
          {pokemon.types.map((value) => < span key={value.slot} className='type'>{value.type.name}</span>)}
        </div>
        <div className='image'>
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
        </div>
      </div>

      <div className="bottom">
        <div className='physical-info'>
          <div>
            <span>{(pokemon.height) / 10} M</span>
            <h2>HEIGHT</h2>
          </div>
          <div>
            <span>{(pokemon.weight) / 10} KG</span>
            <h2>WEIGHT</h2>
          </div>
        </div>
        <Stats baseStats={pokemon.stats} />
      </div>
    </>
  )
}


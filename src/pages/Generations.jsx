import { useState } from 'react'
import GenerationsTable from '../components/GenerationsTable'
import { useGetGenerations } from '../hooks/usePokemonQueries';
import  NamesTable  from '../components/NamesTable';
import '../styles//generationsStyles.css'

export const Generations = () => {

    const { data } = useGetGenerations();
    const [name, setName] = useState([]);

    return (
            <div className='generations'>
                {data && <GenerationsTable data={data} setName ={setName}/>}
                {name.length > 0 && <NamesTable data={name}/>}
            </div>
    )
}

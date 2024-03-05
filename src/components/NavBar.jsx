import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom'; 'react-router-dom';
import '../styles/navBarStyles.css';

export const NavBar = () => {
    return (
        <div className='navBar'>
            <ButtonGroup size="large" aria-label="Large button group" color="primary">
            <Button><Link to={'pokemon'}>Pokemon</Link></Button>
            <Button><Link to={'generation'}>Generations</Link></Button>
        </ButtonGroup>
        </div>
    )
}

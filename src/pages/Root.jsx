import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar"
import '../styles/rootStyles.css'

export const Root = () => {

    return (
        <>
            <div className="logo">
                <img src="/public/pokemon.svg" alt="PokemonLogo" />
            </div>
            <NavBar />
            <div>
                <Outlet />
            </div>

        </>
    )
}

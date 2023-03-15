import { Link, useLocation } from "react-router-dom"

import SearchBar from "../SearchBar/SearchBar"

export default function NavBar(){
    const location = useLocation();
    

    return (
        <div>
            {location.pathname !== '/home' && <Link to={"/home"}>
                    <span>HOME</span>
                </Link>}
            <img src="" alt="logo"/>
            <span>light/dark</span>
            <span>Idioms</span>
            <Link to={"/login"} > <span>Login</span> </Link>
            <Link to={"/projects"} > <span>Projects</span> </Link>
            <Link to={"/home/aboutUs"} > <span>About Us</span> </Link>
            <SearchBar/>
        </div>
    )
}
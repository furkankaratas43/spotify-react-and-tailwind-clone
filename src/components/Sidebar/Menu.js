import { NavLink } from "react-router-dom";
import {Icon} from "Icons"

function Menu() {
    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink to={"/"} className={({ isActive }) => isActive ? "nav-menu-link bg-active text-white" : "nav-menu-link"}>
                        <span>
                            <Icon name="home-active" />
                        </span>
                        Anasayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"} className={({ isActive }) => isActive ? "nav-menu-link bg-active text-white" : "nav-menu-link"}>
                        <span>
                            <Icon name="search" />
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/library"} className={({ isActive }) => isActive ? "nav-menu-link bg-active text-white" : "nav-menu-link"}>
                        <span>
                            <Icon name="library" />
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Menu
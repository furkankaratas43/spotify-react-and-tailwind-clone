import Logo from "assets/img/logo.svg"
import { Icon } from "Icons"
import Menu from "components/Sidebar/Menu"
import Playlists from "components/Sidebar/Playlists"
import DownloadApp from "components/Sidebar/DownloadApp";
function Sidebar() {
    return(
        <aside className="w-60 pt-6 flex flex-col flex-shrink-0 bg-black">
            <a href="/" className="mb-7 px-6">
                <img src={Logo} alt="" className="h-10" />
            </a>
            <Menu/>
            <nav className="mt-6">
                <ul>
                    <li>
                        <a href={"foo"} className="nav-menu-link py-2 px-6 group">
                            <span className="w-6 h-6 flex items-center justify-center rounded-sm bg-opacity-60 group-hover:bg-opacity-100 bg-white text-black">
                                <Icon name="plus" size={12}/>
                            </span>
                            Çalma Listesi Oluştur
                        </a>
                    </li>

                    <li>
                        <a href={"foo"} className="nav-menu-link py-2 px-6 group">
                            <span className="w-6 h-6 flex items-center justify-center rounded-sm opacity-60 group-hover:opacity-100 bg-gradient-to-br from-purple-700 to-blue-300 text-white">
                                <Icon name="heart" size={12}/>
                            </span>
                            Beğenilen Şarkılar
                        </a>
                    </li>
                </ul>
            </nav>
            <Playlists />
            <DownloadApp />
        </aside>
    )
}
export default Sidebar
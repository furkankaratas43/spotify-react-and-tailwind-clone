import Logo from "assets/img/logo.svg"
import Menu from "components/Sidebar/Menu"
function Sidebar() {
    return(
        <aside className="w-60 py-6 flex flex-col">
            <a href="" className="mb-7 px-6">
                <img src={Logo} alt="" className="h-10" />
            </a>
            <Menu/>
        </aside>
    )
}
export default Sidebar
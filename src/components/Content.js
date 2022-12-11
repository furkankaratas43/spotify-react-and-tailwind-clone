import { Routes,  Route } from "react-router-dom";
import Navbar from "components/Navbar"
import Home from "views/Home"
import Search from "views/Search"
import Library from "views/Library"
function Content() {
    return(
        <main className="flex-auto">
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/library" element={<Library />} />
            </Routes>
        </main>
    )
}
export default Content
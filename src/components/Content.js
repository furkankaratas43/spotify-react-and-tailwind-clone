import { Routes,  Route } from "react-router-dom";
import Navbar from "components/Navbar"
import Home from "views/Home"
import Search from "views/Search"
import Library from "views/Library"
function Content() {
    return(
        <main className="flex-auto overflow-auto">
            <Navbar />
            <div className="px-8 py-5">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/library" element={<Library />} />
                </Routes>
            </div>
        </main>
    )
}
export default Content
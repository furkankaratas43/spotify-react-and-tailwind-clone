import Navbar from "components/Navbar";
import { Switch, Route } from "react-router-dom"
function Content() {
    return(
        <main className="flex-auto">
            <Navbar />
            <Switch>
                <Route path="/">

                </Route>
            </Switch>
        </main>
    )
}
export default Content
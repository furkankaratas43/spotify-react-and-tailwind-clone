import {NavLink} from "react-router-dom";
import SongItem from "./SongItem";

function Section({title, more = false, items}){

    return(
        <section>
            <header className={"flex items-center justify-between mb-4"}>
                <h3 className="text-2xl text-white font-bold tracking-tight">{title}</h3>
                {more && (
                    <NavLink className={"text-xs hover:underline font-bold uppercase text-link tracking-wider"} to={more}>SEE ALL</NavLink>
                )}
            </header>
            <div className={"grid grid-cols-8 gap-x-6"}>
                {items.map(item =>  <SongItem item={item} key={item.id} />)}
            </div>
        </section>
    )
}
export default Section
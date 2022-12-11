import {NavLink} from "react-router-dom";
import {Icon} from "../Icons";

function Section({title, more = false, items}){
    const imgtype = item => {
        switch (item.type) {
            case "artist":
                return "rounded-full"
            case "podcast":
                return "rounded-lg"
            default:
                return "rounded"
        }
    }
    return(
        <section>
            <header className={"flex items-center justify-between mb-4"}>
                <h3 className="text-2xl text-white font-bold tracking-tight">{title}</h3>
                {more && (
                    <NavLink className={"text-xs hover:underline font-bold uppercase text-link tracking-wider"} to={more}>SEE ALL</NavLink>
                )}
            </header>
            <div className={"grid grid-cols-8 gap-x-6"}>
                {items.map(item => (
                    <NavLink to={"/"} key={item.id} className={"bg-footer hover:bg-active p-4 rounded group"}>
                        <div className={"pt-[100%] relative mb-4"}>
                            <img src={item.image} className={`absolute inset-0 shadow-xl shadow-[#00000080] object-cover w-full h-full mb-4 ${imgtype(item)}`} alt=""/>
                            <button className={"w-12 h-12 rounded-full bg-primary shadow-lg shadow-[#00000030] ease-in-out duration-300 opacity-0 hover:scale-105 group-hover:opacity-100 group-hover:bottom-2  absolute bottom-0 right-2 text-black flex items-center justify-center"}>
                                <Icon size={24} name="play" />
                            </button>
                        </div>
                        <h6 className={"overflow-hidden overflow-ellipsis whitespace-nowrap font-base font-bold"}>
                            {item.title}
                        </h6>
                        <p className={"line-clamp-2 text-sm text-link font-normal mt-1"}>{item.description}</p>
                    </NavLink>
                ))}
            </div>
        </section>
    )
}
export default Section
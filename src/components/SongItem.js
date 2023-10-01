import {Icon} from "Icons";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setCurrent } from "stores/player";

function SongItem({ item }) {

    const dispatch = useDispatch()

    const { current } = useSelector(state => state.player)
    const imgType = item => {
        switch (item.type) {
            case "artist":
                return "rounded-full"
            case "podcast":
                return "rounded-lg"
            default:
                return "rounded"
        }
    }
    const updateCurrent = () => {
        dispatch(setCurrent(item))
    }

    return (
        <NavLink to={"/"} key={item.id} className={"bg-footer hover:bg-active p-4 rounded group"}>
            <div className={"pt-[100%] relative mb-4"}>
                <img src={item.image} className={`absolute inset-0 shadow-xl shadow-[#00000080] object-cover w-full h-full mb-4 ${imgType(item)}`} alt=""/>
                <button
                    onClick={updateCurrent}
                    className={"w-12 h-12 rounded-full bg-primary shadow-lg shadow-[#00000030] ease-in-out duration-300 opacity-0 hover:scale-105 group-hover:opacity-100 group-hover:bottom-2  absolute bottom-0 right-2 text-black flex items-center justify-center"}>
                    <Icon size={24} name={current?.id === item.id ? 'pause' : 'play'} />
                </button>
            </div>
            <h6 className={"overflow-hidden overflow-ellipsis whitespace-nowrap font-base font-bold"}>
                {item.title}
            </h6>
            <p className={"line-clamp-2 text-sm text-link font-normal mt-1"}>{item.description}</p>
        </NavLink>
    )
}

export default SongItem
import {Icon} from "Icons";
import {useAudio} from 'react-use';
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import { setControls } from "stores/player";

function Player() {
    const dispatch = useDispatch()
    const { current } = useSelector(state => state.player)

    const [audio, state, controls] = useAudio({
        src: current?.src
    });

    useEffect(() => {
            controls.play()
    }, [current])

    useEffect(() => {
        dispatch(setControls(controls))
    }, [])
    const volumeIcon = useMemo(() => {
        if(state.volume === 0 || state.muted ) return 'volume-mute'
        else if(state.volume > 0 && state.volume < 0.33) return 'volume-low'
        else if(state.volume >= 0.33 && state.volume < 0.67) return 'volume-normal'
        else return 'volume-full'
    }, [state.volume, state.muted]);
    return (
        <div className="flex items-center justify-between px-4 h-full">
            <div className="min-w-[11.25rem] w-[30%]">
                { current && (
                    <div className={"flex items-center"}>
                        <div className={"flex items-center mr-3"}>
                            <div className={"h-14 w-14 mr-3 relative flex-shrink-0 group"}>
                                <img src={current.image} alt="" />
                                <button className={"h-6 w-6 text-white bg-black opacity-0 hover:scale-105 hover:!opacity-100 group-hover:opacity-80 rounded-full absolute top-1.5 right-1.5 flex items-center justify-center"}>
                                    <Icon name={"up"} size={16} />
                                </button>
                            </div>
                            <div>
                                <h6 className="text-sm cursor-pointer hover:underline line-clamp-1">{current.title}</h6>
                                <p className={"text-[0.688rem] text-link cursor-pointer hover:text-white hover:underline"}>{current.artist}</p>
                            </div>
                        </div>
                        <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                            <Icon name={"heart2"} size={16} />
                        </button>
                        <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                            <Icon name={"pip"} size={16} />
                        </button>
                    </div>
                )}
            </div>
            <div className={"max-w-[45.125rem] w-[40%] flex flex-col items-center px-4"}>
                <div className={"flex items-center gap-x-2"}>
                    <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                        <Icon name={"shuffle"} size={16} />
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                        <Icon name={"skip-back"} size={16} />
                    </button>
                    <button onClick={controls[state?.playing ? 'pause': 'play']} className={"w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-105"}>
                        <Icon name={state?.playing ? 'pause': 'play'} size={16} />
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                        <Icon name={"skip-forward"} size={16} />
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                        <Icon name={"repeat"} size={16} />
                    </button>
                </div>
                <div className="w-full flex items-center gap-x-2">
                    {audio}
                    <div className={"text-[0.6875rem] text-[#a7a7a7]"}>
                        { secondsToTime(state?.time)}
                    </div>
                    <CustomRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={ value => controls.seek(value)}
                    />
                    <div className={"text-[0.688rem] text-white text-opacity-70"}>
                        { secondsToTime(state?.duration)}
                    </div>
                </div>
            </div>
            <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
                <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                    <Icon name={"lyrics"} size={16} />
                </button>
                <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                    <Icon name={"queue"} size={16} />
                </button>
                <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                    <Icon name={"device"} size={16} />
                </button>
                <button
                    onClick={controls[state.muted ? 'unmute' : 'mute']}
                    className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                    <Icon name={volumeIcon} size={16} />
                </button>
                <div className={"w-[5.813rem] max-w-full"}>
                    <CustomRange
                        step={0.01}
                        min={0}
                        max={1}
                        value={ state.muted ? 0 : state?.volume}
                        onChange={ value => {
                            controls.unmute()
                            controls.volume(value)
                        } }
                    />
                </div>
                <button className={"w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"}>
                    <Icon name={"fullscreen"} size={16} />
                </button>
            </div>
        </div>

    )
}
export default Player
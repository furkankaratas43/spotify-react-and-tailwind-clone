import {Icon} from "Icons";
import {useAudio} from 'react-use';
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";

function Player() {

    const [audio, state, controls, ref] = useAudio({
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    });

    return (
        <div className=" flex items-center justify-between px-4 h-full">
            <div className="min-w-[11.25rem] w-[30%] ">
                sol
            </div>
            <div className={"max-w-[45.125rem] w-[40%] flex flex-col items-center"}>
                <div className={"flex items-center gap-x-2"}>
                    <button className={"w-8 h-8 flex items-center justify-center text-white text-opaciy-70 hover:text-opacity-100"}>
                        <Icon name={"shuffle"} size={16} />
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center text-white text-opaciy-70 hover:text-opacity-100"}>
                        <Icon name={"skip-back"} size={16} />
                    </button>
                    <button onClick={controls[state?.playing ? 'pause': 'play']} className={"w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-opaciy-70 hover:text-opacity-100 hover:scale-[1.056rem]"}>
                        <Icon name={state?.playing ? 'pause': 'play'} size={16} />
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center text-white text-opaciy-70 hover:text-opacity-100"}>
                        <Icon name={"skip-forward"} size={16} />
                    </button>
                    <button className={"w-8 h-8 flex items-center justify-center text-white text-opaciy-70 hover:text-opacity-100"}>
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
            <div className="min-w-[11.25rem] w-[30%] flex justify-end">sağ</div>
        </div>

    )
}
export default Player
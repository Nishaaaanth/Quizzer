import {useEffect} from "react";

const Timer = function Timer({time}) {
    return (
        <div className="text-xl font-semibold pb-2 mb-4">Time remaining: {time-4<=0 ? 0: time-4}</div>
    );
};

export default Timer;

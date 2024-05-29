import {forwardRef} from "react";

const Timer = forwardRef(function Timer({time}, ref) {
    return (
        <div className="text-xl font-semibold pb-2 mb-4" ref={ref}>Time remaining: {time}</div>
    );
});

export default Timer;

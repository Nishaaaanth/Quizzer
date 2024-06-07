import {memo, forwardRef} from "react";
import questions from "../question";

const Question = function Question({questionNumber}) {
    return(
        <div>
            <p className="font-semibold text-center py-16 border-2 border-black rounded-lg px-1 text-xl">{questions[questionNumber].question}</p>
        </div>
    );
};

export default memo(Question);

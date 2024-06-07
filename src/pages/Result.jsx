import {useNavigate} from "react-router-dom";
import questions from "../question";

export default function Result({score, answer}) {
    let animate = "";
    let comment = "";
    const navigate = useNavigate();

    if(score <= 10) animate = "animate-pulse";
    else if(score <= questions.length-1)  animate = "animate-bounce";

    if(score == 20) comment = "Pefect. Yay!";
    else if(score > 15) comment = "Great";
    else if(score > 10) comment = "Good";

    return(
        <div className="font-mono bg-red-100 overflow-auto h-screen p-3 flex justify-center items-center flex-col font-bold text-2xl">
            <p className="py-8 px-2">Your Score out of 20 is:</p>
            <p className={`${animate} text-8xl`}>{score}</p>
            <p className="text-3xl">{comment}</p>
        </div>
    );
}

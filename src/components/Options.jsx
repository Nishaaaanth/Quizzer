import {useEffect,useState, memo} from "react";
import questions from "../question";

const Options = function({questionNumber, setScore, time, setAnswer, score, answer}) {
    const [option, setOption] = useState("");
    const [chosen, setChosen] = useState("");

    useEffect(()=>{
        if(time == 0){
            let qNum = questionNumber + 1;
            setAnswer(answer => [...answer, {qNum, answer: option}]);
            if(option == questions[questionNumber].answer) setScore(score=>score+1)
            setOption("");
        }
    },[time]);

    return (
            <div>
                <div className="text-lg text-center pt-16">
                    <div className="flex justify-center">
                        <button
                            onClick={()=>{
                                    setOption(questions[questionNumber].option1)
                                }}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option1}</button>
                        <button
                            onClick={()=>{
                                    setOption(questions[questionNumber].option2)
                                }}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option2}</button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={()=>{
                                    setOption(questions[questionNumber].option3)
                                }}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option3}</button>
                        <button
                            onClick={()=>{
                                    setOption(questions[questionNumber].option4)
                                }}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option4}</button>
                    </div>
                </div>
                <div className="flex justify-center mt-16 font-bold text-xl italic">Your Choice: {option}</div>
            </div>
    );
};


export default memo(Options);

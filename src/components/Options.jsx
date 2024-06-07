import {useEffect,useState, memo} from "react";
import questions from "../question";

const Options = function({questionNumber, setScore, time, INIT_TIME}) {
    const [option, setOption] = useState("");
    const [clicked, setClicked] = useState(false);
    const [display, setDisplay] = useState("");
    const [correct, setCorrect] = useState("");

    useEffect(()=>{
        if(time == INIT_TIME) {
            setOption("");
            setDisplay("");
            setCorrect("");
            setClicked(false);
        }
    }, [time, questionNumber]);

    useEffect(()=>{
        if(clicked) {
            if(option == questions[questionNumber].answer) {
                setScore(prev=>prev+1);
                setDisplay(`${option} is correct`);
            }else {
                setDisplay(`${option} is wrong`);
                setCorrect(`correct: ${questions[questionNumber].answer}`);
            }
        }
    }, [clicked]);
    
    return (
            <div>
                <div className="text-lg text-center pt-16">
                    <div className="flex justify-center">
                        <button
                            onClick={()=>{
                                    setOption(questions[questionNumber].option1)
                                    setClicked(true);
                                }}
                            disabled={clicked}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option1}</button>
                        <button
                            onClick={()=>{
                                    setOption(questions[questionNumber].option2)
                                    setClicked(true);
                                }}
                            disabled={clicked}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option2}</button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={()=>{
                                    setOption(questions[questionNumber].option3)
                                    setClicked(true);
                                }}
                            disabled={clicked}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option3}</button>
                        <button
                            onClick={()=>{
                                    setOption(questions[questionNumber].option4)
                                    setClicked(true);
                                }}
                            disabled={clicked}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option4}</button>
                    </div>
                </div>

                <div className="font-bold flex flex-col items-center justify-center pt-10 text-xl">
                    <div className="p-3 italic">{display}</div>
                    <div className="">{correct}</div>
                </div>
            </div>
    );
};



export default memo(Options);

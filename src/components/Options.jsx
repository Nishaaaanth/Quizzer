import {useState, memo} from "react";
import questions from "../question";

const Options = function({questionNumber, setScore}) {
    const [option, setOption] = useState("");

    return (
            <div>
                <div className="text-xl text-center pt-16">
                    <div className="flex justify-center">
                        <button
                            onClick={()=>{
                                setOption(questions[questionNumber].option1)
                                if(questions[questionNumber].option1 == questions[questionNumber].answer) setScore((prev) => prev+1);
                                }}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option1}</button>
                        <button
                            onClick={()=>{
                                setOption(questions[questionNumber].option2)
                                if(questions[questionNumber].option2 == questions[questionNumber].answer) setScore((prev) => prev+1);
                                }}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option2}</button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={()=>{
                                setOption(questions[questionNumber].option3)
                                if(questions[questionNumber].option3 == questions[questionNumber].answer) setScore((prev) => prev+1);
                                }}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option3}</button>
                        <button
                            onClick={()=>{
                                setOption(questions[questionNumber].option4)
                                if(questions[questionNumber].option4 == questions[questionNumber].answer) setScore((prev) => prev+1);
                                }}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option4}</button>
                    </div>
                </div>
                <div className="flex justify-center mt-16 font-bold text-2xl italic">Your Choice: {option}</div>
            </div>
    );
};


export default memo(Options);

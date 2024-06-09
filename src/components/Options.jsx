import {useEffect,useState, memo, useRef} from "react";
import questions from "../question";

const Options = function({questionNumber, setScore, time, INIT_TIME}) {
    const [option, setOption] = useState("");
    const [display, setDisplay] = useState("");
    const [correct, setCorrect] = useState("");
    const [disableClick, setDisableClick] = useState(false);

    const option1Ref = useRef();
    const option2Ref = useRef();
    const option3Ref = useRef();
    const option4Ref = useRef();

    const unclickedStyle = "m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24";
    const clickedStyle = "m-3 p-4 bg-pink-200 rounded-lg font-semibold shadow-md min-w-24 text-gray-500 shadow-none translate-y-1";

    useEffect(()=>{
        if(time == INIT_TIME) {
            setDisableClick(false);
            setOption("");
            setDisplay("");
            setCorrect("");
            option1Ref.current.className = unclickedStyle;
            option2Ref.current.className = unclickedStyle;
            option3Ref.current.className = unclickedStyle;
            option4Ref.current.className = unclickedStyle;
        }
    }, [time, questionNumber]);

    useEffect(()=>{
        if(time == 4) {
            setDisableClick(true);
            if(option == questions[questionNumber].answer) {
                setScore(prev=>prev+1);
                setDisplay(`${option} is correct`);
            }else if(option == "") {
                setDisplay("");
                setCorrect(`correct: ${questions[questionNumber].answer}`);
            } else {
                setDisplay(`${option} is wrong`);
                setCorrect(`correct: ${questions[questionNumber].answer}`);
            }
        }
    }, [time]);

    function styleClick(option) {
        if(option == 1) {
            option1Ref.current.className = clickedStyle;
            option2Ref.current.className = unclickedStyle;
            option3Ref.current.className = unclickedStyle;
            option4Ref.current.className = unclickedStyle;
        } else if(option == 2) {
            option1Ref.current.className = unclickedStyle;
            option2Ref.current.className = clickedStyle;
            option3Ref.current.className = unclickedStyle;
            option4Ref.current.className = unclickedStyle;
        } else if(option == 3) {
            option1Ref.current.className = unclickedStyle;
            option2Ref.current.className = unclickedStyle;
            option3Ref.current.className = clickedStyle;
            option4Ref.current.className = unclickedStyle;
        } else if(option == 4) {
            option1Ref.current.className = unclickedStyle;
            option2Ref.current.className = unclickedStyle;
            option3Ref.current.className = unclickedStyle;
            option4Ref.current.className = clickedStyle;
        }
    }
    
    return (
            <div>
                <div className="text-lg text-center pt-16">
                    <div className="flex justify-center">
                        <button
                            ref={option1Ref}
                            onClick={()=>{
                                    setOption(questions[questionNumber].option1)
                                    styleClick(1);
                                }}
                            disabled={disableClick}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option1}</button>
                        <button
                            ref={option2Ref}
                            onClick={()=>{
                                    setOption(questions[questionNumber].option2)
                                    styleClick(2);
                                }}
                            disabled={disableClick}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option2}</button>
                    </div>
                    <div className="flex justify-center">
                        <button
                            ref={option3Ref}
                            onClick={()=>{
                                    setOption(questions[questionNumber].option3)
                                    styleClick(3);
                                }}
                            disabled={disableClick}
                            className="m-3 p-4 bg-red-200 rounded-lg font-semibold shadow-md min-w-24">{questions[questionNumber].option3}</button>
                        <button
                            ref={option4Ref}
                            onClick={()=>{
                                    setOption(questions[questionNumber].option4)
                                    styleClick(4);
                                }}
                            disabled={disableClick}
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

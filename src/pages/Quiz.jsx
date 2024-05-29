import {useEffect, useState, useRef} from "react";
import {useNavigate} from "react-router-dom";
import Question from "../components/Question";
import question from "../question";
import Timer from "../components/Timer";
import Options from "../components/Options";
import Display from "../components/Display";

const INIT_TIME=30;
const INIT_SCORE=0;

export default function Quiz({setScore}) {
    const [time, setTime] = useState(INIT_TIME);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{setQuestions(question)},[]);

    useEffect(()=>{
        if(time <= 29){
            setTime(INIT_TIME);
            setQuestionNumber(prev=>prev+1);
        }
        const interval = setInterval(()=>{
            setTime(prev=>prev-1);
        },1000);
        
        if(questionNumber == questions.length-1) {
            clearInterval(interval);
        }
        return ()=>clearInterval(interval);
    },[time]);

    useEffect(()=>{
    if(questionNumber == questions.length-1) {
        navigate("/result");
    }}, [questionNumber]);

    return(
        <div className="font-mono bg-red-100 h-screen p-3">
            <div className="font-mono bg-red-100 h-full p-3 flex flex-col">
                <Timer time={time}/>
                <Question questionNumber={questionNumber} />            
                <Options setScore={setScore} questionNumber={questionNumber}/>
                <Display />
            </div>
        </div>
    );
}

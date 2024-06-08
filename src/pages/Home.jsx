import {useNavigate} from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return(
        <div className="font-mono bg-red-100 h-screen p-4 flex text-xl justify-center items-center flex-col">
            <p className="font-normal italic text-center"><b>Note: </b>You will have 10s to answer each question. And, there will be 20 questions in total.</p>
            <button onClick={()=>navigate("/quiz")} className="mt-14 mb-6 p-4 bg-red-200 rounded-lg font-semibold shadow-md touch:bg-pink-200 touch:text-gray-500 touch:shadow-none touch:translate-y-1 animate-bounce">Start!</button>
            <p className="font-bold">All the Best!</p>
        </div>
    );
}

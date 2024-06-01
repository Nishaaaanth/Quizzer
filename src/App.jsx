import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Answers from "./pages/Answers";
import Nav from "./components/Nav";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";

function App() {
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState([]);
    
  return (
    <main className="bg-red-100 h-full">
        <Nav />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/quiz' element={<Quiz setScore={setScore} setAnswer={setAnswer} score={score} answer={answer}/>} />
                <Route path='/result' element={<Result score={score} answer={answer} />} />
                <Route path='/answers' element={<Answers answer={answer}/>} />
            </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App

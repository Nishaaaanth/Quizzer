import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Nav from "./components/Nav";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";

function App() {
    const [score, setScore] = useState(0);
    
  return (
    <main className="bg-red-100 h-full">
        <Nav />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/quiz' element={<Quiz setScore={setScore}/>} />
                <Route path='/result' element={<Result score={score}/>} />
            </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App

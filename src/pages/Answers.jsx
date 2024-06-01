import questions from "../question";

export default function Answers({answer}) {
    return (
        <div>
                <div className="font-bold font-mono p-3 px-4 text-2xl pt-6">Your Answers</div>
                {
                    answer.map(obj=>{
                        return (
                            <div className="text-xl p-3 px-4">
                                <div key={obj.qNum}
                                    className="font-mono"
                                >{obj.qNum}. {questions[obj.qNum-1].question}</div>
                                <div className="font-mono font-bold italic" key={obj.qNum}>{obj.answer ? obj.answer : "Not Answered"}</div>
                            </div>
                        )
                    })
                }
        </div>
    );
}

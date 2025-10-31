import { useState } from "react"
import type { Puzzle } from "../models/puzzle"

type PuzzleDisplayProps = {
    puzzle: Puzzle
}

export function PuzzleDisplay({ puzzle } : PuzzleDisplayProps) {

    const [ typedAnswer, setTypedAnswer ] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        checkAnswer(typedAnswer)

    }

    function checkAnswer(answer: string) {
        if (answer.toLowerCase().replaceAll(" ", "") === puzzle.answer.toLowerCase()) {
            console.log("right!")
        } else {
            console.log("wrong!")
        }
    }

    return (
        <>
            {puzzle.hint && <p>{puzzle.hint}</p>}

            <p>{puzzle.question}</p>

            {puzzle.answerType === "open"
                ? (<form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            value={typedAnswer}
                            onChange={(e)=>setTypedAnswer(e.target.value)}
                        />
                  </form>)
                : puzzle.options.map((option) => (
                    <button onClick={() => checkAnswer(option)}>{option}</button>
                ))
            }
        </>
    )
}
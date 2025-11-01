import { useState } from "react"
import type { Puzzle } from "../models/puzzle"
import { checkAnswer } from "../utils/checkAnswer"

type PuzzleDisplayProps = {
    puzzle: Puzzle
}

export function OpenPuzzleDisplay({ puzzle } : PuzzleDisplayProps) {

    const [ typedAnswer, setTypedAnswer ] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        checkAnswer(typedAnswer, puzzle)
    }

    return (
        <>
            {puzzle.hint && <p>{puzzle.hint}</p>}

            <p>{puzzle.question}</p>

            {puzzle.answerType === "open"
                && (<form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            value={typedAnswer}
                            onChange={(e)=>setTypedAnswer(e.target.value)}
                        />
                    </form>)
            }
        </>
    )
}
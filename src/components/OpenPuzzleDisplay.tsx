import { useState } from "react"
import type { Puzzle } from "../models/Puzzle"
import { checkAnswer } from "../utils/checkAnswer"
import { usePuzzleContext } from "../context/usePuzzleContext"

interface PuzzleDisplayProps {
    puzzle: Puzzle
}

export function OpenPuzzleDisplay({ puzzle } : PuzzleDisplayProps) {

    const { moveToNextPuzzle } = usePuzzleContext()

    const [ typedAnswer, setTypedAnswer ] = useState("")
    

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (checkAnswer(typedAnswer, puzzle)) {
            moveToNextPuzzle()
        }
    }

    return (
        <>
            <p>{puzzle.question}</p>

            {puzzle.hint && <p>{puzzle.hint}</p>}

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
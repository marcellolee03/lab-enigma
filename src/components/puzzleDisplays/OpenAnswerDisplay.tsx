import { useState } from "react"
import type { Puzzle } from "../../models/Puzzle"
import { SubmitAnswerButton } from "../SubmitAnswerButton"

interface PuzzleDisplayProps {
    puzzle: Puzzle
}

export function OpenPuzzleDisplay({ puzzle } : PuzzleDisplayProps) {
    const [ typedAnswer, setTypedAnswer ] = useState<string>("")
    const [ userAnswer, setUserAnswer ] = useState<string[]>([])

    function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
        const newTypedValue = event.target.value
        setTypedAnswer(newTypedValue)
        setUserAnswer([newTypedValue])
    }

    return (
        <>
            <p>{puzzle.question}</p>

            {puzzle.hint && <p>{puzzle.hint}</p>}

            {puzzle.answerType === "open"
                && (
                <>
                    <input
                        type="text"
                        value={typedAnswer}
                        onChange={handleChange}
                    />

                    <SubmitAnswerButton 
                        answers={puzzle.answers} 
                        input={userAnswer} 
                        penalty={puzzle.penalty}
                    />
                
                </>
                )
            }
        </>
    )
}
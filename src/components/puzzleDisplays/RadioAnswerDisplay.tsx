import { type Puzzle } from "../../models/Puzzle"
import { useState } from "react"
import { SubmitAnswerButton } from "../SubmitAnswerButton"

interface PuzzleDisplayProps {
    puzzle: Puzzle
}

export function RadioAnswerDisplay({ puzzle }: PuzzleDisplayProps) {
    const [ userAnswers, setUserAnswers ] = useState<string[]>([]);

    function handleChange(option: string) {

        if (puzzle.answerType === "multiple_choice") {
            setUserAnswers([option])
        }
    }

    return (
        <>
            <p>{puzzle.question}</p>
            
            {puzzle.hint && <p>{puzzle.hint}</p>}

            {puzzle.answerType === "multiple_choice"
                && puzzle.options.map((option) => (
                    <>
                        <label>
                            <input
                                type="radio"
                                name="choice"
                                value={option}
                                onChange={() => handleChange(option)}
                            />
                            {option}
                        </label>

                    </>

                ))
            }

            <SubmitAnswerButton answers={puzzle.answers} input={userAnswers}/>
        </>
    )
}
import { type Puzzle } from "../../models/Puzzle"
import { useState } from "react"
import { SubmitAnswerButton } from "../SubmitAnswerButton"

interface PuzzleDisplayProps {
    puzzle: Puzzle
}

export function CheckAnswerDisplay({ puzzle }: PuzzleDisplayProps) {
    const [ userAnswers, setUserAnswers ] = useState<string[]>([]);

    function handleChange(option: string, isChecked: boolean) {

        if (puzzle.answerType === "multiple_choice") {
            if (isChecked) {
                setUserAnswers(prevAnswers => [...prevAnswers, option])
            } else {
                setUserAnswers(prevAnswers =>
                    prevAnswers.filter(answer => answer !== option)
                )
            }
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
                                type="checkbox"
                                value={option}
                                onChange={(e)=> handleChange(option, e.target.checked)}
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
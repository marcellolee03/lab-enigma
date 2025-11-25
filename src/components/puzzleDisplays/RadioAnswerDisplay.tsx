import { type Puzzle } from "../../models/Puzzle"
import { useState, useEffect } from "react"
import { SubmitAnswerButton } from "../SubmitAnswerButton"

interface PuzzleDisplayProps {
    puzzle: Puzzle
}

export function RadioAnswerDisplay({ puzzle }: PuzzleDisplayProps) {
    const [ userAnswers, setUserAnswers ] = useState<string[]>([]);

    useEffect(()=>{
        setUserAnswers([])
    }, [puzzle])

    function handleChange(option: string) {
        if (puzzle.answerType === "multiple_choice") {
            setUserAnswers([option])
        }
    }

    if (puzzle.answerType === "multiple_choice") {
        return (
        <>
            <p>{puzzle.question}</p>

            {puzzle.hint && <p>{puzzle.hint}</p>}

            {puzzle.options.map((option) => (
                    <label key={option}>
                        <input
                            type="radio"
                            name="choice"
                            value={option}
                            onChange={() => handleChange(option)}
                            checked={userAnswers.includes(option)}
                        />
                        {option}
                    </label>
                ))
            }

            <SubmitAnswerButton 
                answers={puzzle.answers} 
                input={userAnswers}
                penalty={puzzle.penalty}
            />
        </>
        )
    } else {
        null
    }
    
}
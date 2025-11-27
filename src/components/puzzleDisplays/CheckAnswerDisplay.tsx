import { type Puzzle } from "../../models/Puzzle"
import { useState, useEffect } from "react"
import { SubmitAnswerButton } from "../SubmitAnswerButton"

interface PuzzleDisplayProps {
    puzzle: Puzzle
}

export function CheckAnswerDisplay({ puzzle }: PuzzleDisplayProps) {
    const [ userAnswers, setUserAnswers ] = useState<string[]>([]);

    useEffect(()=>{
        setUserAnswers([])
    }, [puzzle])

    function handleChange(option: string, isChecked: boolean) {
            if (isChecked) {
                setUserAnswers(prevAnswers => [...prevAnswers, option])
            } else {
                setUserAnswers(prevAnswers =>
                    prevAnswers.filter(answer => answer !== option)
                )
            }
    }

    if (puzzle.answerType === "multiple_choice") {
        return (
        <>
            <p>{puzzle.question}</p>
            
            {puzzle.hint && <p>{puzzle.hint}</p>}

            {puzzle.options.map((option) => (
                    <>
                        <label key={option}>
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

            <SubmitAnswerButton answers={puzzle.answers} input={userAnswers} penalty={puzzle.penalty}/>
        </>
        )
    } else {
        null
    }
}
import type { Puzzle } from "../models/puzzle"
import { checkAnswer } from "../utils/checkAnswer"

type MultipleChoicePuzzleDisplayProps = {
    puzzle: Puzzle
}

export function MultipleChoicePuzzleDisplay({ puzzle }: MultipleChoicePuzzleDisplayProps) {
    return (
        <>
            {puzzle.hint && <p>{puzzle.hint}</p>}
            
            <p>{puzzle.question}</p>

            {puzzle.answerType === "multiple_choice"
                && puzzle.options.map((option) => (
                    <button onClick={() => checkAnswer(option, puzzle)}>{option}</button>
                ))
            }
        </>
    )
}
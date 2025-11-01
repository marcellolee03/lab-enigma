import { usePuzzleContext } from "../context/usePuzzleContext"
import { type Puzzle } from "../models/Puzzle"
import { checkAnswer } from "../utils/checkAnswer"

interface MultipleChoicePuzzleDisplayProps {
    puzzle: Puzzle
}

export function MultipleChoicePuzzleDisplay({ puzzle }: MultipleChoicePuzzleDisplayProps) {
    const {moveToNextPuzzle} = usePuzzleContext()

    function handleClick(input: string, puzzle: Puzzle) {
        if (checkAnswer(input, puzzle)) {
            moveToNextPuzzle()
        }
    }
    return (
        <>
            <p>{puzzle.question}</p>
            
            {puzzle.hint && <p>{puzzle.hint}</p>}

            {puzzle.answerType === "multiple_choice"
                && puzzle.options.map((option) => (
                    <button onClick={() => handleClick(option, puzzle)}>{option}</button>
                ))
            }
        </>
    )
}
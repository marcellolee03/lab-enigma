import type { Puzzle } from "../../../models/Puzzle"
import type { handleChangeFn } from "../PuzzleDisplay"

interface RadioPuzzleInputProps {
    handleChange: handleChangeFn
    userAnswer: string[]
    puzzle: Puzzle
}

export function RadioPuzzleInput({ handleChange, userAnswer, puzzle}: RadioPuzzleInputProps) {
    if (puzzle.answerType === "radio") {
        return (
            puzzle.options.map((option) => (
                <label key={option}>
                    <input
                        type="radio"
                        name="choice"
                        value={option}
                        onChange={() => handleChange({option: option})}
                        checked={userAnswer.includes(option)}
                    />
                    {option}
                </label>
        ))
        )
    }
}
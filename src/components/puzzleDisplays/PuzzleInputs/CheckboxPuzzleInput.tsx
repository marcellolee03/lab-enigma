import type { Puzzle } from "../../../models/Puzzle"
import type { handleChangeFn } from "../PuzzleDisplay"

interface CheckboxPuzzleInputProps {
    puzzle: Puzzle
    userAnswer: string[]
    handleChange: handleChangeFn
}

export function CheckboxPuzzleInput({ puzzle, userAnswer, handleChange }: CheckboxPuzzleInputProps) {
    if (puzzle.answerType === "checkbox") {
        return (
            puzzle.options.map((option) => (
                <>
                    <label key={option}>
                        <input
                            type="checkbox"
                            value={option}
                            checked={userAnswer.includes(option)}
                            onChange={(e)=> handleChange({option: option, isChecked: e.target.checked})}
                        />
                        {option}
                    </label>
                </>
            ))
        )
    }
}
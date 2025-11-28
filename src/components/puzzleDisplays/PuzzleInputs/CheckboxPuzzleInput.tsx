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
            <div>
            {puzzle.options.map((option) => (
                    <label className="flex items-center gap-6 cursor-pointer" key={option}>
                        <input
                            type="checkbox"
                            value={option}
                            checked={userAnswer.includes(option)}
                            onChange={(e)=> handleChange({option: option, isChecked: e.target.checked})}
                        />
                        <span>{option}</span>
                    </label>
            ))}
            </div>
        )
    }
}
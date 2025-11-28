import type { handleChangeFn } from "../PuzzleDisplay"

interface OpenPuzzleInputProps {
    typedAnswer: string
    handleChange: handleChangeFn
}

export function OpenPuzzleInput({ typedAnswer, handleChange}: OpenPuzzleInputProps) {
    return (
        <input className="border rounded-md border-gray-400"
            type="text"
            value={typedAnswer}
            onChange={(e) => handleChange({event: e})}
        />
    )
}
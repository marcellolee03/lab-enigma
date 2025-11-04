import { usePuzzleContext } from "../context/usePuzzleContext"

interface SubmitAnswerButtonProps {
    answers: string[],
    input: string[]
}

export function SubmitAnswerButton({answers, input}: SubmitAnswerButtonProps) {

    const { moveToNextPuzzle } = usePuzzleContext()

    function areArraysEqual(arr1: string[], arr2: string[]): boolean {
        if (arr1.length !== arr2.length) {
            return false
        }

        const sortedArr1 = [...arr1].sort()
        const sortedArr2 = [...arr2].sort()

        for (let i=0; i<sortedArr1.length; i++) {
            if (sortedArr1[i] !== sortedArr2[i]) {
                return false
            }
        }
        return true;
    }

    function handleClick(arr1: string[], arr2: string[]) {
        if (areArraysEqual(arr1, arr2)) {
            moveToNextPuzzle()
        }
    }

    return (
        <>
            <button onClick={() => handleClick(answers, input)}>Submit Answer</button>
        </>
    )
}
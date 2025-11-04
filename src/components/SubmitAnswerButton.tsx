import { usePuzzleContext } from "../context/usePuzzleContext"

interface SubmitAnswerButtonProps {
    answers: string[],
    input: string[],
    penalty?: number
}

export function SubmitAnswerButton({answers, input, penalty}: SubmitAnswerButtonProps) {

    const { moveToNextPuzzle, applyPenalty } = usePuzzleContext()

    function areArraysEqual(arr1: string[], arr2: string[]): boolean {
        if (arr1.length !== arr2.length) {
            return false
        }

        arr1 = arr1.map((item) => item.toLowerCase())
        arr2 = arr2.map((item) => item.toLowerCase())

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

        if (answers.length === 0) {
            moveToNextPuzzle()
            return
        }

        if (areArraysEqual(arr1, arr2)) {
            moveToNextPuzzle()
        } else {
            if (penalty) {
                applyPenalty(penalty)
            }
        }
    }

    return (
        <>
            <button onClick={() => handleClick(answers, input)}>Submit Answer</button>
        </>
    )
}
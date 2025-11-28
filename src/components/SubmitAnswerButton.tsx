import { usePuzzleContext } from "../context/PuzzleContext";
import { useTimerContext } from "../context/TimerContext";

interface SubmitAnswerButtonProps {
    answers: string[],
    input: string[],
    penalty?: number
    onClick?: () => void
}

export function SubmitAnswerButton({answers, input, penalty, onClick}: SubmitAnswerButtonProps) {

    const { moveToNextPuzzle } = usePuzzleContext()
    const { applyPenalty } = useTimerContext()

    function normalizeString(str: string): string {
        return str
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
    }

    function areArraysEqual(arr1: string[], arr2: string[]): boolean {
        if (arr1.length !== arr2.length) {
            return false
        }

        arr1 = arr1.map((item) => normalizeString(item))
        arr2 = arr2.map((item) => normalizeString(item))

        const sortedArr1 = [...arr1].sort()
        const sortedArr2 = [...arr2].sort()

        for (let i=0; i<sortedArr1.length; i++) {
            if (sortedArr1[i] !== sortedArr2[i]) {
                return false
            }
        }
        return true
    }

    function handleClick(arr1: string[], arr2: string[]) {

        if (onClick) {
            onClick()
        }

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
            <button 
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer
                            transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-101"
                onClick={() => handleClick(answers, input)}>Submit Answer</button>
        </>
    )
}
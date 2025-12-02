import { useTimerContext } from "../../context/TimerContext";
import { usePuzzleContext } from "../../context/PuzzleContext";
import { type Puzzle } from "../../models/Puzzle";
import { type EnigmaOption } from "../../models/Puzzle";

interface EnigmaSubmitButtonProps {
    puzzle: Puzzle
    userAnswer: string[]
    puzzleAnswers: string[]
    setPuzzleAnswers: React.Dispatch<React.SetStateAction<string[]>>
    setFirstRowOptions: React.Dispatch<React.SetStateAction<EnigmaOption[]>>
    setSecondRowOptions: React.Dispatch<React.SetStateAction<EnigmaOption[]>>
}

export function EnigmaSubmitButton({ puzzle, userAnswer, puzzleAnswers, setPuzzleAnswers, setFirstRowOptions, setSecondRowOptions }: EnigmaSubmitButtonProps) {
    const { moveToNextPuzzle } = usePuzzleContext()
    const { applyPenalty } = useTimerContext()

    function handleClick() {
            const input = userAnswer.join('')
            let answersLeft = puzzleAnswers.length
            
            if (puzzleAnswers.includes(input)) {
                setPuzzleAnswers(prev => (
                    prev.filter(answer => answer !== input)
                ))

                setFirstRowOptions(prev => 
                    prev.map((option) =>
                        option.content === userAnswer[0]
                        ? {...option, valid: false}
                        : option
                    )
                )

                setSecondRowOptions(prev =>
                    prev.map((option) => 
                        option.content === userAnswer[1]
                        ? {...option, valid: false}
                        : option
                    )
                )
                answersLeft = answersLeft - 1
            } else {
                {
                    puzzle.penalty && applyPenalty(puzzle.penalty)
                }
            }

            if (answersLeft === 0) {
                console.log("no answers left!")
                moveToNextPuzzle()
            }
        }

    return (
        <>
            <button onClick={handleClick}> aaaaaaa </button>
        </>
    )
}
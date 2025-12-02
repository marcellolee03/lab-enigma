import { useState } from "react";
import { usePuzzleContext } from "../../context/PuzzleContext";
import { useTimerContext } from "../../context/TimerContext";
import { type EnigmaOption, type Puzzle } from "../../models/Puzzle";
import { EnigmaPuzzleInput } from "./PuzzleInputs/EnigmaPuzzleInput";

interface handleChangeProps {
    option: string
    row: number
}
export type enigmaHandleChangeFn = (params: handleChangeProps) => void


interface EnigmaPuzzleDisplayProps {
    puzzle: Puzzle
}

export function EnigmaPuzzleDisplay({ puzzle }: EnigmaPuzzleDisplayProps) {
    const { moveToNextPuzzle } = usePuzzleContext()
    const { applyPenalty } = useTimerContext()

    if (puzzle.answerType === "enigma") {
        const [ puzzleAnswers, setPuzzleAnswers ] = useState<string[]>(puzzle.answers)
        const [ firstRowOptions, setFirstRowOptions ] = useState<EnigmaOption[]>(puzzle.first_row_options)
        const [ secondRowOptions, setSecondRowOptions ] = useState<EnigmaOption[]>(puzzle.second_row_options)
        const [ userAnswer, setUserAnswer ] = useState<string[]>(["", ""])

        function handleChange({option, row}: handleChangeProps) {
            setUserAnswer( prev => {
                    const updated = [...prev]
                    updated[row] = option
                    return updated
                }
            )
        }

        function handleClick(userAnswer: string[]) {
            let input = ""
            let answersLeft = puzzleAnswers.length
            for (let i: number = 0; i<userAnswer.length; i++) {
                input = input + userAnswer[i]
            }
            
            if (puzzleAnswers.includes(input)) {
                console.log("is in !")

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
                console.log("is not in !")
                {
                    puzzle.penalty && applyPenalty(puzzle.penalty)
                }
            }

            if (answersLeft === 0) {
                console.log("no answers left!")
                moveToNextPuzzle()
            }
            console.log(puzzleAnswers)
        }


        return (
        <>
            {puzzle.hint && <p>{puzzle.hint}</p>}

            <div className="grid grid-flow-col gap-4 min-w-2xl max-w-2xl">
                {firstRowOptions.map((option) => (
                    <EnigmaPuzzleInput option={option} row={0} enigmaHandleChange={handleChange}/>
                ))}
            </div>
            
            
            <div className="grid grid-flow-col gap-4 min-w-2xl max-w-2xl">
                {secondRowOptions.map((option) => (
                    <EnigmaPuzzleInput option={option} row={1} enigmaHandleChange={handleChange} />
                ))}
            </div>

            <button onClick={() => handleClick(userAnswer)}> aaaaaaa </button>
        </>
        )   
    }
}
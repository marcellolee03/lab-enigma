import { useState } from "react";
import { usePuzzleContext } from "../../context/PuzzleContext";
import { useTimerContext } from "../../context/TimerContext";
import { type EnigmaOption, type Puzzle } from "../../models/Puzzle";

interface EnigmaPuzzleDisplayProps {
    puzzle: Puzzle
}

export function EnigmaPuzzleDisplay({ puzzle }: EnigmaPuzzleDisplayProps) {
    const { moveToNextPuzzle } = usePuzzleContext()
    const { applyPenalty } = useTimerContext()

    const optionButtonClasses = "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer transition  duration-300 ease-in-out hover:-translate-y-1 hover:scale-101"

    if (puzzle.answerType === "enigma") {
        const [ puzzleAnswers, setPuzzleAnswers ] = useState<string[]>(puzzle.answers)
        const [ firstRowOptions, setFirstRowOptions ] = useState<EnigmaOption[]>(puzzle.first_row_options)
        const [ secondRowOptions, setSecondRowOptions ] = useState<EnigmaOption[]>(puzzle.second_row_options)
        const [ userAnswer, setUserAnswer ] = useState<string[]>(["", ""])

        function handleChange(option: string, row: number) {
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
                    option.valid 
                    ? <label 
                        className= {optionButtonClasses}
                        key={option.content}>
                            <input
                                type="radio"
                                className="appearance-none"
                                name="choice-row-0"
                                value={option.content}
                                onChange={() => handleChange(option.content, 0)}
                                checked={userAnswer[0] === option.content}
                            />
                            {option.content}
                        </label>

                    : <label 
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                        key={option.content}>
                            {option.content}
                        </label>
                ))}
            </div>
            
            
            <div className="grid grid-flow-col gap-4 min-w-2xl max-w-2xl">
                {secondRowOptions.map((option) => (
                    option.valid 
                    ? <label 
                        className= {optionButtonClasses}
                        key={option.content}>
                            <input
                                type="radio"
                                className="appearance-none"
                                name="choice-row-1"
                                value={option.content}
                                onChange={() => handleChange(option.content, 1)}
                                checked={userAnswer[1] === option.content}
                            />
                            {option.content}
                        </label>

                    : <label 
                        className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                        key={option.content}>
                            {option.content}
                        </label>
                ))}
            </div>

            <button onClick={() => handleClick(userAnswer)}> aaaaaaa </button>
        </>
        )   
    }
}
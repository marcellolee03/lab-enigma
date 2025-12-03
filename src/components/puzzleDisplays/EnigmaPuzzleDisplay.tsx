import { useState } from "react";
import { type EnigmaOption, type Puzzle } from "../../models/Puzzle";
import { EnigmaPuzzleInput } from "./PuzzleInputs/EnigmaPuzzleInput";
import { EnigmaSubmitButton } from "../submitButtons/EnigmaSubmitButton";


interface EnigmaPuzzleDisplayProps {
    puzzle: Puzzle
}

export function EnigmaPuzzleDisplay({ puzzle }: EnigmaPuzzleDisplayProps) {

    if (puzzle.answerType === "enigma") {
        const [ puzzleAnswers, setPuzzleAnswers ] = useState<string[]>(puzzle.answers)
        const [ firstRowOptions, setFirstRowOptions ] = useState<EnigmaOption[]>(puzzle.first_row_options)
        const [ secondRowOptions, setSecondRowOptions ] = useState<EnigmaOption[]>(puzzle.second_row_options)
        const [ userAnswer, setUserAnswer ] = useState<string[]>(["", ""])

        return (
        <div className="grid place-items-center">
            <div className="p-10 m-4 shadow-xl rounded-2xl border border-gray-300 grid place-items-center gap-y-5">

                {puzzle.hint && <p className="font-bold">{puzzle.hint}</p>}
                
                <div className="grid grid-flow-col gap-4 min-w-2xl max-w-2xl">
                    {firstRowOptions.map((option) => (
                        <EnigmaPuzzleInput 
                            option={option} 
                            row={0} 
                            userAnswer={userAnswer} 
                            setUserAnswer={setUserAnswer}
                        />
                    ))}
                </div>
                
                <div className="grid grid-flow-col gap-4 min-w-2xl max-w-2xl">
                    {secondRowOptions.map((option) => (
                        <EnigmaPuzzleInput 
                            option={option} 
                            row={1} 
                            userAnswer={userAnswer} 
                            setUserAnswer={setUserAnswer}
                        />
                    ))}
                </div>

                <EnigmaSubmitButton 
                    puzzle={puzzle} 
                    userAnswer={userAnswer}
                    puzzleAnswers={puzzleAnswers}
                    setPuzzleAnswers={setPuzzleAnswers}
                    setFirstRowOptions={setFirstRowOptions}
                    setSecondRowOptions={setSecondRowOptions}
                />
            </div>
        </div>
        )   
    }
}
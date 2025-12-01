import { type Puzzle } from "../../models/Puzzle"
import { useState } from "react"
import { SubmitAnswerButton } from "../SubmitAnswerButton"
import { OpenPuzzleInput } from "./PuzzleInputs/OpenPuzzleInput"
import { CheckboxPuzzleInput } from "./PuzzleInputs/CheckboxPuzzleInput"
import { RadioPuzzleInput } from "./PuzzleInputs/RadioPuzzleInput"

interface PuzzleDisplayProps {
    puzzle: Puzzle
}

interface handleChangeParams {
    option?: string,
    event?: React.ChangeEvent<HTMLInputElement>,
    isChecked?: boolean
}

export type handleChangeFn = (params: handleChangeParams) => void

export function PuzzleDisplay({ puzzle }: PuzzleDisplayProps) {
    // useState in case puzzle.answerType is "open"
    const [ typedAnswer, setTypedAnswer ] = useState<string>("")
    const [ userAnswer, setUserAnswer ] = useState<string[]>([])

    function resetAllInputs() {
        setTypedAnswer("")
        setUserAnswer([])
    }

    function handleChange({ option, event, isChecked }: handleChangeParams) {
        if (puzzle.answerType === "checkbox" && option && isChecked !== null) {
            if (isChecked) {
                setUserAnswer(prevAnswers => [...prevAnswers, option])
            } else {
                setUserAnswer(prevAnswers =>
                    prevAnswers.filter(answer => answer !== option)
                )
            }

            console.log(userAnswer)
        }

        if (puzzle.answerType === "radio" && option) {
            setUserAnswer([option])
            return
        }

        if (puzzle.answerType === "open" && event) {
            const newTypedValue = event.target.value
            setTypedAnswer(newTypedValue)
            setUserAnswer([newTypedValue])
            return
        }
    }

    return (
            <div className="grid place-items-center">
                <div className="p-10 m-4 shadow-xl rounded-2xl border border-gray-300 grid place-items-center gap-y-5">
                    {puzzle.question && <p className="bg-gray-100 rounded-2xl p-4">{puzzle.question}</p>}

                    {puzzle.hint && <p>{puzzle.hint}</p>}

                    {puzzle.answerType === "radio" &&
                        <RadioPuzzleInput handleChange={handleChange} puzzle={puzzle} userAnswer={userAnswer} />
                    }

                    {puzzle.answerType === "checkbox" &&
                        <CheckboxPuzzleInput handleChange={handleChange} puzzle={puzzle} userAnswer={userAnswer} />
                    }

                    {puzzle.answerType === "open" &&
                        <OpenPuzzleInput handleChange={handleChange} typedAnswer={typedAnswer} />
                    }

                    <SubmitAnswerButton
                        answers={puzzle.answers} 
                        input={userAnswer} 
                        penalty={puzzle.penalty}
                        onClick={resetAllInputs}
                    />
                </div>
            </div>
        )
}
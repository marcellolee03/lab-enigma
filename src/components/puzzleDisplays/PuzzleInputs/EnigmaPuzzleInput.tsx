import { type EnigmaOption } from "../../../models/Puzzle"

interface EnigmaPuzzleInputProps {
    option: EnigmaOption
    row: number
    userAnswer: string[]
    setUserAnswer: React.Dispatch<React.SetStateAction<string[]>>
}

export function EnigmaPuzzleInput({ option, row, userAnswer, setUserAnswer }: EnigmaPuzzleInputProps){

    const optionButtonClasses = "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-101"
    const selectedButtonClasses = "bg-blue-700 transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded"
    const validatedButtonClasses = "bg-green-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"

    function enigmaHandleChange() {
            setUserAnswer(prev => {
                    const updated = [...prev]
                    updated[row] = option.content
                    return updated
                }
            )
    }

    return (
        <>
            {option.valid 
                ? ( userAnswer.includes(option.content)
                    ? <label 
                        className= {selectedButtonClasses}
                        key={option.content}>
                            <input
                                type="radio"
                                className="appearance-none"
                                name="choice-row-0"
                                value={option.content}
                                onChange={() => enigmaHandleChange()}
                            />
                            {option.content}
                        </label>
                    : <label 
                        className= {optionButtonClasses}
                        key={option.content}>
                            <input
                                type="radio"
                                className="appearance-none"
                                name="choice-row-0"
                                value={option.content}
                                onChange={() => enigmaHandleChange()}
                            />
                            {option.content}
                        </label>)
                : <label 
                    className={validatedButtonClasses}
                    key={option.content}>
                        {option.content}
                    </label>
            }
        </>
    )
}
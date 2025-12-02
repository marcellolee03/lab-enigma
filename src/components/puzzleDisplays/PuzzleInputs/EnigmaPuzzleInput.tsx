import { type EnigmaOption } from "../../../models/Puzzle"
import type { enigmaHandleChangeFn } from "../EnigmaPuzzleDisplay"

interface EnigmaPuzzleInputProps {
    option: EnigmaOption
    row: number
    enigmaHandleChange: enigmaHandleChangeFn
}

export function EnigmaPuzzleInput({ option, row, enigmaHandleChange }: EnigmaPuzzleInputProps){

    const optionButtonClasses = "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-101"

    return (
        <>
            {option.valid 
                ? <label 
                    className= {optionButtonClasses}
                    key={option.content}>
                        <input
                            type="radio"
                            className="appearance-none"
                            name="choice-row-0"
                            value={option.content}
                            onChange={() => enigmaHandleChange({option: option.content, row: row})}
                        />
                        {option.content}
                    </label>

                : <label 
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                    key={option.content}>
                        {option.content}
                    </label>
            }
        </>
    )
}